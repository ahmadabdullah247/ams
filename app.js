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

// var local = require('./config/passport.js');
// console.log(local);
app.use("/public", express.static(__dirname + '/public')); // serve static files


// app.get('/', function(req, res) {
//     req.isAuthenticated() ? res.render('pages/dashboard') : res.render('pages/login');
// });

// app.post('/', passport.authenticate('local'), function(req, res) {
//     res.render('pages/dashboard', { isAuthenticated: req.isAuthenticated(), user: req.user });
// });

// app.get('/logout', function(req, res) {
//     req.logout();
//     res.render('pages/login');
// });

// app.get('/api', passport.authenticate('basic', { session: false }), function(req, res) {
//     res.json({
//         a: 'ho gaya',
//         b: 'sai ha'
//     })
// });
// controller path
app.use('/', require('./controllers/userController.js'));
// app.use('/student', require('./controllers/studentController.js'));
// app.use('/faculty', require('./controllers/facultyController.js'));
// app.use('/assessment', require('./controllers/assessmentController.js'));
// app.use('/branch', require('./controllers/branchController.js'));
// app.use('/class', require('./controllers/classController.js'));
// app.use('/course', require('./controllers/courseController.js'));
// app.use('/department', require('./controllers/departmentController.js'));
// app.use('/fee', require('./controllers/feeController.js'));
// app.use('/result', require('./controllers/resultController.js'));
// app.use('/subject', require('./controllers/subjectController.js'));
// app.use('/teacherClass', require('./controllers/teacherClassController.js'));

// start listning app  ========================================================================================
app.listen(port);
console.log('server live on port : ', port);