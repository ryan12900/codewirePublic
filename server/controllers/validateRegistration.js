const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (req, res, next) => {
    let signUpData = {};
    const {body} = req;
    let errors = {};

// Extract field from request and set empty fields to empty strings.
    signUpData.firstName = !isEmpty(body.firstName) ? body.firstName : "";
    signUpData.lastName = !isEmpty(body.lastName) ? body.lastName : "";
    signUpData.email = !isEmpty(body.email) ? body.email : "";
    signUpData.password = !isEmpty(body.password) ? body.password : "";
    signUpData.password2 = !isEmpty(body.password2) ? body.password2 : "";
    signUpData.role = !isEmpty(body.role) ? body.role : "";

// Check first and last name
    if (Validator.isEmpty(signUpData.name)) {
        errors.name = "Name field is required";
    }
// Check email
    if (Validator.isEmpty(signUpData.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(signUpData.email)) {
        errors.email = "Email is invalid";
    }

// Check passwords
    if (Validator.isEmpty(signUpData.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(signUpData.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(signUpData.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(signUpData.password, signUpData.password2)) {
        errors.password2 = "Passwords must match";
    }

// Check roles
    if (!(Validator.equals(signUpData.roles, 'customer') || Validator.equals(signUpData.roles, 'agent'))) {
        errors.role = "Invalid";
    }

// If there are any errors, set status code and send back response.
    const noErrors = Object.keys(errors).length === 0 && errors.constructor === Object;
    if(noErrors){
        next();
    } else {
        res.status(400).send({errors});
    }

};