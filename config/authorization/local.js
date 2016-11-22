var passport = require('passport');
var passportLocal = require('passport-local');
var User = require('mongoose').model('User');


module.exports = function() {
    passport.use(new passportLocal.Strategy(function(username, password, next) {
        User.findOne({ username: username, password: password }, function(err, user) {
            if (err) {
                next(null, new Error());
            } else if (user == null || user == undefined) {
                next(null, null);
            }
            // req.session.user = user;
            // req.session.user.password = undefined;
            next(null, user);
        });
    }));
};