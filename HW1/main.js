"use strict";
import turf from "@turf/turf";
import fs from "fs";
export { check_point_in_polygon, read_polygons_from_file, polygon_name_extractor };

function polygon_name_extractor(regions){
  let polygons_out ={polygons : []}
  regions.forEach(region => {
    polygons_out.polygons.push(region.properties.name);
  });
  return polygons_out;
}
function check_point_in_polygon(point, feature_array) {
  let selected_regions = [];
  feature_array.forEach(feature => {
    let this_polygon = feature.geometry.coordinates;
    let aa = turf.polygon(this_polygon);
    let lat = parseInt(point.lat);
    let long = parseInt(point.long);
    let turf_point = turf.point([point.lat, point.long]);
    let is_point_in_polygon = turf.booleanPointInPolygon(
      turf_point,
      turf.polygon(this_polygon)
    );
    if (is_point_in_polygon) {
      selected_regions.push(feature);
    }
  });
  return selected_regions;
}
function read_polygons_from_file() {
  let input_data = fs.readFileSync("input.json", "utf8");
  let input_data_parsed = JSON.parse(input_data);
  let input_data_features = input_data_parsed["features"];
  return input_data_features;
}
