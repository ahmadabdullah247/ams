var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define model =========================================================================
var DepartmentSchema = new Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('Department', DepartmentSchema);