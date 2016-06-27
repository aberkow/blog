var mongoose = require('mongoose');
var env = require('../environment');
var config = require('./config');

// console.log(config, 'config from connect');
// console.log(env, 'from connect');
console.log(config[env].url);
mongoose.connect(config[env].url);
