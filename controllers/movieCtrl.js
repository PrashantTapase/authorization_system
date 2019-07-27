'use strict';

var Movie = require('../models/authModel.js');

const create_a_movie = (req, res) => {
    var create_movie = new movie(req.body);
    console.log("body ", body);
    //handles null error 
    if (!new_task.username || !new_task.password) {

        res.status(400).send({
            error: true,
            message: 'Please provide username/password'
        });

    } else {

        Task.createT(new_task, (err, task) => {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
};

const update_a_movie = function (req, res) {
    Movie.updateById(req.params.userId, new Task(req.body), function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

const delete_a_movie = function (req, res) {
    Movie.remove(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json({
            message: 'Task successfully deleted'
        });
    });
};

module.exports = {
    create_a_movie,
    update_a_movie,
    delete_a_movie
};