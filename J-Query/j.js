// alert //
$('input[type=button]').click( function() {
 alert("test");   
});


// span //
$('button').on('click',function (e) {
     $('#demo').append('<span>'+$('textbox').val()+'</span>');
 });