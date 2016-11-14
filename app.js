// require modules ========================================================================================
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var users = require('./controllers/user.js');

// initilize variables ========================================================================================
var app = express();
var port = process.env.PORT || 3000;
// setup view engine ========================================================================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + '/public')); // serve static files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/amsdb'); // connect to local mongoDB database
mongoose.connection.once('connected', function() {
    console.log("Connected to database")
});


app.use('/', users);

// start listning app  ========================================================================================
app.listen(port);
console.log('server live on port : ', port);