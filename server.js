require('./db/connect');
var express = require('express');
var bodyParser = require('body-parser');
var postRoutes = require('./routes/postRoutes');
var app = express();

app.use(bodyParser.json());
//in the tutorial there was app.use(express.static('public'));

app.use('/postRoutes');
app.use('*', function(req, res){
  res.status(404).json({message: 'Not Found'});
});

app.listen(4000, 'localhost', function(){
  console.log('Express listening on 4000');
});
