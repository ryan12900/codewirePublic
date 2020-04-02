const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const keys = process.env.JWT_SECRET || require('../config/config').secretOrKey;

module.exports = (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({errors: { email: "Email not found" }});
        }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            // User matched
            // Create JWT Payload
            const payload = {
                id: user.id,
                name: user.name
            };
    // Sign token
            jwt.sign(
                payload,
                keys,
                {
                    expiresIn: 900 // 15 minutes in seconds
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token,
                        id: user._id,
                        role: user.role
                    });
                }
            );
        } else {
            return res
                .status(400)
                .json({ errors: {password: "Password incorrect"}});
        }
    });
});


};