const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccidentSchema = new Schema({
   date: String,
   time: String,
   nameOfVictim: String,
   nameOfFaultDriver: String,
   city: String, state: String,
    numPeopleInvolved: String
});


module.exports = User = mongoose.model("accident", AccidentSchema);