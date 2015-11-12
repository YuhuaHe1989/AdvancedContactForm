'use strict';

var contact = {
                name:'',
                email:'',
                phone:'',
                address:''
              }

$(document).ready(init);

function init(){
  $('.submit').on('click',submit);
}

function submit(){
  var name = $('.name').val();
  var email = $('.email').val();
  var phone = $('.phone').val();
  var address = $('.address').val();
  $('.name').val('');
  $('.email').val('');
  $('.phone').val('');
  $('.address').val('');

  contact.name = name;
  contact.email = email;
  contact.phone = phone;
  contact.address = address;

  $.post('/newcontact',contact)
  .done(function(data){
    console.log(data);
  })
  .fail(function(err){
    console.log(err);
  })

}



