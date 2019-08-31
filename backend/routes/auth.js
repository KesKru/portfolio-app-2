const express = require('express');
const router = express.Router();
const passport = require('passport');
const contAuth = require('../controllers/auth');

// Login route
router.post('/login', passport.authenticate('local'), contAuth.login);
// Demo secret route for testing.
router.get('/secret', contAuth.isLoggedIn, function(req, res) {
  res.send('this is a secret page.');
});
module.exports = router;
