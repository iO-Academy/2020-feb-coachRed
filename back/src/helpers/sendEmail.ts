import nodemailer = require("nodemailer")
import { MailOptions } from "../interfaces/MailOptions"

export default (mailOptions: MailOptions) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'coach.red.proto', // gmail user
            pass: 'Mayden123', // gmail password
        },
    })

    transporter.sendMail(mailOptions, function (error: object, info: any) {

        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    });

}