'use strict';
//const turf = require('@turf/turf');
import turf from '@turf/turf'
//const fs = require('fs');
import fs from 'fs';
function check_point_in_polygon(point, feature_array){
    let selected_regions = []
    feature_array.forEach(feature => {
      let this_polygon = feature.geometry.coordinates;
      let aa = turf.polygon(this_polygon);
      let lat = parseInt(point.lat);
      let long = parseInt(point.long);
      let turf_point = turf.point([point.lat,point.long]);
        let is_point_in_polygon = turf.booleanPointInPolygon(turf_point, turf.polygon(this_polygon));
        if(is_point_in_polygon){
          console.log( "this is aaaaa" + aa);
          console.log(this_polygon);
          selected_regions.push(feature);
          console.log(this_polygon + " printed!!")
        }
        
    });
    //console.log(selected_regions);
    return selected_regions;
}
export {check_point_in_polygon, read_polygons_from_file};
function read_polygons_from_file(){
  let input_data = fs.readFileSync('input.json','utf8');
  let input_data_parsed = JSON.parse(input_data);
  let input_data_features = input_data_parsed['features'];
  //let coordinates_zero = input_data_features[0].geometry.coordinates;
  return input_data_features;
}
// let pt = turf.point([-77, 44]);
// let poly = turf.polygon([[
//   [-81, 41],
//   [-81, 47],
//   [-72, 47],
//   [-72, 41],
//   [-81, 41]
// ]]);
// let input_data = fs.readFileSync('input.json','utf8');
// let input_data_parsed = JSON.parse(input_data);
// let input_data_features = input_data_parsed['features'];
// console.log(input_data_features)
// let coordinates_zero = input_data_features[0].geometry.coordinates;
// console.log(coordinates_zero);
// console.log(typeof input_data_parsed);

// let b =turf.booleanPointInPolygon(pt, turf.polygon(coordinates_zero));
// console.log(b);