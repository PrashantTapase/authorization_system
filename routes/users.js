const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/userCtrl');
const {authMw} = require('../middlewares/authMw');

router.post('/', authCtrl.create_a_user);
router.put('/:id', authMw, authCtrl.update_a_user);

module.exports = router;