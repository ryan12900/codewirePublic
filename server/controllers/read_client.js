const user = require('../models/User');

module.exports = async (req,res) =>{
    const {agentId} = req.params;

    user.find({agentId},function (err,data) {
        if(err){
            res.status(404).send("Error");
        }
        else{
            res.status(200).json({data});
        }
    });

};
