const alojamiento = [
    {nombre: "Hotel Mar Azul", precios:{1:80, 2:120}, jubilado: 0.15},
    {nombre: "Resort Playa Dorada", precios:{1:70, 2:110, 3:140, 4:170}, jubilado: 0.20},
    {nombre: "Hostal Sol y Luna", precios:{1:50, 2:75, 3:100}, jubilado: 0.10},
]

console.log(alojamiento[0].precios["1"])
console.log(alojamiento[0].jubilado)

window.onload = function () {
    cargarHoteles();
    buttonReservar.disabled = true;
}

const buttonReservar = document.getElementById('reservar');

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('correo');
const hotel = document.getElementById('hotel');
const persona = document.getElementById('personas');
const noches = document.getElementById('noches');

nombre.addEventListener('input', validarNombre);
telefono.addEventListener('input', validarTelefono);
email.addEventListener('input', validarEmail);
hotel.addEventListener('input', validarHotel);
persona.addEventListener('input', validarPersonas);
noches.addEventListener('input', validarNoches);

buttonReservar.addEventListener('click', () => {
    event.preventDefault();
    alert(`
    REserva COnfirmada para ${getNombre()} en el alomanieto ${getHotel()}.
    Precio total: ${getPrecio()} por ${getNocher()} noche(s) para ${getPersonas()} persona(s)
    `)
});

const inputs = [
    [nombre, false],
    [telefono, false],
    [email, false],
    [hotel, false],
    [persona, false],
    [noches, false]
];

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

function validarHotel(event) {
    const valor = event.target.value.trim();
    let hayError = false;

    if (valor.length === 0) {
        verError(4, 'El campo tamaño no puede estar vacío');
        hayError = true;
    }

    if (!hayError) quitarError(4);
}

function validarPersonas(event) {
    const valor = event.target.value.trim();
    let hayError = false;



    if (valor.length === 0) {
        verError(5, 'El campo cantidad no puede estar vacío');
        hayError = true;
    } else if (!/^[0-9]+$/.test(valor)) {
        verError(5, 'La cantidad solo puede contener números');
        hayError = true;
    } else if (valor < 1 || valor > 10) {
        verError(5, 'La cantidad debe ser de 1 a las que puede los hoteles');
        hayError = true;
    }

    if (!hayError) quitarError(5);
}

function validarNoches(event) {
    const valor = event.target.value.trim();
    let hayError = false;

    if (valor.length === 0) {
        verError(6, 'El campo cantidad no puede estar vacío');
        hayError = true;
    } else if (!/^[0-9]+$/.test(valor)) {
        verError(6, 'La cantidad solo puede contener números');
        hayError = true;
    } else if (valor < 1 || valor > 10) {
        verError(6, 'La cantidad debe ser de 1 a 10');
        hayError = true;
    }

    if (!hayError) quitarError(6);
}

function comprobarCampos() {
    let allValid = inputs.every(input => input[1]);
    buttonReservar.disabled = !allValid;
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

function cargarHoteles() {
    const hotelSelect = document.getElementById('hotel');

    hotelSelect.innerHTML = '<option disabled selected>Seleccione un alojamiento</option>';

    for (let i = 0; i < alojamiento.length; i++) {
        const nombre = alojamiento[i].nombre
        const option = document.createElement('option');
        option.value = nombre;
        option.textContent = nombre;
        hotelSelect.appendChild(option);
    }
}

function getNombre (){
    return document.getElementById('nombre').value
}

function getHotel() {
    return document.getElementById('hotel').value
}

function getPersonas(){
    return document.getElementById('personas').value
}

function getNocher(){
    return document.getElementById('noches').value
}

function getPrecio(){
    let numPersonas = document.getElementById('personas')
    let hotel = 0
    switch (getHotel()) {
        case "Hotel Mar Azul":
            hotel = 0
            break;

        case 'Resort Playa Dorada':
            hotel = 1
            break;

        case 'Hostal Sol y Luna':
            hotel = 2
            break;
    }
    let precio= alojamiento[hotel].precios[`${numPersonas}`]
    return precio
}