var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define model =========================================================================
var ClassSchema = new Schema({
    batch: String,
    section: String,
    dateCreated: Date,
    isActive: Boolean
});

module.exports = mongoose.model('Class', ClassSchema);