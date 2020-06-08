"use strict";
exports.__esModule = true;
var express = require("express");
var sendFormInfo_1 = require("../controllers/sendFormInfo");
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var routes = function (app) {
    app.post('/newCoach/:coach', jsonParser, sendFormInfo_1["default"]);
};
exports["default"] = routes;
