'user strict';
var sql = require('./db.js');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

//Task object constructor
var User = function (task) {
    this.username = task.username;
    this.password = bcrypt.hashSync(task.password, salt);
    this.created_at = new Date();
};

const createUser = async (newTask) => {

    const insertResult = await sql.query("INSERT INTO users set ?", newTask);
    if (insertResult) {
        return true;
    } else {
        return false
    };

};

const updateById = async (id, roleid) => {

    try {
        const updateResult = await sql.query("UPDATE users SET roleid = ? WHERE id = ?", [roleid, id]);
        if (updateResult) {
            return true;
        } else {
            return false
        };
    } catch (error) {
        return false
    }

};

module.exports = {
    User,
    createUser,
    updateById
};