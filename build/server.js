require('./db/connect');
var express = require('express');
var bodyParser = require('body-parser');
//var passport = require('passport');
var basicAuth = require('basic-auth');
var morgan = require('morgan');

var app = express();
var router = express.Router();
//the controller has to go after the router otherwise it throws an error of undefined.

app.set('view engine', 'ejs');

require('./controllers/controllerIndex')(router);

//also look at json web token w express.

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(passport.initialize());
app.use(bodyParser.json());
app.use(express.static('public'));

//handles headers/cookies, body, session... contextual data
//e.g. req.session

// app.use('/', function(req, res, next){
//   console.log(req.originalUrl);
//   console.log(req.baseUrl);
//   console.log(req.path);
//   next();
// });
//
// app.use(function(req, res, next){
//   console.log('/', req.method, req.baseUrl, req.hostname, req.ip, req.originalUrl, req.path, req.protocol);
//   next();
// });

app.use(morgan('dev'));
//app.use(router) hooks the controllers and server together.
app.use('/', router);
app.use('*', function(req, res){
  debugger;
  res.status(404).json({message: 'Not Found'});
});

app.listen(4000, 'localhost', function(){
  console.log('Express listening on 4000');
});

exports.app = app;
