"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var sportSchema = new mongoose.Schema({ name: String }, { collection: 'sport' });
exports["default"] = mongoose.model('Sport', sportSchema);
