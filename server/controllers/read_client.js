const user = require('../models/User');

module.exports = async (req,res) =>{


    user.find({},function (err,data) {
        if(err){
            res.status(404).send("Error");
        }
        else{
            res.status(200).json({data});
        }
    });

};
