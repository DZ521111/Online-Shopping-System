var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];

var n = 1;
var x = 0;

var a = document.getElementById("Reg-form");
a.onsubmit = print_reg;
var b = document.getElementById("Login-form");
b.onsubmit = print_login;

function print_reg(e) {
    e.preventDefault();
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("iname").value;
    list2[x] = document.getElementById("irusername").value;
    list3[x] = document.getElementById("iemailid").value;
    list4[x] = document.getElementById("inumber").value;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];

    document.getElementById("iname").value = null;
    document.getElementById("irusername").value = null;
    document.getElementById("iemailid").value = null;
    document.getElementById("inumber").value = null;
    document.getElementById("irpassword").value = null;

    n++;
    x++;
}

function print_login(e) {
    e.preventDefault();
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list5[x] = document.getElementById("ilusername").value;
    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);

    cel2.innerHTML = list5[x];

    document.getElementById("ilusername").value = null;
    document.getElementById("ilpassword").value = null;

    n++;
    x++;
}