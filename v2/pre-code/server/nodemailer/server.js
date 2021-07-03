const nodemailer = require('nodemailer');

//Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

//Step 2
let mailOptions = {
    from: '',
    to: '',
    subject: '',
    text: ''
}

//Step 3
transporter.sendMail(mailOptions, function(err, data) {

});



