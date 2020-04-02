const express = require('./config/express.js');
const passport = require("passport");
const users = require("./routes/users");
const weather = require("./routes/weather");
const customer = require("./routes/customer");
const accidentRouter =  require('./routes/accident');
const adminRouter = require('./routes/admin');

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

// app.use("/customer", passport.authenticate('jwt', { session: false }),customer);
app.use("/customer", customer);

//Accident APi
app.use('/accidents', accidentRouter);

// Admin routes
app.use('/admin', adminRouter);


app.listen(port, () => console.log(`Server now running on port ${port}!`));