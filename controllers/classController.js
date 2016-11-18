var express = require('express');
var router = express.Router();
var Class = require('../models/class.js')


// Create new class
router.post('/class', function(req, res) {
    new Class({

    }).save();
    res.end();
});


module.exports = router;