var express = require('express');
var router = express.Router();
var Assessment = require('../models/assessment.js')


// Create new assessment
router.post('/assessment', function(req, res) {
    new Assessment({

    }).save();
    res.end();
});


module.exports = router;