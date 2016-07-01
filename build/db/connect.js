var mongoose = require('mongoose');
// var env = require('../environment');
// var config = require('./config');

//console.log(config, 'config from connect');
//console.log(env, 'env from connect');
//console.log(config[env].url, 'whole from connect.js');
//mongoose.connect(config[env].url);
//var mongodb_uri = 'mongodb://adam:adam@ds023478.mlab.com:23478/heroku_w0lk21nf';
var mongodb_uri = process.env.MONGODB_URI;

mongoose.connect(mongodb_uri, function(error){
  if (error){
    console.log('something went wrong in mongoose.connect');
  };
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//mongoose.connect('mongodb://test:1234@ds023478.mlab.com:23478/heroku_w01k21nf?authSource=dbWithUserCredentials');
