function myFunction(){
	alert ("There be much to plunder captain!");
}
function clickytext() {
    var textbox = document.getElementById('textbox');
    alert(textbox.value);
}

function changeColors(){
    document.getElementById("ahoy").style.color = randomColors();
 
}
function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function clickyname() {
    var x = document.getElementById("myText").value;
    document.getElementById("name").innerHTML = x;
}

    var itemsExist = true;
    var indexNum = 0;
    var unorderedList = document.getElementById('pirateList');
    var chest= new Array("Treasure", "Ship","Sword","Parrot","Rum");
    var myElement;

function additem(){
        for (i = 0; i < chest.length; i++ ) {
            myElement = document.createElement("li");
            myElement.innerHTML = chest[indexNum++];
            unorderedList.appendChild(myElement);
        }
    }
    if (itemsExist){
        additem();
    } else {
        document.write("error!");
    }