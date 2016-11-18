var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user.js')
    // define model =========================================================================
var StudentSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    batch: String,
});

module.exports = mongoose.model('Student', StudentSchema);