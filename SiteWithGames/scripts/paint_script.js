function Search(){
    alert("in developing")
}

function Registration(){
    alert("in developing")
}

function OpenIndexHTMLup(){
    window.location.href = ("../index.html")
}

function error() {
    alert("You can't launch this game by Steam, you will be send on official site of this game");
    window.location.href = "https://playvalorant.com/en-gb/";
}


function drawing(i) {
    let drawing = false;
    let x;
    let y;


    let Part = document.getElementById("draw");
    let Element = Part.getContext("2d");

    Part.addEventListener('mousedown', element => {
        x = element.offsetX;
        y = element.offsetY;
        drawing = true;
    });

    Part.addEventListener('mousemove', element => {
        if (drawing === true) {
            Draw(i, Element, x, y, element.offsetX, element.offsetY);
            x = element.offsetX;
            y = element.offsetY;
        }
    });

    Part.addEventListener("mouseup", element => {
        drawing = false
    });

    function Draw(i , Element , xST , yST , xF , yF) {

        let color = ["#00ff45", "#00ffff", "#1900ff", "#ff00f2", "#ff001e", "#f2ff00", "#ffae00", "#000000", "#ffffff"]

        Element.beginPath();
        Element.strokeStyle = color[i];
        Element.lineWidth = document.getElementById("brushSize").value;
        Element.moveTo(xST, yST);
        Element.lineTo(xF, yF);
        Element.stroke();
        Element.closePath();
    }

}