var Loginform = document.getElementById("Login-form");
var Regform = document.getElementById("Reg-form");
var indicator = document.getElementById("indicator");

function register() {
    Regform.style.transform = "translateX(0px)";
    Loginform.style.transform = "translateX(0px)";
}

function login() {
    Regform.style.transform = "translateX(300px)";
    Loginform.style.transform = "translateX(300px)";
}