const Accident = require('../models/Accident');

const createAccident = async (req, res) => {
    const data = req.body;

    try {
        await Accident.create(data);
        res.json({message: "Succes!"}).send();
    } catch (e) {
        res.status(500).send();
    }


};

const getAllAccidents = async (req, res) => {
    try {
        const data = await Accident.find({});
        res.json(data).send();
    } catch (e) {
        res.status(500).send();
    }


};

const deleteAccident = async (req, res) => {
    try {
        const data = await Accident.findByIdAndDelete(req.params.id);
        res.json(data).send();
    } catch (e) {
        res.status(500).send();
    }
};

module.exports = {createAccident, getAllAccidents, deleteAccident}