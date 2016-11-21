var express = require('express');
var router = express.Router();
var Course = require('../models/course.js')


// Create new course
router.post('/', function(req, res) {
    new Course({
        department_id: req.body.department,
        subject_id: req.body.subject
    }).save();
    res.end();
});


module.exports = router;