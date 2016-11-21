// require modules ========================================================================================
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var passportHttp = require('passport-http');
var mongoose = require('mongoose');
// Controllers
var _user = require('./controllers/userController.js');
var _student = require('./controllers/studentController.js');
var _faculty = require('./controllers/facultyController.js');
var _assessment = require('./controllers/assessmentController.js');
var _branch = require('./controllers/branchController.js');
var _class = require('./controllers/classController.js');
var _course = require('./controllers/courseController.js');
var _department = require('./controllers/departmentController.js');
var _fee = require('./controllers/feeController.js');
var _result = require('./controllers/resultController.js');
var _subject = require('./controllers/subjectController.js');
var _teacherClass = require('./controllers/teacherClassController.js');

// initilize variables ========================================================================================
var app = express();
var port = process.env.PORT || 3000;

// database connection ========================================================================================
//mongoose.connect('mongodb://localhost:27017/amsdb'); // connect to local mongoDB database
mongoose.connect('mongodb://admin:123456@ds157667.mlab.com:57667/amsdb');
mongoose.connection.once('connected', function() {
    console.log("Connected to database")
});

// app configuration ========================================================================================
// set view path and templeting engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || "#!#S@4asff3242342",
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));
app.use(passport.initialize());
app.use(passport.session());

var User = require('./models/user.js');
passport.use(new passportLocal.Strategy(verifyCredentials));

passport.use(new passportHttp.BasicStrategy(verifyCredentials));

function verifyCredentials(username, password, next) {
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
}

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

function ensureAuthenticated(req, res, next) {
    req.isAuthenticated() ? next() : res.send(403);
}

app.use("/public", express.static(__dirname + '/public')); // serve static files

app.get('/', function(req, res) {
    req.isAuthenticated() ? res.render('pages/dashboard') : res.render('pages/login');
});
app.post('/', passport.authenticate('local'), function(req, res) {
    res.render('pages/dashboard', { isAuthenticated: req.isAuthenticated(), user: req.user });
});

app.get('/logout', function(req, res) {
    req.logout();
    res.render('pages/login');
})

app.get('/api', passport.authenticate('basic', { session: false }), function(req, res) {
    res.json({
        a: 'ho gaya',
        b: 'sai ha'
    })
});
// controller path
// app.use('/', _user);
//app.use('/student', _student);
// app.use('/faculty', _faculty);
// app.use('/assessment', _assessment);
// app.use('/branch', _branch);
// app.use('/class', _class);
// app.use('/course', _course);
// app.use('/department', _department);
// app.use('/fee', _fee);
// app.use('/result', _result);
// app.use('/subject', _subject);
// app.use('/teacherClass', _teacherClass);

// start listning app  ========================================================================================
app.listen(port);
console.log('server live on port : ', port);