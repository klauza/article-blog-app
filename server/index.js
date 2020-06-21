require('dotenv').config();
var request = require('request');
var session = require('express-session');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const sgMail = require('@sendgrid/mail');


const app = express();
app.use(helmet());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, sameSite: true }
}))

// accept cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/send");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./SMTP/smtp'));


if(process.env.NODE_ENV === 'production'){
  app.use( express.static( `${__dirname}/../client/build` ) );

  app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html')));
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));