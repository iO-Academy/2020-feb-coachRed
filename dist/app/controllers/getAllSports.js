"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sportModel_1 = require("../models/sportModel");
exports.default = (req, res) => {
    try {
        sportModel_1.default.find().then((sports) => {
            res.status(200).json({
                status: 'success',
                results: sports.length,
                data: { sports }
            });
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: "Unable to get list of sports",
            data: {
                error: err
            }
        });
    }
};
