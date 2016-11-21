var express = require('express');
var router = express.Router();
var Department = require('../models/department.js')


// Create new department
router.post('/', function(req, res) {
    new Department({
        branch_id:"582ee620e859700f883c5d08",
        name: req.body.name
    }).save();
    res.end();
});


module.exports = router;