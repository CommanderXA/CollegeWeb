const express = require('express');
const app = express();

// Routes
const routes = require('./routes/index');
app.use('/api', routes);
 
let logger = require("./logger/logger").logger;

logger.log({
  level: 'info',
  message: 'Hello distributed log files!'
});

app.listen(8080, () => console.log("Listening..."));