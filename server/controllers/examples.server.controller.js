const Example = require('../models/examples.server.model.js')

exports.hello = function(req, res) {
    res.write('Weather API \n');
    res.write('Insert a city name into the URL after "/" to search for a city.')
    res.end();
};