'use strict';

const {
    Movie,
    createMovie,
    updateById,
    getMovie
} = require('../models/movieModel.js');

const create_a_movie = async (req, res) => {

    try {
        const new_movie = new Movie(req.body);
        //handles null error 
        if (!new_movie.moviename) {

            res.status(400).send({
                error: true,
                message: 'Please provide moviename'
            });

        } else {
            if (req.mwRole.includes('create')) {
                const result = await createMovie(new_movie);
                res.json({
                    error: false,
                    message: 'Record added successfully'
                });
            } else {
                res.json({
                    error: false,
                    message: 'You dont have sufficient permissions'
                });
            }
        }
    } catch (error) {
        res.json(error)
    }
};

const update_a_movie = async (req, res) => {
    if (req.body.moviename || req.body.status) {

        try {
            let result;
            if (req.mwRole.includes('update') && req.mwRole.includes('delete')) {

                if (req.body.moviename)
                    result = await updateById(req.params.id, req.body.moviename, 'moviename')

                if (req.body.status)
                    result = await updateById(req.params.id, req.body.status, 'status')

            } else if (req.mwRole.includes('update')) {
                if (req.body.moviename)
                    result = await updateById(req.params.id, req.body.moviename, 'moviename')
                else {
                    res.json({
                        error: false,
                        message: 'You dont have sufficient permissions'
                    });
                    return;
                }
            }

            if (result) {
                res.json({
                    error: false,
                    message: 'Record updated successfully'
                })
            } else {
                res.json({
                    error: false,
                    message: 'You dont have sufficient permissions'
                });
            }
        } catch (error) {
            res.json(error);
        }
    } else {

        res.status(400).send({
            error: true,
            message: 'Please provide movie details'
        });

    }
};

const read_a_movie = (req, res) => {
    if (req.mwRole.includes('read')) {
        getMovie(req.params.id, function (err, movie) {
            if (err)
                res.send(err);
            console.log(movie[0].moviename, movie[0].date);
            res.json(movie[0]);
        });
    } else {
        res.json({
            error: false,
            message: 'You dont have sufficient permissions'
        });
    }
};

module.exports = {
    create_a_movie,
    update_a_movie,
    read_a_movie
};