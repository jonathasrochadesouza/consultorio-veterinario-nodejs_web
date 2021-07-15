exports.getMailer = function enviarEmail(userMail, textMail) {
require('dotenv').config();

const nodemailer = require('nodemailer');

//Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jonathasrochad@gmail.com',
        pass: '91192295Aa'
    }
});

//Step 2
let mailOptions = {
    from: 'jonathasrochad@gmail.com',
    to: userMail, 
    subject: 'Sua senha de acesso (Consultorio veterinario)',
    text: textMail
};

   const getSend = transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log('Error Occors: ', err);
        } else {
            return true;
            console.log('Email send!');
        }

    });
}


// function enviarEmail (userMail, textMail)) {
//     const getSend = transporter.sendMail(mailOptions, function(err, data) {
//          if (err) {
//              console.log('Error Occors: ', err);
//          } else {
//              return true;
//              console.log('Email send!');
//          }
 
//      });   
//  }


// mail.enviaremail();
// exports.default = enviarEmail();

// exports.default = Mail;

//Step 3
// transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//         console.log('Error Occors: ', err);
//     } else {
//         console.log('Email send!');
//     }
// });



