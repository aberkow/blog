require('./db/connect');
var express = require('express');
var bodyParser = require('body-parser');
var postRoutes = require('./routes/postRoutes');
var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));


app.use(function(req, res, next){
  console.log('/', req.method, req.baseUrl, req.hostname, req.ip, req.originalUrl, req.path, req.protocol);
  next();
});

app.use('/', postRoutes);
app.use('*', function(req, res){
  res.status(404).json({message: 'Not Found'});
});

app.listen(4000, 'localhost', function(){
  console.log('Express listening on 4000');
});

exports.app = app;
