
'user strict';
var sql = require('./db.js');

//Movie object constructor
var Movie = function (movie) {
    this.movie = movie.movie;
    this.status = movie.status;
    this.created_at = new Date();
};

Movie.createMovie = async (newTask) => {
    // sql.query("INSERT INTO movies set ?", newTask, function (err, res) {

    //     if (err) {
    //         console.log("error: ", err);
    //         result(err, null);
    //     }
    //     else {
    //         console.log(res.insertId);
    //         result(null, res.insertId);
    //     }
    // });

    const insertResult = await sql.query("INSERT INTO movies set ?", newTask);
    return insertResult;
};

// Movie.getTaskById = function (taskId, result) {
//     sql.query("Select movie from movies where id = ? ", movieId, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);

//         }
//     });
// };

// Movie.getAllTask = function (result) {
//     sql.query("Select * from movies", function (err, res) {

//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             console.log('movies : ', res);

//             result(null, res);
//         }
//     });
// };

Movie.updateById = async (id, movie) => {
    // sql.query("UPDATE movies SET movie = ? WHERE id = ?", [movie.movie, id], function (err, res) {
    //     if (err) {
    //         console.log("error: ", err);
    //         result(null, err);
    //     }
    //     else {
    //         result(null, res);
    //     }
    // });

    const updateMovie = sql.query("UPDATE movies SET movie = ? WHERE id = ?", [movie.movie, id]);
    return updateMovie;
};

Movie.removeMovie = async (id) => {
    // sql.query("DELETE FROM movies WHERE id = ?", [id], function (err, res) {

    //     if (err) {
    //         console.log("error: ", err);
    //         result(null, err);
    //     }
    //     else {

    //         result(null, res);
    //     }
    // });

    const removeResult = await sql.query("DELETE FROM movies WHERE id = ?", [id]);
    return removeResult;
};

module.exports = movie;
