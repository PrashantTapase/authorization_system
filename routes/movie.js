const express = require('express');
const router = express.Router();

const movieCtrl = require('../controllers/movieCtrl');

router.get('/:id', movieCtrl.read_a_movie);
router.post('/', movieCtrl.create_a_movie);
router.put('/:id', movieCtrl.update_a_movie);

module.exports = router;