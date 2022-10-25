const express = require('express');
const router = express.Router();
const {isAuth} = require('../middlewares/auth');

const {getAllUsers, getUsers, register, login, logout, putUsers, deleteUsers} = require('../controller/users.controllers');



router.get('/', getAllUsers);
router.get('/:id', [isAuth], getUsers);
router.post('/register', register);
router.post('/login', login);
router.post('/logout', [isAuth], logout);
router.put('/:id', putUsers);
router.delete('/:id', deleteUsers);



module.exports = router; 