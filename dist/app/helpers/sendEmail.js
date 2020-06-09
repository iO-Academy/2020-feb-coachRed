"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
exports.default = (aCoach) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'coach.red.proto',
            pass: 'Mayden123',
        },
    });
    let mailOptions = {
        from: '"Coach Red" <Coach.Red.Proto@gmail.com>',
        to: aCoach.email,
        subject: "You successfully registered!",
        text: `Hi ${aCoach.firstName}, You have successfully registered Sincerely Coach Red`,
        html: `<p>Hi ${aCoach.firstName}, You have successfully registered <br> Sincerely Coach Red</p>`,
    };
    transporter.sendMail(mailOptions, function (error, info) { });
};
