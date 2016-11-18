var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user.js')
    // define model =========================================================================
var FacultySchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Faculty', FacultySchema);