const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    users = require("./routes/users"),
    weather = require("./routes/weather"),
    customer = require("./routes/customer"),
    accidentRouter =  require('./routes/accident'),
    adminRouter = require('./routes/admin');
    //cors = require('cors');


module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true ,
        useUnifiedTopology:true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable all CORS requests
    //app.use(cors());

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.all('/*', function(req, res, next) {
        // CORS headers
        res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        // Set custom headers for CORS
        res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
        if (req.method == 'OPTIONS') {
        res.status(200).end();
        } else {
        next();
        }
    });
    // Public Routes
    app.use("/users", users);

    // Protected Routes
    // app.use("/weather", passport.authenticate('jwt', { session: false }),weather);
    app.use("/weather",weather);

    // app.use("/customer", passport.authenticate('jwt', { session: false }),customer);
    app.use("/customer", customer);

    //Accident APi
    app.use('/accidents', accidentRouter);

    // Admin routes
    app.use('/admin', adminRouter);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }
    
    app.use(function(req, res, next) {
        if ((req.get('X-Forwarded-Proto') !== 'https')) {
          res.redirect('https://' + req.get('Host') + req.url);
        } else
          next();
    });

    return app
}



