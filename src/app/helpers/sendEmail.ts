import nodemailer = require("nodemailer")
import { CoachInterface } from "../../interfaces/CoachInterface"
export default (aCoach: CoachInterface) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'coach.red.proto', // gmail user
            pass: 'Mayden123', // gmail password
        },
    })

    let mailOptions : object = {
        from: '"Coach Red" <Coach.Red.Proto@gmail.com>', // sender address
        to: aCoach.email , // receiver
        subject: "You successfully registered!", // Subject line
        text: `Hi ${aCoach.firstName}, You have successfully registered Sincerely Coach Red`, // plain text body
        html: `<p>Hi ${aCoach.firstName}, You have successfully registered <br> Sincerely Coach Red</p>`, // html body
    }

    transporter.sendMail(mailOptions, function (error: object, info: any) {});

}