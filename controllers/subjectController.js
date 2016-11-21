var express = require('express');
var router = express.Router();
var Subject = require('../models/subject.js')


// Create new subject
router.post('/', function(req, res) {
    new Subject({
        name: req.body.name,
        description: "xyz",
    }).save();
    res.end();
});


module.exports = router;