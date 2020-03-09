const examples = require('../controllers/weatherController.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(examples.hello);

  
module.exports = router;