const express = require('express');
const router = express.Router();

const {getAllSports, getSportById, postNewSports, putSports, deleteSports } = require('../controller/sports.controllers');



router.get('/',getAllSports);
router.get('/:id', getSportById)
router.post('/', postNewSports);
router.put('/:id', putSports );
router.delete('/:id', deleteSports );



module.exports = router;