// Load schemas/models
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const code = process.env.CODE || "ABC123";

module.exports = (req, res, next) => {

    if(req.body.role === 'agent'){
        if(req.body.code !== code){
            res.status(400).json({ code: "Invalid code." });
            return
        }
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(401).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                agentId: req.body.agentId,
            });

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
};