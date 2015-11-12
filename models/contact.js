'use strict';

var fs = require('fs');
var contacts = {};

contacts.find = function(cb) {
  fs.readFile('contacts.json',function(err,data){
    if(data){
      var contacts = JSON.parse(data);
    }
    cb(err,contacts || []);
  });
};

contacts.create = function(contact, cb){
  contacts.find(function(err,contacts){
    if(err) return cb(err);

    contacts.push(contact);

    var data = JSON.stringify(contacts);
    fs.writeFile('contacts.json',data,function(err){
      if(err) return cb(err);

      cb(null);
    });
  });
}

contacts.deletes = function(data,cb){
    fs.writeFile('contacts.json',data,function(err){
      if(err) return cb(err);
    });    
};

contacts.edit = function(data,cb){
    fs.writeFile('contacts.json',data,function(err){
      if(err) return cb(err);
    });    
};


module.exports = contacts;



