var l = 1;

function error() {
    alert("You can't launch this game by Steam, you will be send on official site of this game");
    window.location.href = "https://playvalorant.com/en-gb/";
}

function PostText() {

    var NameDiv = "name" + l

    var input = document.getElementById("frm1");
    var text = "";
    var i;
    document.getElementById('Articles').innerHTML += "<p id = " + NameDiv + "></p>";
    for (i = 0 ; i < input.length ; i++){
        text += input.elements[i].value + "<br>";
    }
    let idStr = text.id;
    text += "<img onclick = 'DeletePost()' class = 'bin' src = media/images/png/bin.png alt=''>";
    document.getElementById(NameDiv).innerHTML = text;

    l +=1
}

function DeletePost(){
    alert("in developing")
}

function Search(){
    alert("in developing")
}

function Registration(){
    alert("in developing")
}
