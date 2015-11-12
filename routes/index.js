'use strict';

var express = require('express');
var router = express.Router();

var dbcontact = require('../models/contact');

router.get('/',function(req,res){
  dbcontact.find(function(err,contacts){
    res.render('index',{contacts: contacts});
  });
});

router.get('/delete',function(req,res){
  dbcontact.find(function(err,contacts){
    res.send(contacts);
  });
});

router.post('/delete',function(req,res){
  var data = req.body.target;
  dbcontact.deletes(data);
  res.send(req.body);
});

router.get('/edit',function(req,res){
  dbcontact.find(function(err,contacts){
    res.send(contacts);
  });
});

router.post('/edit',function(req,res){
  var data = req.body.edit;
  dbcontact.edit(JSON.stringify(data));
  res.send(req.body);
});

module.exports = router;



