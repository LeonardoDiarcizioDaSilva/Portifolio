var checkbox = document.getElementById("menu");
var linksMenu1 = document.getElementsByClassName("item__lista-link")[0];
var linksMenu2 = document.getElementsByClassName("item__lista-link")[1];
var linksMenu3 = document.getElementsByClassName("item__lista-link")[2];
var linksMenu4 = document.getElementsByClassName("item__lista-link")[3];

function desmarcar() {

    if(checkbox.checked == true) {
        checkbox.checked = false;
    }
}

linksMenu1.onclick = desmarcar;
linksMenu2.onclick = desmarcar;
linksMenu3.onclick = desmarcar;
linksMenu4.onclick = desmarcar;

var darkMode = document.querySelector("button");
var texto = document.querySelector(".dark-mode__texto");

function passarMouse() {
    texto.style.display = 'flex';
}

function tirarMouse() {
    texto.style.display = 'none';
}

darkMode.onmouseenter = passarMouse;
darkMode.onmouseleave = tirarMouse;
