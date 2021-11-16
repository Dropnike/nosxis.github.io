function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function alertme(){
    alert("Warning !! As this website uses a PHP local database, any file that contains a PHP process or file will not work.");
}