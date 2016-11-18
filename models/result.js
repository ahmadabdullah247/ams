var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Assessment = require('../models/assessment.js');
var Student = require('../models/student.js');

// define model =========================================================================
var ResultSchema = new Schema({
    assessment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment' },
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    obtainedMarks: Number,
    date: Date,
    isAnnounced: Boolean
});

module.exports = mongoose.model('Result', ResultSchema);