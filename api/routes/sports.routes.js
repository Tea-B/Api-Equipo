const express = require('express');
const router = express.Router();
const {isAuth} = require('../middlewares/auth');

const {getAllSports, getSportById, postNewSports, putSports, deleteSports } = require('../controller/sports.controllers');



router.get('/',getAllSports);
router.get('/:id', [isAuth], getSportById)
router.post('/', postNewSports);
router.put('/:id', [isAuth], putSports );
router.delete('/:id', deleteSports );



module.exports = router;