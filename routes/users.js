var express = require('express');
var router = express.Router();

    var todoList = require('../controllers/authCtrl');


/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond with a resource');
});

//router.get('/', todoList.list_all_tasks);
router.post('/user', todoList.create_a_task);

module.exports = router;


//'use strict';
//module.exports = function (app) {
//    
//
//    // todoList Routes
//    app.route('/tasks')
//        .get(todoList.list_all_tasks)
//        .post(todoList.create_a_task);
//
//    app.route('/tasks/:taskId')
//        .get(todoList.read_a_task)
//        .put(todoList.update_a_task)
//        .delete(todoList.delete_a_task);
//};