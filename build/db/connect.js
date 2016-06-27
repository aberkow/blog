var mongoose = require('mongoose');
var env = require('../environment');
var config = require('./config');

console.log(config, 'config from connect');
console.log(env, 'env from connect');
console.log(config[env].url, 'whole from connect.js');
mongoose.connect(config[env].url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//mongoose.connect('mongodb://test:1234@ds023478.mlab.com:23478/heroku_w01k21nf');
