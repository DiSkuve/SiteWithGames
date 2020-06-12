function readFile(object) {
    let file = object.files[0];
    let reader = new FileReader();
    reader.onload = function() {
        document.getElementById('newArticle').innerHTML += "<div id = 'out'></div>";
        document.getElementById('out').innerHTML = reader.result;
        document.getElementById('out').removeAttribute("id")
    }
    reader.readAsText(file)
}

function error() {
    alert("You can't launch this game by Steam, you will be send on official site of this game");
    window.location.href = "https://playvalorant.com/en-gb/";
}