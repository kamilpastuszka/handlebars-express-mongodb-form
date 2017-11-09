var express = require('express');
var router = express.Router();
var path = require('path');
var mongodb = require('mongodb');
var Form = require('../models/form');


router.get('/', function(req, res) {
  res.render('form');

})

router.get('/thankyou',function(req,res){
  res.render('thankyou');
})


router.post('/', function(req, res){
  var form = new Form(req.body);
  form.save();
   console.log(req.body);
   res.redirect(303,'/thankyou');
});

module.exports = router;
