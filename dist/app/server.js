"use strict";
exports.__esModule = true;
var express = require("express");
var routes_1 = require("./routes");
var db_1 = require("./db");
//unused const required due to typescript import elision if not used
var database = db_1.db;
var app = express();
var port = 3000;
app.use(express.json());
app.use(express.urlencoded());
routes_1["default"](app);
app.listen(port, function () { return console.log("App listening at http://localhost:" + port); });
