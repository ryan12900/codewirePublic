const express = require('./config/express.js');
const passport = require("passport");



//const express = require('./express.js')
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);
const port = process.env.PORT || 5000;
const app = express.init();
app.listen(port, () => console.log(`Server now running on port ${port}!`));
