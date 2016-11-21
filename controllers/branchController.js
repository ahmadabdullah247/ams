var express = require('express');
var router = express.Router();
var Branch = require('../models/branch.js')


// Create new branch
router.post('/', function(req, res) {
    new Branch({
        code: "001",
        name: "XYZ School",
        address: "I-10/3, Islamabad"
    }).save();
    res.end();
});


module.exports = router;