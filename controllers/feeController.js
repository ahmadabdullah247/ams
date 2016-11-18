var express = require('express');
var router = express.Router();
var Fee = require('../models/fee.js')


// Create new fee
router.post('/fee', function(req, res) {
    new Fee({

    }).save();
    res.end();
});


module.exports = router;