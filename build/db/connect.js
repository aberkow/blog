var mongoose = require('mongoose');
var env = require('../environment');
var config = require('./config');

console.log(config, 'config from connect');
console.log(env, 'from connect');
mongoose.connect(config[env].url);
