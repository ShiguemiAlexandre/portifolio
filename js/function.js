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