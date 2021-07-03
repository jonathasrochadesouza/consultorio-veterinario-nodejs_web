require('dotenv').config();

const nodemailer = require('nodemailer');

//Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

//Step 2
let mailOptions = {
    from: 'jonathasrochad@gmail.com',
    to: 'g2016arocha@gmail.com',
    subject: 'Sua senha de acesso (Consultorio veterinario)',
    text: 'Access consultorio veterinario'
};

//Step 3
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error Occors: ', err);
    } else {
        console.log('Email send!');
    }
});



