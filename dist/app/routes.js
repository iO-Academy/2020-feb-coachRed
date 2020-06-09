"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const getAllSports_1 = require("./controllers/getAllSports");
const registerCoach_1 = require("./controllers/registerCoach");
const app = express();
const routes = (app) => {
    app.get('/', (req, res) => { res.sendFile('index.html', { root: "./" }); });
    app.get('/sport', getAllSports_1.default);
    app.post('/coach', registerCoach_1.default);
};
exports.default = routes;
