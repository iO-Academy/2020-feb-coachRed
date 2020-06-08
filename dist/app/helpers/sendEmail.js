"use strict";
exports.__esModule = true;
var nodemailer = require("nodemailer");
exports["default"] = (function (aCoach) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'coach.red.proto',
            pass: 'Mayden123'
        }
    });
    var mailOptions = {
        from: '"Coach Red" <Coach.Red.Proto@gmail.com>',
        to: aCoach.email,
        subject: "You successfully registered!",
        text: "Hi " + aCoach.firstName + ", You have successfully registered Sincerely Coach Red",
        html: "<p>Hi " + aCoach.firstName + ", You have successfully registered Sincerely Coach Red</p>"
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
});
