const express = require('express');
const router = express.Router();

const {getAllUsers, getUsers, postNewUsers, putUsers, deleteUsers} = require('../controller/users.controllers');



router.get('/', getAllUsers);
router.get('/:id', getUsers);
router.post('/', postNewUsers);
router.put('/:id', putUsers);
router.delete('/:id', deleteUsers);



module.exports = router; 