'user strict';
const sql = require('./db.js');

//Movie object constructor
const Movie = function (movie) {
    this.moviename = movie.moviename;
    this.status = movie.status ? movie.status : 1;
    this.date = new Date();
};

const createMovie = async (newMovie) => {

    try {
        const insertResult = await sql.query("INSERT INTO movies set ?", newMovie);
        if (insertResult) {
            return true;
        } else {
            return false
        };
    } catch (error) {
        return error
    }

};

const updateById = async (id, value, key) => {

    try {

        let updateMovie;
        if (key == 'moviename') {
            updateMovie = await sql.query("UPDATE movies SET moviename = ? WHERE id = ?", [value, id]);
        } else if (key == 'status') {
            updateMovie = await sql.query("UPDATE movies SET status = ? WHERE id = ?", [value, id]);
        }

        if (updateMovie) {
            return true;
        } else {
            return false
        }
        
    } catch (error) {
        return error
    }
}

const getMovie = (id, result) => {
    sql.query(`SELECT moviename, date FROM movies WHERE id = ?`, [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = {
    Movie,
    createMovie,
    updateById,
    getMovie
};