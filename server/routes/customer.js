const express = require("express");
const router = express.Router();

// Loading middleware functions
const quiz = require('../controllers/quiz');

// Route to update quiz score.
router.post('/:userId/quiz', quiz);

module.exports = router;
