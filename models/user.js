var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define model =========================================================================
var UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    address: String
});

module.exports = mongoose.model('User', UserSchema);