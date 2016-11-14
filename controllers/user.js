var express = require('express');
var router = express.Router();
var User = require('../models/user.js')

// Get all users
router.get('/', function(req, res) {
    res.render('pages/login');

    // User.find(function(err, users) {
    //     res.render('pages/login', { users: users });
    // });
});
// Create new user
router.post('/user', function(req, res) {
    new User({ name: req.body.name }).save();
    res.end();
});


module.exports = router;