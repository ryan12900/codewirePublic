const express = require("express");
const router = express.Router();

// Loading middleware functions
const validateLogIn = require('../controllers/validateLogin');
const validateRegister = require('../controllers/validateRegistration');
const registerUser = require('../controllers/registerUser');
const loginUser = require('../controllers/loginUser');
// Register route
const registerMiddlewares = [validateRegister, registerUser ];
router.post("/register", registerMiddlewares);

// Login route
const loginMiddlewares = [validateLogIn, loginUser];
router.post('/login', loginMiddlewares);

module.exports = router;
