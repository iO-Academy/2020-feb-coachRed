"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose = require("mongoose");
const server = '127.0.0.1:27017';
const database = 'CoachRed';
class Database {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
            console.log('Database connection successful');
        })
            .catch(err => {
            console.error('Database connection error');
        });
    }
}
exports.db = new Database;
