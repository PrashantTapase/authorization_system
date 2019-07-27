const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/authCtrl');

/* GET users listing. */
router.get('/user', function (req, res, next) {
  res.send('respond with a resource');
});

//router.get('/', authCtrl.list_all_tasks);
router.post('/user', authCtrl.create_a_task);
router.put('/user', authCtrl.update_a_task);

module.exports = router;