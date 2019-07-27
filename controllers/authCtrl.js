'use strict';

var Task = require('../models/authModel.js');

const create_a_user = async (req, res) => {
    var create_user = new Task(req.body);
    console.log("body ", body);
    //handles null error 
    if (!new_task.username || !new_task.password) {

        res.status(400).send({
            error: true,
            message: 'Please provide username/password'
        });

    } else {

        Task.createTask(new_task, (err, task) => {

            if (err)
                res.send(err);
            res.json(task);
        });
    }
};

exports.update_a_user = function (req, res) {
    User.updateById(req.params.userId, new Task(req.body), function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// exports.list_all_tasks = function (req, res) {
//     Task.getAllTask(function (err, task) {
//         console.log('controller')
//         if (err)
//             res.send(err);
//         console.log('res', task);
//         res.send(task);
//     });
// };

// exports.read_a_task = function (req, res) {
//     Task.getTaskById(req.params.taskId, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };

// exports.delete_a_task = function (req, res) {

//     Task.remove(req.params.taskId, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json({
//             message: 'Task successfully deleted'
//         });
//     });
// };

module.exports = {
    create_a_user,
    update_a_user
    // delete_a_task,
    // read_a_task
};