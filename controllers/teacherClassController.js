var express = require('express');
var router = express.Router();
var TeacherClass = require('../models/teacherClass.js')


// Create new teacherClass
router.post('/teacherClass', function(req, res) {
    new TeacherClass({

    }).save();
    res.end();
});


module.exports = router;