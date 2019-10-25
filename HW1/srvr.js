import { check_point_in_polygon, read_polygons_from_file, polygon_name_extractor } from "./main.js";
import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
let features = read_polygons_from_file(); // should be changed to put request
console.log(features);
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.get("/", function(req, res) {
  console.log(req);
  let query = req.query;
  let lat = query.lat;
  let long = query.long;
  let point = { lat: lat, long: long };
  let selected_regions = check_point_in_polygon(point, features);
  let names_to_send = polygon_name_extractor(selected_regions);
  console.log(names_to_send);
  res.send(names_to_send);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.put("/", function(req, res) {
  let body = req.body;
  console.log(body);
  res.send(body);
});
