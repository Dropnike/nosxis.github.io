function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function article(articleID) {
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");

    if (articleID == "a1") {
        a1.style.display = "block";
        a2.style.display = "none";
        a3.style.display = "none";
        a4.style.display = "none";
        a5.style.display = "none";
        closeNav();
    } else if (articleID == "a2") {
        a2.style.display = "block";
        a1.style.display = "none";
        a3.style.display = "none";
        a4.style.display = "none";
        a5.style.display = "none";
        closeNav();
    } else if (articleID == "a3") {
        a3.style.display = "block";
        a2.style.display = "none";
        a1.style.display = "none";
        a4.style.display = "none";
        a5.style.display = "none";
        closeNav();
    } else if (articleID == "a4") {
        a4.style.display = "block";
        a2.style.display = "none";
        a3.style.display = "none";
        a1.style.display = "none";
        a5.style.display = "none";
        closeNav();
    } else if (articleID == "a5") {
        a5.style.display = "block";
        a2.style.display = "none";
        a3.style.display = "none";
        a4.style.display = "none";
        a1.style.display = "none";
        closeNav();
    }
}