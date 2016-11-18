var express = require('express');
var router = express.Router();
var Course = require('../models/course.js')


// Create new course
router.post('/course', function(req, res) {
    new Course({

    }).save();
    res.end();
});


module.exports = router;