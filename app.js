var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var hr = require('express-handlebars');
var routes = require('./routes/api');
var db = require('./models/db');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.engine('hr', hr({extname: 'hr', defaultLayout: 'main', layoutDir: __dirname + '/views/layouts'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hr');

app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json({type: 'application/json'}));

app.use(routes);

app.use(function(req,res) {
  res.type('text/html')
  res.status(404);
  res.render('404');
})

app.use(function(err,req, res, next){
  res.status(422).send({error: err.message});
  next();
})

app.listen(process.env.PORT || 4000, function() {
  console.log("app listening on port 4000")
})
