'use strict';

var Task = require('../models/authModel.js');

exports.list_all_tasks = function (req, res) {
    Task.getAllTask(function (err, task) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', task);
        res.send(task);
    });
};



const create_a_task = (req, res) => {
    var new_task = new Task(req.body);
    console.log("body ", body);
    //handles null error 
    if (!new_task.username || !new_task.password) {

        res.status(400).send({
            error: true,
            message: 'Please provide username/password'
        });

    } else {

        Task.createTask(new_task, function (err, task) {

            if (err)
                res.send(err);
            res.json(task);
        });
    }
};
module.exports = {
    create_a_task
};

exports.read_a_task = function (req, res) {
    Task.getTaskById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_task = function (req, res) {
    Task.updateById(req.params.taskId, new Task(req.body), function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_task = function (req, res) {


    Task.remove(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json({
            message: 'Task successfully deleted'
        });
    });
};