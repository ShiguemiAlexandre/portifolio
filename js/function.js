function subir_pergaminho() {
    let close = document.querySelector("#pergaminho");
    let papel = document.querySelector(".container_main");
    var paragrafo = document.querySelector(".click_pergaminho");
    
    if (close.classList.contains('open')) {
        close.classList.remove('open');
        papel.classList.remove('container_papel');
        paragrafo.classList.remove('abrir');
    } else {
        close.classList.add('open');
        papel.classList.add('container_papel');
        paragrafo.classList.add('abrir');
    }
}

//Outra forma de fazer uma troca de posição

// var selecionarpergaminho = document.getElementById("pergaminho");

// selecionarpergaminho.onclick =  _ => {
//   selecionarpergaminho.style.position = (selecionarpergaminho.style.position === "relative") ? "fixed" : "relative";
//   selecionarpergaminho.style.top = (selecionarpergaminho.style.position === "fixed") ? "0" : "30vh";
// };

// var selecionarpergaminho = document.getElementById("pergaminho");

// function open() {
//     selecionarpergaminho.style.marginTop = "100";

//     alert("algo");
// }

// selecionarpergaminho.onclick = function (e) {
//     e.preventDefault();
//     selecionarpergaminho.classList.toggle('toggle');
// };let