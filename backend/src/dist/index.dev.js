"use strict";

require('dotenv').config({
  path: 'variables.env'
});

var createServer = require('./createServer');

var db = require('./db');

var server = createServer(); //Todo use express middleware to handle cookies (JWT)
//Todo use express middleware to populate current user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, function (deets) {
  console.log("Server is now running on http:/localhost:".concat(deets.port));
});