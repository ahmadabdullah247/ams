var express = require('express');
var router = express.Router();
var Result = require('../models/result.js')


// Create new result
router.post('/result', function(req, res) {
    new Result({

    }).save();
    res.end();
});


module.exports = router;