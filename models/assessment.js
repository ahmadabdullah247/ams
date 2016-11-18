var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Subject = require('../models/subject.js');
// define model =========================================================================
var AssessmentSchema = new Schema({
    type: String,
    subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    totalmarks: Number,
    date: Date
});

module.exports = mongoose.model('Assessment', AssessmentSchema);