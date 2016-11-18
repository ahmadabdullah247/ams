var express = require('express');
var router = express.Router();
var Faculty = require('../models/faculty.js')


// Create new user
router.post('/', function(req, res) {
    new Faculty({
        user_id: "582d7bf59b41a60d6b918de3"
    }).save();
    res.end();
});


module.exports = router;