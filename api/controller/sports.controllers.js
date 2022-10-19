const Sports = require('../modelos/sports.models');

const getAllSports = async (req,res) => {
    try {
        const allSports = await Sports.find();
        return res.status(200).json(allSports);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getSportById = async (req,res) => {
    try {
        const {id} = req.params;
        const getSportsById = await Sports.findById(id);
        return res.status(200).json(getSportsById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postNewSports = async (req, res) => {
    try {
        console.log(req.body)
        const {name, material, description} = req.body  
        const newSport = new Sports ({name, material, description});
        const createdSport = await newSport.save();
        return res.status(201).json(createdSport);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putSports = async (req,res) => {
    try {                                                 
        const {id} = req.params;
        const putSports = new Sports(req.body);
        putSports._id = id;

        const SportsDb = await Sports.findByIdAndUpdate(id, putSports, {new: true});
        if(!SportsDb){
            return res.status(404).json({"message": "Sports not found"});
        }
        return res.status(200).json(SportsDb);

    } catch (error) {
        return res.status(500).json(error)
    }
}; 

const deleteSports = async (req,res) => {
    try {
        const {id} = req.params;
        const SportsDb = await Sports.findByIdAndDelete(id);
        if(!SportsDb){
            return res.status(404).json({"message": "Sports not found"});
        }
        return res.status(200).json(SportsDb);
    } catch (error) {
        return res.status(500).json(error);   
};
}; 
module.exports = {getAllSports, getSportById, postNewSports, putSports, deleteSports};  