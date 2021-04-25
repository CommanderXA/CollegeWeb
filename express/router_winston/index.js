const express = require('express');
var session = require('express-session')
const app = express();

// Session
const sessionOptions = {
  key: 'user', // cookie name
  secret: '123456789', // change to your password
  resave: false, // disable session resave
  rolling: true, // reset max age on every use
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
    path: '/',
    secure: !true
  }
};
app.use(session(sessionOptions));

// Routes
const routes = require('./routes/index');
app.use('/api', routes);

let logger = require("./logger/logger").logger;

logger.log({
  level: 'info',
  message: 'Hello distributed log files!'
});

app.listen(8080, () => console.log("Listening..."));