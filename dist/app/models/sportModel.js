"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let sportSchema = new mongoose.Schema({ name: String }, { collection: 'sport' });
exports.default = mongoose.model('Sport', sportSchema);
