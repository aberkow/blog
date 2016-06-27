var mongoose = require('mongoose');
var env = require('../environment');
var config = require('./config');

console.log(env, 'env from connect');
console.log(config, 'config from connect');

console.log(config[env]);
mongoose.connect(config[env].url);
