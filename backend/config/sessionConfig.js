const session = require('express-session');

module.exports = session({
  secret: process.env.SESSION_SECRET,
  duration: 60 * 60 * 1000,
  activeDuration: 15 * 60 * 1000,
  resave: true,
  saveUninitialized: true
});
