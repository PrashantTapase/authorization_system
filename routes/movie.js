const express = require('express');
const router = express.Router();

const movieCtrl = require('../controllers/movieCtrl');

//router.get('/', authCtrl.list_all_tasks);
router.post('/movie', movieCtrl.create_a_movie);
router.put('/movie', movieCtrl.update_a_movie);
router.delete('/movie', movieCtrl.update_a_task);

module.exports = router;