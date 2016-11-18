var express = require('express');
var router = express.Router();
var User = require('../models/user.js')

// login =================================================================================== 
router.get('/', function(req, res) {
    res.render('pages/login');
    // User.find(function(err, users) {
    //     res.render('pages/login', { users: users });
    // });
});
router.post('/', function(req, res) {
    User.findOne({ username: req.body.username, password: req.body.password }, function(err, user) {
        if (err) {
            res.render('pages/error');
        } else if (user == null || user == undefined) {
            res.render('pages/login');
        }
        res.render('pages/dashboard');
    });
});

// Create new user
router.post('/user', function(req, res) {
    new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        phone: req.body.phone,
        homephone: req.body.homephone,
        dob: req.body.dob,
        nic: req.body.nic,
        picture: req.body.picture,
        role: {
            isActive: req.body.role.isActive,
            isTeacher: req.body.role.isTeacher,
            isClassTeacher: req.body.role.isClassTeacher,
            isHeadOfDepartment: req.body.role.isHeadOfDepartment,
            isAdmin: req.body.role.isAdmin,
            isStudent: req.body.role.isStudent
        },
        dateCreated: req.body.dateCreated
    }).save();
    res.end();
});


module.exports = router;