var passport = require('passport');
var User = require('../models/user.js');

module.exports = function() {
    require('./authorization/local.js')();
    require('./authorization/http.js')();

    passport.serializeUser(function(user, next) {
        next(null, user.id);
    });

    passport.deserializeUser(function(id, next) {
        User.findOne({ _id: id }, function(err, user) {
            if (err) {
                next(null, new Error());
            } else if (user == null || user == undefined) {
                next(null, null);
            }
            // req.session.user = user;
            // req.session.user.password = undefined;
            next(null, user);
        });
    });
};
//module.exports = passport;