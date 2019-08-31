const express = require('express');
const router = express.Router();
const usersCont = require('../controllers/users'); // users routes controllers
const val = require('../validation/users'); // Input validation middleware

// REST routes

// Index | Get all users
// Show | Get one user
// Create | Show form for ew user
router.post('/user', val.validateInputs, usersCont.createUser);
// Update
// Destroy

module.exports = router;
