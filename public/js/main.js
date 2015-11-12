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
  var $modalAdress = $('#modalInputAdress').val();

  $.get('/edit',function(data){

    if($modalName !== ''){
    data[editIndex].name = $modalName;
    }
    if($modalEmail !== ''){
    data[editIndex].email = $modalEmail;
    }
    if($modalPhone !== ''){
    data[editIndex].phone = $modalPhone;
    }
    if($modalAdress !== ''){
    data[editIndex].address = $modalAdress;
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
  $.get('/delete',function(data){
    data.splice(index,1);
    var del = JSON.stringify(data);
    
      $.post('/delete',{target:del})
       .done(function(data){
        console.log(data);
        })
       .fail(function(err){
        console.log(err);
       })
    });
  }
  
  
