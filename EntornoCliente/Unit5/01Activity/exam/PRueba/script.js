window.onload = function () {
    inicializar();
};

function inicializar() {
    const buttonAgregar = document.getElementById('agregar');
    const buttonEnviar = document.getElementById('enviar');

    buttonAgregar.disabled = true;
    buttonEnviar.disabled = true;
}

const buttonAgregar = document.getElementById('agregar');
const buttonEnviar = document.getElementById('enviar');

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('correo');
const tamano = document.getElementById('tamano');
const cantidad = document.getElementById('cantidad');

const inputs = [
    [nombre, false],
    [telefono, false],
    [email, false],
    [tamano, false],
    [cantidad, false]
];

const resumenDePedido = [];

nombre.addEventListener('input', validarNombre);
telefono.addEventListener('input', validarTelefono);
email.addEventListener('input', validarEmail);
tamano.addEventListener('input', validarTamano);
cantidad.addEventListener('input', validarCantidad);
buttonAgregar.addEventListener('click', () =>{
    crearTarjeta()
    comprobarCampos()
})
buttonEnviar.addEventListener('click', () => {
    event.preventDefault();
    alert(`
    Nombre del cliente: ${nombre.value}
    Resumen de pedidos:
    ${getResumen()}
    Precio total: ${getPreccioFinal()}€
    `);
});

function validarNombre(event) {
    const valor = event.target.value.trim();
    let hayError = false;

    if (valor.length === 0) {
        verError(1, 'El campo nombre no puede estar vacío');
        hayError = true;
    } else if (valor.length > 30) {
        verError(1, 'El nombre no puede tener más de 30 caracteres');
        hayError = true;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/.test(valor)) {
        verError(1, 'El nombre solo puede contener letras y un único espacio entre nombres');
        hayError = true;
    }

    if (!hayError) quitarError(1);
}

function validarTelefono(event) {
    const valor = event.target.value.trim();
    let hayError = false;

    if (valor.length === 0) {
        verError(2, 'El campo teléfono no puede estar vacío');
        hayError = true;
    } else if (!/^\+?[0-9]{9,15}$/.test(valor)) {
        verError(2, 'El teléfono debe contener entre 9 y 15 dígitos, opcionalmente con "+" al inicio');
        hayError = true;
    }

    if (!hayError) quitarError(2);
}

function validarEmail(event) {
    const valor = event.target.value.trim();
    let hayError = false;

    if (valor.length === 0) {
        verError(3, 'El campo email no puede estar vacío');
        hayError = true;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)) {
        verError(3, 'El email no tiene un formato válido (ejemplo: usuario@dominio.com)');
        hayError = true;
    }

    if (!hayError) quitarError(3);
}

function validarTamano(event) {
    const valor = event.target.value.trim();
    let hayError = false;

    if (valor.length === 0) {
        verError(4, 'El campo tamaño no puede estar vacío');
        hayError = true;
    }

    if (!hayError) quitarError(4);
}

function validarCantidad(event) {
    const valor = event.target.value.trim();
    let hayError = false;

    if (valor.length === 0) {
        verError(5, 'El campo cantidad no puede estar vacío');
        hayError = true;
    } else if (!/^[0-9]+$/.test(valor)) {
        verError(5, 'La cantidad solo puede contener números');
        hayError = true;
    } else if (valor < 1 || valor > 10) {
        verError(5, 'La cantidad debe ser de 1 a 10');
        hayError = true;
    }

    if (!hayError) quitarError(5);
}

function comprobarCampos() {
    let allValid = inputs.every(input => input[1]);
    buttonAgregar.disabled = !allValid;
    buttonEnviar.disabled = resumenDePedido.length === 0;
}

function verError(id, mensaje) {
    const errorElement = document.getElementById(`error-input${id}`);
    if (errorElement) {
        errorElement.innerText = mensaje;
        errorElement.style.display = "block";
        errorElement.style.color = 'red'
        inputs[id - 1][1] = false;
    }
    comprobarCampos();
}

