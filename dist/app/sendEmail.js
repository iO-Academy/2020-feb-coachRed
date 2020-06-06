"use strict";
exports.__esModule = true;
var express = require("express");
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'coach.red.proto',
        pass: 'Mayden123'
    }
});
var mailOptions = {
    from: '"Coach Red" <Coach.Red.Proto@gmail.com>',
    to: 'james.waterhouse@yahoo.co.uk',
    subject: "You successfully regiestered!",
    text: "Write text here",
    html: "<b>Write HTML Here</b>"
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent: ' + info.response);
    }
});
var app = express();
app.listen(3000);
