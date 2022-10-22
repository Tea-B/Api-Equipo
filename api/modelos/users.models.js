const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema (
    {
    name: {type: String, required: true},
    edad: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    deporte: [{type: Schema.Types.ObjectId, ref: "sports"}] 
    }, {timestamps: true}
);

const Users = mongoose.model('users', usersSchema);

module.exports = Users;
