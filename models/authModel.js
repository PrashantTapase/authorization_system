'user strict';
var sql = require('./db.js');

//Task object constructor
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.createTask = async (newTask) => {
    // sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {

    //     if (err) {
    //         console.log("error: ", err);
    //         result(err, null);
    //     }
    //     else {
    //         console.log(res.insertId);
    //         result(null, res.insertId);
    //     }
    // });

    const insertResult = await sql.query("INSERT INTO users set ?", newTask);
    return insertResult;
};

// Task.getTaskById = function (taskId, result) {
//     sql.query("Select task from users where id = ? ", taskId, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);

//         }
//     });
// };

// Task.getAllTask = function (result) {
//     sql.query("Select * from users", function (err, res) {

//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             console.log('tasks : ', res);

//             result(null, res);
//         }
//     });
// };

Task.updateById = function (id, task, result) {
    // sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
    //     if (err) {
    //         console.log("error: ", err);
    //         result(null, err);
    //     }
    //     else {
    //         result(null, res);
    //     }
    // });
    const updateResult = await sql.query("UPDATE users SET task = ? WHERE id = ?", [task.task, id]);
    return updateResult;
};

Task.remove = function (id, result) {
    sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Task;
