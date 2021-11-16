var mode = false;

function myFunction() {
    if (mode == false) {
        document.body.style.backgroundImage = "linear-gradient(to bottom right,  rgb(0, 0, 0), rgb(97, 97, 97)";
        document.getElementById("btn-mode").textContent = "  Light";
        document.getElementById("left").style.background = "rgb(29, 29, 29)";
        document.getElementById("right").style.background = "rgb(20, 14, 14)";
        document.getElementById("right").style.color = "white";

        mode = true;
    } else {
        document.body.style.backgroundImage = "linear-gradient(to bottom right,white, rgb(0, 119, 255)";
        document.getElementById("btn-mode").textContent = "  Dark";
        document.getElementById("left").style.background = "blue";
        document.getElementById("right").style.backgroundImage = "linear-gradient(rgb(218, 218, 218), white)";
        document.getElementById("right").style.color = "black";
        mode = false;
    }
}