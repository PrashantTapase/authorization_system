const express = require('express');
const router = express.Router();

const userRoute = require('../routes/users');
const movieRoute = require('../routes/movie');
const {authMw} = require('../middlewares/authMw');

//router.get('/', authCtrl.list_all_tasks);
router.use('/user', userRoute);
router.use('/movie', authMw, movieRoute);

module.exports = router;