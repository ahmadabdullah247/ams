var express = require('express');
var router = express.Router();
var Subject = require('../models/subject.js')


// Create new subject
router.post('/subject', function(req, res) {
    new Subject({

    }).save();
    res.end();
});


module.exports = router;