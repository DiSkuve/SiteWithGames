function error() {
    alert("You can't launch this game by Steam, you will be send on official site of this game");
    window.location.href = "https://playvalorant.com/en-gb/";
}

function readFile() {
    var input = document.getElementById("frm1");
    var text = "";
    var i;
    document.getElementById('Articles').innerHTML += "<p id = 'out'></p>";
    for (i = 0 ; i < input.length ; i++){
        text += input.elements[i].value + "<br>";
    }
    document.getElementById('out').innerHTML = text;
    document.getElementById('out').removeAttribute("id");
}

function Search(){

}