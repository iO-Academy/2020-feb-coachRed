"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
const db_1 = require("./db");
const expressmongosanitize = require("express-mongo-sanitize");
//unused const required due to typescript import elision if db not used
const database = db_1.db;
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('dist/public/'));
app.use(express.urlencoded({ extended: true }));
app.use(expressmongosanitize());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
routes_1.default(app);
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