function quitarError(id) {
    const errorElement = document.getElementById(`error-input${id}`);
    if (errorElement) {
        errorElement.innerText = "";
        errorElement.style.display = "none";
        inputs[id - 1][1] = true;
    }
    comprobarCampos();
}

function crearTarjeta(){
    const pedidos = document.getElementById('pedidos')
    const areaPrecioFinal = document.getElementById('preciofinal')
    const pedido = document.createElement('div')
    const pedidosEnResumen =[]

    const tamano = getTamano()
    let precioTamano
    switch (tamano) {
        case 'Pequeño':
            precioTamano = 8
            break;

        case 'Mediano':
            precioTamano = 10
            break;

        case 'Grande':
            precioTamano = 12
            break;
    }
    const cantidad = getCantidad()
    let ingredientes = getIngrendientes()
    const precio = getPreio(precioTamano, ingredientes.length, cantidad)

    pedidosEnResumen.push(tamano, cantidad, ingredientes, precio)
    resumenDePedido.push(pedidosEnResumen)
    const precioFinal = getPreccioFinal()

    ingredientes = ingredientes.join(", ")
    if (ingredientes === ''){
        ingredientes = 'no hay ingredientes'
    }

    pedido.classList.add('tarjeta')
    pedido.innerHTML = `
        <p>${tamano} - ${precioTamano}€ x ${cantidad} (${precio}.00€)</p>
        <p>Ingredientes: ${ingredientes}</p>
        <button class="eliminar">Eliminar Pedido</button>
    `;
    // Añadir eventListener para eliminar el pedido
    const botonEliminar = pedido.querySelector('.eliminar');
    botonEliminar.addEventListener('click', () => eliminarPedido(pedido, pedidosEnResumen));

    areaPrecioFinal.innerHTML = `
        <h3>Preccio Final: ${precioFinal}€ </h3>
    `

    pedidos.appendChild(pedido)
    console.log(resumenDePedido)

}

function getTamano() {
    let tamano = document.getElementById('tamano').value
    switch (tamano) {
        case 'peque':
            tamano = 'Pequeño'
            break;

        case 'mediana':
            tamano = 'Mediano'
            break;

        case 'grande':
            tamano = 'Grande'
            break;
    }

    return tamano
}

function getCantidad(){
    return document.getElementById('cantidad').value
}

function getIngrendientes() {
    const ingredientes = []
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(ingrediente => {
        ingredientes.push(ingrediente.value)
    })
    return ingredientes
}

function getPreio(tamano, ingredientes, cantidad){
    return (tamano + ingredientes) * cantidad
}

function getPreccioFinal() {
    let precioFinal = 0;
    for (let i = 0; i < resumenDePedido.length; i++) {
        if (typeof resumenDePedido[i][3] === 'number') {
            precioFinal += resumenDePedido[i][3];
        }
    }
    return precioFinal;
}

function getResumen() {
    let resumen = "";
    for (let i = 0; i < resumenDePedido.length; i++) {
        let [tamano, cantidad, ingredientes, precio] = resumenDePedido[i];
        resumen += `
        Pizza${i+1} \n
        Tamaño: ${tamano}, Cantidad: ${cantidad}, \n
        Ingredientes: ${ingredientes.join(", ")}, Precio: $${precio}\n
        `;
    }
    return resumen;
}

function eliminarPedido(pedidoElemento, pedidoResumen) {
    // Eliminar el pedido del resumenDePedido
    const index = resumenDePedido.indexOf(pedidoResumen);
    if (index !== -1) {
        resumenDePedido.splice(index, 1);
    }

    // Eliminar el pedido del DOM
    pedidoElemento.remove();

    // Actualizar la visualización del precio final
    const areaPrecioFinal = document.getElementById('preciofinal');
    areaPrecioFinal.innerHTML = `
        <h3>Precio Final: ${getPreccioFinal()}€ </h3>
    `;

    comprobarCampos()

    console.log(resumenDePedido);
}