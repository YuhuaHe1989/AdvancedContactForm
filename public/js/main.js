'use strict';

var editIndex;

$(document).ready(init);

function init(){
  $('.remove').on('click',removeContact);
  $('.edit').on('click',editContact);
  $('.modalSaveBtn').on('click',modalUpdate);
}

function modalUpdate(){

  var $modalName = $('#modalInputName').val();
  var $modalEmail = $('#modalInputEmail').val();
  var $modalPhone = $('#modalInputPhone').val();
  var $modalAddress = $('#modalInputAddress').val();

  $.get('/edit',function(data){

    if($modalName !== ''){
    data[editIndex].name = $modalName;
    $('#sample:nth-child('+(editIndex + 1)+')').find('.name').text($modalName);
    }
    if($modalEmail !== ''){
    data[editIndex].email = $modalEmail;
    $('#sample:nth-child('+(editIndex + 1)+')').find('.email').text($modalEmail);
    }
    if($modalPhone !== ''){
    data[editIndex].phone = $modalPhone;
    $('#sample:nth-child('+(editIndex + 1)+')').find('.phone').text($modalPhone);
    }
    if($modalAddress !== ''){
    data[editIndex].address = $modalAddress;
    $('#sample:nth-child('+(editIndex + 1)+')').find('.address').text($modalAddress);
    }


    $.post('/edit',{edit:data})
     .done(function(data){
       console.log(data);
      })
     .fail(function(err){
       console.log(err);
      })
  })

  $('#myModal').modal('hide');

}

function editContact(){
  editIndex = $(this).closest('tr').index();

}

function removeContact(){
  var index = $(this).closest('tr').index();
  var deleteIndex = index + 1;

  $.get('/delete',function(data){
    data.splice(index,1);
    var del = JSON.stringify(data);
    
      $.post('/delete',{target:del})
       .done(function(data){
        $('#sample:nth-child('+deleteIndex+')').remove();
        console.log(data);
        })
       .fail(function(err){
        console.log(err);
       })
    });
  }
  
  
