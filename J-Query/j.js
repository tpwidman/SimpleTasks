$(document).ready(function(){
$('#popup').click( function clickyname() {
 alert("yo");
 console.log("here");
});
// texbox alert //
$('#clickbox').click( function clickytext() {
    var input = $('#textbox').val();   
    alert(input);
});
$("#color").mouseover(function(){
    $("#color").toggleClass("blue");
});

console.log('here')
$('#redText').click(function () {
		$(this).css('color', 'red');
	});

$('#randomText').click(function () {
		$(this).css(
			'color', 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ')'
		, 500);
	});

console.log('here2')

var fruits = [ "Apple", "Banana", "Mango", "Pear" ];
var list = $("#fruits-list");
var parent = list.parent();

list.remove ().empty().each(function(i){
    for (var x = 0; x < fruits.length; x++){
        $(this).append('<li>' + fruits[x] + '</li>');
        if (x == fruits.length - 1){
            $(this).appendTo(parent);
        }
    }
});
$("#name").append("<span>Taylor</span>")
});