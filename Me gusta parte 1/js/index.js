function sumaLikes(numLikes) {
    let elemento = document.querySelector(numLikes);
    let actualLikes = parseInt(elemento.innerHTML);
    let totalLikes = actualLikes + 1;
    elemento.innerText = totalLikes;
}  