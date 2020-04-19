const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['customer','agent']
    },
    quizScore: {
        type: Number,
        default: 0
    },
    addy: {
        type: String,
        required: true
    },
    dashcam: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    addy: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    agentId: {type: String, required: true}
});

module.exports = User = mongoose.model("users", UserSchema);