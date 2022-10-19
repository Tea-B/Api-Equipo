const Users = require('../modelos/users.models'); 

const getAllUsers = async (req,res) => {
    try {
        const allUsers = await Users.find().populate("deporte", "description");
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getUsers = async (req,res) => {
    try {
        const {id} = req.params;
        const getUsers = await Users.findById(id).populate("deporte", "description").select("name email deporte");
        return res.status(200).json(getUsers);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postNewUsers = async (req, res) => {
    try {
        const { name, edad, email, password, deporte } = req.body
        const newUsers = new Users({ name, edad, email, password, deporte });
        const createdUsers = await newUsers.save();
        return res.status(201).json(createdUsers);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putUsers = async (req,res) => {
    try {
        const {id} = req.params;
        const putUsers = new Users(req.body);
        putUsers._id = id;
        const UsersDb = await Users.findByIdAndUpdate(id, putUsers, {new: true});
        if (!UsersDb) {
            return res.status(404).json({"message":"Entry not found"});
        }
        return res.status(201).json(UsersDb);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const deleteUsers = async (req,res) => {
    try {
        const {id} = req.params;
        const usersDb = await Users.findByIdAndDelete(id);
        if (!usersDb) {
            return res.status(404).json({"message":"Entry not found"});
        }
        return res.status(200).json(usersDb);
    } catch (error) {
        return res.status(500).json(error)
    }
};

module.exports = {getAllUsers, getUsers, postNewUsers, putUsers, deleteUsers};