const User = require('../models/User');

// Extract user id from params and score from body to update DB.
module.exports = async (req,res) =>{
    const {userId} = req.params;
    const {score} = req.body;

    try {
        await User.findByIdAndUpdate(userId, {quizScore: score});
        res.json({data: "Successfully updated quiz score!"})
    } catch (e) {
        res.status(500).json({error: "There was an error updating the quiz."})
    }

};