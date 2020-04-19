const accident = require('../controllers/accident.controller.js'),
    express = require('express'),
    router = express.Router();

//router.route('/').get(accident.accidents);
router.route('/states=:stateName').get(accident.byState);
router.route('/states=:stateName/years=:year').get(accident.byStateYear);
router.route('/state=:stateName/county=:county/years=:year').get(accident.byStateCountyYear);
router.route('/state=:stateName/city=:cityName/year=:year').get(accident.byStateCityYear);
router.route('/analytics/state=:stateName/years=:year').get(accident.analytics);

module.exports = router;