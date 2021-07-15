module.exports.mail = function (emailTO, emailMessage) { 
	require('dotenv').config();

	const nodemailer = require('nodemailer');

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			/*
			 * Você tbm pode criar váriaveis .env de email e senha para chamar aqui
			 */
			user: SEU_EMAIL_AQUI
			pass: SUA_SENHA_AQUI
		}
	});

	let mailOptions = {
		from: 'jonathasrochad@gmail.com',
		to: emailTO,
		subject: 'Sua senha de acesso (Consultorio veterinario)',
		text: emailMessage
	};

	transporter.sendMail(mailOptions, function(err, data) {
		if (err) {
			console.log('Error Occors: ', err);
		} else {
			console.log('Email send!');
		}
	});
};




