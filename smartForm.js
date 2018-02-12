// Your jQuery goes here

var userData={};

$('#start').click(function(){

  console.log("hahaha");
  $('#welcome').hide();
  $('#q1').show();

});

$('#name').change(function(){
  console.log($('#name').val());
});

$('#submitUserDetail').click(function(){
  if ($('#name').val()  &&  $('#email').val()) {
    userData.name=$('#name').val();
    userData.email=$('#email').val();
    if (true) {

    }
    $('#q2').show();
    $('#q1').hide();
  }
  else {
    alert('Please Enter a name and an email');
  }


});
