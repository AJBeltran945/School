function agregarElemento() {
    const texto = prompt("Introduce el texto del nuevo elemento:");
    if (texto) {
        const li = document.createElement("li");
        li.textContent = texto;
        document.getElementById("lista").appendChild(li);
    }
}

function borrarPrimero() {
    const lista = document.getElementById("lista");
    if (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

function borrarUltimo() {
    const lista = document.getElementById("lista");
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    }
}