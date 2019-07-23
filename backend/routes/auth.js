const express = require('express');
const router = express.Router();
const passport = require('passport');
// const cont = require('../controllers/auth'); // users routes controllers
const cont = require('../controllers');

router.post('/login', passport.authenticate('local'), cont.auth.login);
router.post('/register', cont.users.createUser);

module.exports = router;
