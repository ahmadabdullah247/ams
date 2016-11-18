var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Department = require('../models/department.js');
var Subject = require('../models/subject.js');

// define model =========================================================================
var CourseSchema = new Schema({
    department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
});

module.exports = mongoose.model('Course', CourseSchema);