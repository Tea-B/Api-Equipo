const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sportsSchema = new Schema (
    {
    name: {type: String, required: true},
    material: {type: String, required: true},
    description: {type:String, required: true},
    }, {timestamps: true}
);

const Sports = mongoose.model('sports', sportsSchema );

module.exports = Sports;