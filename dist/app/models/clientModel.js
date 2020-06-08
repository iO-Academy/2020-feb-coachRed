"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var clientSchema = new mongoose.Schema({ name: String }, { collection: 'sport' });
exports["default"] = mongoose.model('Client', clientSchema);
