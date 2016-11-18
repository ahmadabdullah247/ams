var express = require('express');
var router = express.Router();
var Student = require('../models/student.js')


// Create new user
router.post('/', function(req, res) {
    new Student({
        user_id: "582d7bf59b41a60d6b918de3",
        batch: '2016'
    }).save();
    res.end();
});


module.exports = router;