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
    signUpData.phone = !isEmpty(body.phone) ? body.phone : "";
    signUpData.addy = !isEmpty(body.addy) ? body.addy : "";
    signUpData.city = !isEmpty(body.city) ? body.city : "";
    signUpData.state = !isEmpty(body.state) ? body.state : "";
    signUpData.dashcam = !isEmpty(body.dashcam) ? body.dashcam : "";

    console.log(signUpData);

// Check first and last name
    if (Validator.isEmpty(signUpData.firstName)) {
        errors.firstName = "First name field is required";
    }

    if (Validator.isEmpty(signUpData.lastName)) {
        errors.lastName = "Last name field is required";
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
    if (!(Validator.equals(signUpData.role, 'customer') || Validator.equals(signUpData.role, 'agent'))) {
        errors.role = "Invalid";
    }

//check everything else
// if (Validator.isEmpty(signUpData.phone)) {
//     errors.phone = "Phone number is required";
// }
// if (Validator.isEmpty(signUpData.addy)) {
//     errors.addy = "Address field is required";
// }
// if (Validator.isEmpty(signUpData.city)) {
//     errors.city = "City field is required";
// }
// if (Validator.isEmpty(signUpData.state)) {
//     errors.state = "State field is required";
// }
// if (Validator.isEmpty(signUpData.dashcam)) {
//     errors.dashcam = "Dashcam field is required";
// }

// If there are any errors, set status code and send back response.
    const noErrors = Object.keys(errors).length === 0 && errors.constructor === Object;
    if(noErrors){
        next();
    } else {
        res.status(400).send({errors});
    }

};