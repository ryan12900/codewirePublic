const express = require('./config/express.js');
const passport = require("passport");
const users = require("./routes/users");
const weather = require("./routes/weather");
const accidentRouter =  require('./routes/accident');

// Use env port or default
const port = process.env.PORT || 5000;

// Setting up express
const app = express.init();

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Public Routes
app.use("/users", users);

// Protected Routes
// app.use("/weather", passport.authenticate('jwt', { session: false }),weather);
app.use("/weather",weather);
//Accident APi
app.use('/accidents', accidentRouter);

app.listen(port, () => console.log(`Server now running on port ${port}!`));