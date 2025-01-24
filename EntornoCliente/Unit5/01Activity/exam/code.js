window.onload = function() {


    button.disabled = true;
    button2.disabled = true;

}

const button = document.getElementById('aggregar');
const button2 = document.getElementById('enviar');

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('correo');
const tamano = document.getElementById('tamano');
const cantidad = document.getElementById('cantidad');

const pedidos =[]


button.addEventListener('click', function(){
    crearTarjeta();
});

button2.addEventListener('click', function(){
    verResumen()
    window.location.reload();
});

nombre.addEventListener('input', validarNombre);
telefono.addEventListener('input', validarTelefono);
email.addEventListener('input', validarEmail);
tamano.addEventListener('input', validarTamano);
cantidad.addEventListener('input', validarCantidad);

const inputs = [
    [nombre, false],
    [telefono, false],
    [email, false],
    [tamano, false],
    [cantidad, false]
];

// funcion para comprobar si todos los campos estan completos
// y se compruebe si todos los campos están completos. Si todos los campos están completos,
// se habilita el botón de enviar. Si no, se deshabilita.
function comprobarCampos(){
    let alltrue = true;

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i][1]) {
            alltrue = false;
            break;
        }
    }

    button.disabled = !alltrue;
}

// Función para mostrar un mensaje de error
// que es un div que por defecto esta oculto
// pero que se muestra cuando llama a este funcion
function verError(id, message) {
    const errorElement = document.getElementById(`error-input${id}`);
    if (errorElement) {
        errorElement.innerText = message; // Set the error message
        errorElement.style.display = "block"; // Make sure the error is visible
        inputs[id - 1][1] = false;
    }
    comprobarCampos()
}

// Función para limpiar un mensaje de error
// quitas el mensaje de error y lo ocultas
// y cambias el estado del campo a true
function quitarError(id) {
    const errorElement = document.getElementById(`error-input${id}`);
    if (errorElement) {
        errorElement.innerText = ""; // Clear the error message
        errorElement.style.display = "none"; // Hide the error
        inputs[id - 1][1] = true;
    }
    comprobarCampos()
}


// Función de validación del nombre
function validarNombre(event) {
    const nombre = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (nombre.length === 0) {
        verError(1, 'El campo nombre no puede estar vacío');
        hayError = true;
    }

    // Validar si el nombre tiene más de 30 caracteres
    if (nombre.length > 30) {
        verError(1, 'El nombre no puede tener más de 30 caracteres');
        hayError = true;
    }

    // Validar que solo contiene letras (incluyendo acentos y la ñ), y un solo espacio entre nombres
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
    if (!regex.test(nombre)) {
        verError(1, 'El nombre solo puede contener letras, acentos y un único espacio entre nombres');
        hayError = true;
    }


    if (!hayError) {
        quitarError(1);
    }
}

// Función de validación del teléfono
function validarTelefono(event){
    const telefono = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (telefono.length === 0) {
        verError(2, 'El campo teléfono no puede estar vacío');
        hayError = true;
    }

    // Validar que solo contenga números y, opcionalmente, un "+" al inicio
    const regex = /^\+?[0-9]{9}$/;
    if (!regex.test(telefono)) {
        verError(2, 'El teléfono solo puede contener números y, opcionalmente, un "+" al inicio');
        hayError = true;
    }

    if (!hayError) {
        quitarError(2);
    }
}

// Función de validación del email
function validarEmail(event){
    const email = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (email.length === 0) {
        verError(3, 'El campo email no puede estar vacío');
        hayError = true;
    }

    // Validar el formato del email
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        verError(3, 'El email no tiene un formato válido (ejemplo: usuario@dominio.com)');
        hayError = true;
    }

    if (!hayError) {
        quitarError(3);
    }
}

// Función de validación del tamaño
function validarTamano(event){
    const tamano = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (tamano.length === 0) {
        verError(4, 'El campo tamaño no puede estar vacío');
        hayError = true;
    }

    if (!hayError) {
        quitarError(4);
    }
}

// Función de validación de la cantidad
function validarCantidad(event){
    const cantidad = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (cantidad.length === 0) {
        verError(5, 'El campo cantidad no puede estar vacío');
        hayError = true;
    }

    // Validar que solo contenga números
    const regex = /^[0-9]+$/;
    if (!regex.test(cantidad)) {
        verError(5, 'La cantidad solo puede contener números');
        hayError = true;
    }

    //validar que el numero sea del 1 al 10
    if(cantidad < 1 || cantidad > 10){
        verError(5, 'La cantidad debe ser de 1 a 10');
        hayError = true;
    }

    if (!hayError) {
        quitarError(5);
    }
}

// funcion para obtener los ingredientes seleccionados
function getIngrendientes() {
    const checkboxes = document.querySelectorAll('input[name="ingredientes"]:checked');

    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

// funcion para calcular el precio
function calcularPrecio(){
    const tamano = document.getElementById('tamano').value;
    let nombretamano = ''
    const cantidad = document.getElementById('cantidad').value;
    const ingredientes = getIngrendientes();

    const precioIngrediente = ingredientes.length

    let precio = 0;

    if(tamano === 'peque'){
        nombretamano = 'Pequeña - 8€ x' + cantidad
        precio = 8;
    }else if(tamano === 'mediana'){
        nombretamano = 'Mediana - 10€ x' + cantidad
        precio = 10;
    }else if(tamano === 'grande'){
        nombretamano = 'Grande - 12€ x' + cantidad
        precio = 12;
    }

    precio = (precio + precioIngrediente) * cantidad;

    return nombretamano + '('+precio+'.00€'+')';
}

// funcion para crear la tarjeta
function crearTarjeta() {
    const result = document.getElementById('result');
    const tarjeta = document.createElement('div');

    // Concatenar los resultados en el contenido de la tarjeta
    tarjeta.innerHTML = `
        <p>${calcularPrecio()}</p>
        <p>Ingredientes: ${getIngrendientes()}</p>
    `;

    tarjeta.classList.add('tarjeta'); // Agregar clase para estilos
    result.appendChild(tarjeta); // Añadir la tarjeta al contenedor
}

function verResumen(){
    const nombre = document.getElementById('nombre').value
    alert('Pedido realizado por ' + nombre +
        'Resumen:');
}

