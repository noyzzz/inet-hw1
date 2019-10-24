import {check_point_in_polygon, read_polygons_from_file} from "./main.js";

//const express = require('express');
import express from 'express';
const app = express()
const port = 3000
let features = read_polygons_from_file();// should be changed to put request
app.get('/', function (req, res) {
    let query = req.query;
    let lat = query.lat;
    let long = query.long;
    let point = {lat :lat,
      long: long
    };
    let selected_regions = check_point_in_polygon(point,features);
    console.log(selected_regions);
    res.send(selected_regions);
  })
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  
