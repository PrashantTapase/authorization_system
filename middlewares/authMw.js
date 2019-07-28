'use strict';

const {
    getRoleById,
    getPermissionId
} = require('../models/authModel.js');

const authMw = (req, res, next) => {

    const username = req.headers.username;
    const password = req.headers.password;

    if (username && password) {
        getRoleById(username, password, (err, result) => {

            if (err) {
                res.json({
                    error: true,
                    message: result
                });
            } else {

                if (result.length) {
                    console.log("Result =.", result);
                    let role = result[0].permissionids;
                    getPermissionId(role, (err, res) => {
                        if (err) {
                            res.json({
                                error: true,
                                message: err
                            });
                        } else {
                            req.mwRole = res;
                            next();
                        }

                    })
                } else {
                    res.json({
                        error: false,
                        message: 'Invalid username/password '
                    })
                }
            }
        });
    } else {
        res.json({
            error: false,
            message: 'Invalid username/password '
        })
    }

}

module.exports = {
    authMw
}