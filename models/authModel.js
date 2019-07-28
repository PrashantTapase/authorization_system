'user strict';

var sql = require('./db.js');

const bcrypt = require('bcrypt');

const getRoleById = (username, password, result) => {

    sql.query('SELECT roleid, password FROM users WHERE username = ?', [username], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err);
        } else {
            const roleid = res[0].roleid;
            const hashPassword = res[0].password;

            sql.query("SELECT permissionids FROM roles WHERE id = ?", [roleid], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(err);
                } else {
                    if (bcrypt.compareSync(password, hashPassword)) {
                        console.log("res: ", res);
                        result(null, res);
                    } else {
                        result(true, 'Invalid username/password');
                    }
                }
            });
        }
    })


};

const getPermissionId = (id, result) => {

    sql.query(`SELECT permission FROM permission WHERE id IN (${id})`, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            const newArray = []
            res.find(obj => {
                newArray.push(obj.permission)
            })
            result(null, newArray);
        }
    });

}

module.exports = {
    getRoleById,
    getPermissionId
}