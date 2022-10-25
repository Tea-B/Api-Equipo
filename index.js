const express = require('express');
const {connect} = require('./utils/database');
const dotenv = require('dotenv');

const sportsRouter = require('./api/routes/sports.routes');
const usersRouter = require('./api/routes/users.routes');

const PORT = 8000;

dotenv.config();
const app = express();
connect();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/users', usersRouter);
app.use('/sports', sportsRouter);  


app.listen(PORT, () => console.log(`listening on port:http://localhost:${PORT}`));