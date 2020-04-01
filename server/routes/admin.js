const express = require("express");
const router = express.Router();

// Loading middleware functions
const admin = require('../controllers/admin');

// Route to create accident
router.post('/accident', admin.createAccident);

// Route to get all accidents
router.get('/accidents', admin.getAllAccidents);

module.exports = router;
