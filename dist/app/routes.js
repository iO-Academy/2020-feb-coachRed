"use strict";
exports.__esModule = true;
var express = require("express");
var getAllSports_1 = require("./controllers/getAllSports");
var sendFormInfo_1 = require("../controllers/sendFormInfo");
var app = express();
var routes = function (app) {
    app.get('/sport', getAllSports_1["default"]);
    app.post('/newCoach/:coach', sendFormInfo_1["default"]);
};
exports["default"] = routes;
