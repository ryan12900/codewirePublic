const express = require("express");
const router = express.Router();

// Loading middleware functions
const quiz = require('../controllers/quiz');
const read_client = require('../controllers/read_client');

// Route to update quiz score.
router.post('/:userId/quiz', quiz);

router.get('/',read_client);

module.exports = router;
