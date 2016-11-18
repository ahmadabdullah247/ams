var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Branch = require('../models/branch.js');
// define model =========================================================================
var DepartmentSchema = new Schema({
    branch_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' },
    name: String
});

module.exports = mongoose.model('Department', DepartmentSchema);