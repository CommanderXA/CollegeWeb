const express = require('express');
var session = require('express-session')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Session
const sessionOptions = {
  key: 'user', // cookie name
  secret: '123456789', // change to your password
  resave: false, // disable session resave
  rolling: true, // reset max age on every use
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    path: '/',
    secure: !true
  }
};
app.use(bodyParser.json());
app.use(session(sessionOptions));

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/kinotower';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
const routes = require('./routes/index');
app.use('/api', routes);

let logger = require("./logger/logger").logger;

logger.log({
  level: 'info',
  message: 'Hello distributed log files!'
});

app.listen(8080, () => console.log("Listening..."));