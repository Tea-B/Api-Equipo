const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://sport:sport@cluster0.unueqb9.mongodb.net/deportes?retryWrites=true&w=majority';

const connect = async () => {
    try {
        const DB = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const {name, host} = DB.connection;
        console.log(`Connected to ${name} DB in host: ${host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connect, DB_URL}

