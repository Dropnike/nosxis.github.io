var selectedRow = null
var selected_destination = null;
var sel_class = null;
var additional= 0;
var table_data=0;
var pay,change;

window.onload = function() {
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("date_dep").setAttribute("min", today);
    document.getElementById('dis').style.display = 'none';
    document.getElementById('no_discount').checked = true;
}
function selectItem(sel) {
    if (sel.selectedIndex>8) {
        selected_destination = "Sogod to "+ sel.options[sel.selectedIndex].text;
    }
    else{
        selected_destination = "Tacloban to "+ sel.options[sel.selectedIndex].text;
    }
    
}
function selectclass() {
    if (document.getElementById("cls1").checked) {
        sel_class = "Economy";
        additional = 0;
    }
    else if (document.getElementById("cls2").checked) {
        sel_class = "Business";
        additional = 30;
    }
}
function open_form() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("input_form").style.display = "block";
}
function open_record() {
    if (table_data==0) {
        alert("No records found!");
    }
    else{
        document.getElementById("welcome").style.display = "none";
        document.getElementById("list").style.display = "block";
    }
}
function return_home() {
    document.getElementById("welcome").style.display = "block";
    document.getElementById("list").style.display = "none";
    document.getElementById("input_form").style.display = "none";
    resetForm();
}
function discount() {
    if (document.getElementById('no_discount').checked) {
        document.getElementById('dis').style.display = "none";
    }
    else{
        document.getElementById('dis').style.display = "block";
        document.getElementById('senior_count').style.display = "none";
        document.getElementById('pwd_count').style.display = "none";
        document.getElementById('std_count').style.display = "none";
        document.getElementById('senior_count').disabled = true;
        document.getElementById('senior_count').value = "";
        document.getElementById('pwd_count').disabled = true;
        document.getElementById('pwd_count').value = "";
        document.getElementById('std_count').disabled = true;
        document.getElementById('std_count').value = "";
        document.getElementById('Senior').checked = false;
        document.getElementById('pwd').checked = false;
        document.getElementById('std').checked = false;
    }
}
function discount1() {
    if (document.getElementById('Senior').checked) {
        document.getElementById('senior_count').disabled = false;
        document.getElementById('senior_count').style.display = "block";
    }
    else{
        document.getElementById('senior_count').disabled = true;
        document.getElementById('senior_count').style.display = "none";
        document.getElementById('senior_count').value = "";
    }
}
function discount2() {
    if (document.getElementById('pwd').checked) {
        document.getElementById('pwd_count').disabled = false;
        document.getElementById('pwd_count').style.display = "block";
    }
    else{
        document.getElementById('pwd_count').disabled = true;
        document.getElementById('pwd_count').style.display = "none";
        document.getElementById('pwd_count').value = "";
    }
}
function discount3() {
    if (document.getElementById('std').checked) {
        document.getElementById('std_count').disabled = false;
        document.getElementById('std_count').style.display = "block";
    }
    else{
        document.getElementById('std_count').disabled = true;
        document.getElementById('std_count').style.display = "none";
        document.getElementById('std_count').value = "";
    }
}
function onFormSubmit() {
    pay = document.getElementById("pay").value;
    var d1 = document.getElementById('std_count').value;
    var d2 = document.getElementById('pwd_count').value;
    var d3 = document.getElementById('senior_count').value;
    var seat = document.getElementById("seats").value;
    var formData = readFormData();
    change = pay-(formData.total_fare-formData.discounts);
    if (d1+d2+d3 <= seat) {
        if (document.getElementById("des").value!="") {
            if (change>=0) {
                table_data++;
            insertNewRecord(formData);
            resetForm();
            document.getElementById("welcome").style.display = "block";
            document.getElementById("input_form").style.display = "none";
            alert("You have payed "+ pay +" and recieved a change of "+ change+".");
            } else {
            alert("You need "+Math.abs(change)+" to complete the payment");
            }
        }
        else{
            alert("Please Choose a Destination")
        }
    }
    else{
        alert("Your discount exceeded the number of declared passenger.")
    }
}
function readFormData() {
    var dis1;
    var dis2;
    var dis3;
    if (document.getElementById('no_discount').checked) {
        dis1 = 0;
        dis2 = 0;
        dis3 = 0;
    }
    else{
        if (document.getElementById('Senior').checked){
            dis1=(document.getElementById("des").value * 0.20) * document.getElementById("senior_count").value;
        }
        else{
            dis1 = 0;
        }
        if (document.getElementById('pwd').checked){
            dis2=(document.getElementById("des").value * 0.20) * document.getElementById("pwd_count").value;
        }
        else{
            dis2 = 0;
        }
        if (document.getElementById('std').checked){
            dis3=(document.getElementById("des").value * 0.20) * document.getElementById("std_count").value;;
        }
        else{
            dis3 = 0;
        }
    }
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["des"] = document.getElementById("des").value;
    formData["seats"] = document.getElementById("seats").value;
    formData["discounts"] = dis1+dis2+dis3;
    formData["tm"] = document.getElementById("tm").value;
    formData["date_dep"] = document.getElementById("date_dep").value;
    formData["class_type"] = sel_class;
    formData["phone"] = document.getElementById("phone").value;
    formData["email"] = document.getElementById("email").value;
    formData["total_fare"] = (formData["seats"] * formData["des"]) - formData["discounts"] +additional;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("book_list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length); //Add a New row for the record table
    //Add a New cell or <td> for the record table
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = selected_destination;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.seats;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.discounts;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.tm;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.date_dep;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.class_type;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.phone;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.email;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.total_fare;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("book_list").deleteRow(row.rowIndex);
        resetForm();
        return_home();
        table_data--;
    }
}
function resetForm() {
    document.getElementById("input_form").reset();
    document.getElementById('no_discount').checked = true;
    document.getElementById('dis').style.display = "none";
    selectedRow = null;
}
