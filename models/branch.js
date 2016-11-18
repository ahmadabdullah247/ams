var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define model =========================================================================
var BranchSchema = new Schema({
    code: String,
    name: String,
    address: String
});

module.exports = mongoose.model('Branch', BranchSchema);