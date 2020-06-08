import express = require('express')
import nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'coach.red.proto', // gmail user
        pass: 'Mayden123', // gmail password
    },
})

let toEmailAddress : string = 'james.waterhouse@yahoo.co.uk'

let mailOptions : object = {
    from: '"Coach Red" <Coach.Red.Proto@gmail.com>', // sender address
    to: toEmailAddress, // receiver
    subject: "You successfully registered!", // Subject line
    text: "Write text here", // plain text body
    html: "<b>Write email content here</b>", // html body
}

transporter.sendMail(mailOptions, function (error: object, info: any) {

    if (error) {
        console.log(error)
    } else {
        console.log('Email sent: ' + info.response)
    }
});

const app : express.Application = express()

app.listen(3000)