var express = require('express');
var router = express.Router();
var Branch = require('../models/branch.js')


// Create new branch
router.post('/branch', function(req, res) {
    new Branch({

    }).save();
    res.end();
});


module.exports = router;