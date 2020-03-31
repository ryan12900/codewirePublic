const weatherMiddleware = require('../controllers/getWeather.js');
const express = require('express');
const router = express.Router();

router.get('/:city', weatherMiddleware.getweather);

module.exports = router;