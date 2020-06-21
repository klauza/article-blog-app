const express = require('express');
var router = new express.Router();
var request = require('request');
const sgMail = require('@sendgrid/mail');

router.post('/send', (req, res) => {
  console.log('smtp works!')
  // form inputs validation
  if(
    req.body.name === '' ||
    req.body.subject === '' ||
    req.body.email === '' ||
    req.body.message === ''
  ){
    return res.json({'success': false, "msg": "Please fill the form correctly"});
  }

// captcha validation
if(
  req.body.captcha === undefined ||
  req.body.captcha === '' ||
  req.body.captcha === null
){
  return res.json({'success': false, "msg": "Please select captcha"});
}

// Secret key
const secretCaptchaKey = process.env.CAPTCHA;

// Verify URL
const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretCaptchaKey}&response=${req.body.captcha}&remoteip${req.connection.remoteAddress}`;

// make request to verify url
request(verifyUrl, (error,response,body) => {
  body = JSON.parse(body);
  console.log(body);

  // checking if body is successfull
  // if NOT
  if(body.success !== undefined && !body.success){
    return res.json({'success': false, "msg": "Failed captcha verification"});
  }

  // if IT IS
  // 1 - send mail
  const output = `
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Subject: ${req.body.subject}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: [process.env.EMAIL_API, req.body.email],
    from: { email: process.env.EMAIL_API, name: 'Michal' },
    subject: 'A message from blog',
    text: '---',
    html: output,
  };

  sgMail.send(msg).then(() => {
    console.log('Message sent')
  }).catch((error) => {
    console.log(error.response.body)
  })

  console.log('node: mail was sent');

  // 2 inform user about success
  return res.json({'success': true, "msg": "Captcha passed"});
})
  
})

module.exports = router;