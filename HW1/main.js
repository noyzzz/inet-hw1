'use strict';
const turf = require('@turf/turf');
const fs = require('fs');
let pt = turf.point([-77, 44]);
let poly = turf.polygon([[
  [-81, 41],
  [-81, 47],
  [-72, 47],
  [-72, 41],
  [-81, 41]
]]);
let input_data = fs.readFileSync('input.json','utf8');
let input_data_parsed = JSON.parse(input_data);
let input_data_features = input_data_parsed['features'];
let coordinates_zero = input_data_features[0].geometry.coordinates;
console.log(coordinates_zero);
//console.log(typeof input_data_parsed);

let b =turf.booleanPointInPolygon(pt, turf.polygon(coordinates_zero));
console.log(b);