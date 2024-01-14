const nodemailer = require('nodemailer')
const path = require('path')
require('dotenv').config({path: path.join(__dirname, '../../.env')})

exports.sendEMail = async(data) => {
    const mailOptions = {
        from: 'from_address@example.com',
        to: `${data.email}`,
        subject: 'Email from microservice: A Test Message!',
        text: 'Hi there, it is a test mail!!!'
    }
    //create SMTP Transport object
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'test123@gmail.com',
            // Enter your Google password 
            pass:process.env.PASSWORD
        }
    })
    //send mail
    const info = await transport.sendMail(mailOptions)
    return info
}