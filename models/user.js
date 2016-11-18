var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define model =========================================================================
var UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    gender: String,
    address: String,
    phone: String,
    homephone: String,
    dob: Date,
    nic: String,
    picture: String,
    role: {
        isActive: Boolean,
        isTeacher: Boolean,
        isClassTeacher: Boolean,
        isHeadOfDepartment: Boolean,
        isAdmin: Boolean,
        isStudent: Boolean,
    },
    dateCreated: Date
});

module.exports = mongoose.model('User', UserSchema);