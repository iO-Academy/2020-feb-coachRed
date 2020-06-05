"use strict";
exports.__esModule = true;
var sportModel_1 = require("../models/sportModel");
exports["default"] = (function (req, res) {
    try {
        sportModel_1["default"].find().then(function (sports) {
            res.status(200).json({
                status: 'success',
                results: sports.length,
                data: { sports: sports }
            });
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
});
