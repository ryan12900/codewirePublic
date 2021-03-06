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
    dashcam: {
        type: String,
    },
    phone: {
        type: String,
    },
    addy: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    agentId: {type: String, required: true}
});

module.exports = User = mongoose.model("users", UserSchema);