var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define model =========================================================================
var SubjectSchema = new Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('Subject', SubjectSchema);