var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contacts' });
});

router.post('/send', function(req,res,next){
	var transporter=nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'cherkasovaviktory@gmail.com',
			pass: '123456789wild'
		}
	});

	var mainOption = {
		from: 'John Doe <johndoe@outlook.com>',
		to: 'cherkasovavika@mail.ru',
		subject: 'Website Submission',
		text: 'You have a new sibmission with the following details... Name: '+req.body.name+' Email:'+req.body.email+' Message:'+req.body.message,
		html: '<p>You got a new Submission with the efjnsjkndd.... </p><ul><li>Name: ' +req.body.name+'</li><li>Email: ' +req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mainOption, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});	
});
module.exports = router;