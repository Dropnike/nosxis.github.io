$(document).ready(function(){
  $(".close").click(function(){
    $("#myAlert").alert("close");
  });
});
  var total = document.getElementById("total_price");
  var unit1 = document.getElementById("unit_1");
  var total1= document.getElementById("unit_total1");
  var unit2 =document.getElementById("unit_2");
  var total2=document.getElementById("unit_total2");
  var unit3 =document.getElementById("unit_3");
  var total3=document.getElementById("unit_total3");

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }
function add_order(itemNumber) {
  document.getElementById("order_table").style.display = "block";
  document.getElementById("empty_list").style.display = "none";

  if (itemNumber==1) {
    document.getElementById("item1").style.display = "table-row";
      unit1= unit1+1;
      total1= unit1*20;
      document.getElementById("unit_1").innerHTML = unit1+" /$20";
      document.getElementById("unit_total1").innerHTML = "$"+total1;
  } 
  else if (itemNumber==2) {
    document.getElementById("item2").style.display = "table-row";
      unit2= unit2+1;
      total2= unit2*25;
      document.getElementById("unit_2").innerHTML = unit2+" /$25";
      document.getElementById("unit_total2").innerHTML = "$"+total2;
  }
  else if (itemNumber==3) {
    document.getElementById("item3").style.display = "table-row";
      unit3=unit3+1;
      total3=unit3*35;
      document.getElementById("unit_3").innerHTML = unit3+" /$35";
      document.getElementById("unit_total3").innerHTML = "$"+total3;
  }
  else{
    window.alert("System Error Found!");
  }
  total=total1+total2+total3;
  document.getElementById("total_price").innerHTML = "$"+total;
  document.getElementById("alert_total").innerHTML = "$"+total;
}

function clear_order() {
  total = 0;
  total1 = 0;
  total2 = 0;
  total3 = 0;
  unit1 = 0;
  unit2 = 0;
  unit3 = 0;
  document.getElementById("total_price").innerHTML = total;
  document.getElementById("alert_total").innerHTML = total;
  document.getElementById("unit_3").innerHTML = unit3;
  document.getElementById("unit_total3").innerHTML = total3;
  document.getElementById("unit_2").innerHTML = unit2;
  document.getElementById("unit_total2").innerHTML = total2;
  document.getElementById("unit_1").innerHTML = unit1;
  document.getElementById("unit_total1").innerHTML = total1;
  document.getElementById("order_table").style.display = "none";
  document.getElementById("empty_list").style.display = "block";
  document.getElementById("item3").style.display = "none";
  document.getElementById("item2").style.display = "none";
  document.getElementById("item1").style.display = "none";
}

function pay() {
  document.getElementById("myAlert").style.display = "block";
  setTimeout(closing,3000)
}
function closing() {
  clear_order()
  document.getElementById("myAlert").style.display = "none";
}