const turf = require('@turf/turf');
var pt = turf.point([-77, 44]);
var poly = turf.polygon([[
  [-81, 41],
  [-81, 47],
  [-72, 47],
  [-72, 41],
  [-81, 41]
]]);
 
let b =turf.booleanPointInPolygon(pt, poly);
console.log(b);