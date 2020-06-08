"use strict";
exports.__esModule = true;
var getAllSports_1 = require("./controllers/getAllSports");
var sendFormInfo_1 = require("./controllers/sendFormInfo");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var routes = function (app) {
    app.get('/sport', getAllSports_1["default"]);
    app.post('/newCoach/:coach', jsonParser, sendFormInfo_1["default"]);
};
exports["default"] = routes;
