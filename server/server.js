const express = require('./config/express.js');
const passport = require("passport");
const users = require("./routes/users");

// Use env port or default
const port = process.env.PORT || 5000;

// Setting up express
const app = express.init();

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/users", users);

app.listen(port, () => console.log(`Server now running on port ${port}!`));
