const User = require('../models/User');

// Extract user id from params and score from body to update DB.
module.exports = async (req,res) =>{
    const userId = req.params.userId;
    const data = req.body;
    console.log(req.params.userId);
    let string2 = JSON.stringify(data);
    let string3 = string2.substring(2,3);
    let quiz = parseInt(string3);

    try {
        await User.findByIdAndUpdate(userId, {quizScore: quiz});
        res.json({data: "Successfully updated quiz score!"})
    } catch (e) {
        res.status(500).json({error: "There was an error updating the quiz."})
    }

};
// module.exports = async (req,res) =>{


//     User.find({},function (err,data) {
//         if(err){
//             res.status(404).send("Error");
//         }
//         else{
//             res.status(200).json({data});
//         }
//     });

// };