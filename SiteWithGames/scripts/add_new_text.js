function readFile(object) {
    var file = object.files[0]
    var reader = new FileReader()
    reader.onload = function() {
        document.getElementById('out').innerHTML = reader.result
    }
    reader.readAsText(file)
}

function error() {
    alert("You can't launch this game by Steam, you will be send on official site of this game");
    window.location.href = "https://playvalorant.com/en-gb/";
}
