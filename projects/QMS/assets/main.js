var arr =[];
function chselect(choice_id) {
    for (let i = 0; i < arr.length; i++) {
        itemsss = arr[i];
        if (itemsss==choice_id) {
            alert("Already selected");
            break;
        }
    }
    if (choice_id==1) {
        document.getElementById("c1").style.backgroundColor = "rgba(0, 0, 0, .25)";
        arr.push(choice_id);
    }
    if (choice_id==2) {
    document.getElementById("c2").style.backgroundColor = "rgba(0, 0, 0, .25)";
    arr.push(choice_id);
}
    if (choice_id==3) {
    document.getElementById("c3").style.backgroundColor = "rgba(0, 0, 0, .25)";
    arr.push(choice_id);
}
    if (choice_id==4) {
    document.getElementById("c4").style.backgroundColor = "rgba(0, 0, 0, .25)";
    arr.push(choice_id);
}
    if (choice_id==5) {
    document.getElementById("c5").style.backgroundColor = "rgba(0, 0, 0, .25)";
    arr.push(choice_id);
}
    if (choice_id==6) {
    document.getElementById("c6").style.backgroundColor = "rgba(0, 0, 0, .25)";
    arr.push(choice_id);
}
    if (choice_id==7) {
    document.getElementById("c7").style.backgroundColor = "rgba(0, 0, 0, .25)";
    arr.push(choice_id);
}
    if (choice_id==8) {
    document.getElementById("c8").style.backgroundColor = "rgba(0, 0, 0, .25)";
    arr.push(choice_id);
}
    if (choice_id==9) {
    document.getElementById("c9").style.backgroundColor = "rgba(0, 0, 0, .25)";
    arr.push(choice_id);
}
    if (choice_id==10) {
    document.getElementById("c10").style.backgroundColor = "rgba(0, 0, 0, .25)";
    arr.push(choice_id);
}       

}

function clear_select() {
    arr.splice(0,arr.length);
    document.getElementById("c1").style.backgroundColor = "rgba(250, 250, 250, .25)";
    document.getElementById("c2").style.backgroundColor = "rgba(250, 250, 250, .25)";
    document.getElementById("c3").style.backgroundColor = "rgba(250, 250, 250, .25)";
    document.getElementById("c4").style.backgroundColor = "rgba(250, 250, 250, .25)";
    document.getElementById("c5").style.backgroundColor = "rgba(250, 250, 250, .25)";
    document.getElementById("c6").style.backgroundColor = "rgba(250, 250, 250, .25)";
    document.getElementById("c7").style.backgroundColor = "rgba(250, 250, 250, .25)";
    document.getElementById("c8").style.backgroundColor = "rgba(250, 250, 250, .25)";
    document.getElementById("c9").style.backgroundColor = "rgba(250, 250, 250, .25)";
    document.getElementById("c10").style.backgroundColor = "rgba(250, 250, 250, .25)";
}