'use strict';

var express = require('express');
var router = express.Router();
var contacts = require('../models/contact');

router.get('/',function(req,res){

  res.render('newcontact');
});

router.post('/',function(req,res){
  var data = req.body;
  contacts.create(data,function(err){
    if(err){
        console.log('ERROR WITH CREATE:',err);
    }else {
      console.log('contacts created successfully.');
    }
  });
})

module.exports = router;