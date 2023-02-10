var clique = document.getElementById("btn-menu");
var menuLateral = document.getElementById("menu-lateral");

clique.onclick = function (e) {
    e.preventDefault();
    menuLateral.style.marginLeft = "0";
};