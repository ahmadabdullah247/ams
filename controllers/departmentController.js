var express = require('express');
var router = express.Router();
var Department = require('../models/department.js')


// Create new department
router.post('/department', function(req, res) {
    new Department({

    }).save();
    res.end();
});


module.exports = router;