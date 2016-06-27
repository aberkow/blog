var mongoose = require('mongoose');
var env = require('../environment');
var config = require('./config');

// console.log(config, 'config from connect');
// console.log(env, 'from connect');
console.log(config[env].url, 'from connect.js');
//mongoose.connect(config[env].url);
mongoose.connect('mongodb://aberkow:qx&YL&#8U3fq@ds023478.mlab.com:23478/heroku_w01k21nf');
