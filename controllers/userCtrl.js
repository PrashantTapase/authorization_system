'use strict';

const User = require('../models/userModel.js');

const create_a_user = async (req, res) => {

    try {
        const new_user = new User.User(req.body);
        //handles null error 
        if (!new_user.username || !new_user.password) {

            res.status(400).json({
                error: true,
                message: 'Please provide username/password'
            });
        } else {
            const result = await User.createUser(new_user);
            res.json({
                error: false,
                message: 'Record inserted successfully'
            });
        }

    } catch (error) {
        res.json(error);
    }

};

const update_a_user = async (req, res) => {

    try {
        if (req.mwRole.includes('updatePermission')) {
            const result = await User.updateById(req.params.id, req.body.roleid)
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

};

module.exports = {
    create_a_user,
    update_a_user
    // delete_a_task,
    // read_a_task
};