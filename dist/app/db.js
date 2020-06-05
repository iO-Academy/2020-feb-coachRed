"use strict";
var mongoose = require("mongoose");
var server = '127.0.0.1:27017';
var database = 'CoachRed';
var Database = /** @class */ (function () {
    function Database() {
        this._connect();
    }
    Database.prototype._connect = function () {
        mongoose.connect("mongodb://" + server + "/" + database)
            .then(function () {
            console.log('Database connection successful');
        })["catch"](function (err) {
            console.error('Database connection error');
        });
    };
    return Database;
}());
module.exports = new Database();
