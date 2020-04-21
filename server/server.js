const express = require('./config/express.js');
const passport = require("passport");


// Use env port or default
const port = process.env.PORT || 5000;

// Setting up express
const app = express.init();

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Public Routes



app.listen(port, () => console.log(`Server now running on port ${port}!`));