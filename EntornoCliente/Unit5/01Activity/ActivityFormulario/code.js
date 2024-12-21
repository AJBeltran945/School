// ========================

// Parte del formulario

// ========================


// Cargar las opciones al cargar la página
window.onload = function() {
    cargarComunidades();
    cargarProvincias();
    cargarMarcas();
    cargarModelo();

    // Event listeners para cambiar dinámicamente
    document.getElementById('comunidad').addEventListener('change', actualizarProvincias);
    document.getElementById('marca').addEventListener('change', actualizarModelos);
    document.getElementById('tipoSeguro').addEventListener('change', function() {
        inputs[16][1] = true;
        comprobarCampos();
    });
    document.getElementById('tipoVehiculo').addEventListener('change', function() {
        inputs[17][1] = true;
        comprobarCampos();
    });

    // Deshabilitar el botón de enviar para evitar envíos accidentales
    button.disabled = true;

    // Ocultar los resultados al principio
    resultados.style.display = 'none';
}

// Array bidimensional con las comunidades autónomas y sus provincias
const comunidadesYProvincias = [
    ["Andalucía", ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"]],
    ["Aragón", ["Huesca", "Teruel", "Zaragoza"]],
    ["Asturias", ["Asturias"]], // Comunidad uniprovincial
    ["Islas Baleares", ["Islas Baleares"]], // Comunidad uniprovincial
    ["Canarias", ["Las Palmas", "Santa Cruz de Tenerife"]],
    ["Cantabria", ["Cantabria"]], // Comunidad uniprovincial
    ["Castilla y León", ["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"]],
    ["Castilla-La Mancha", ["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"]],
    ["Cataluña", ["Barcelona", "Girona", "Lleida", "Tarragona"]],
    ["Extremadura", ["Badajoz", "Cáceres"]],
    ["Galicia", ["A Coruña", "Lugo", "Ourense", "Pontevedra"]],
    ["Madrid", ["Madrid"]], // Comunidad uniprovincial
    ["Murcia", ["Murcia"]], // Comunidad uniprovincial
    ["Navarra", ["Navarra"]], // Comunidad uniprovincial
    ["La Rioja", ["La Rioja"]], // Comunidad uniprovincial
    ["País Vasco", ["Álava", "Bizkaia", "Gipuzkoa"]],
    ["Comunidad Valenciana", ["Alicante", "Castellón", "Valencia"]],
    ["Ceuta", ["Ceuta"]], // Ciudad autónoma
    ["Melilla", ["Melilla"]] // Ciudad autónoma
];

// Array bidimensional con las marcas de coches y sus modelos
const marcasYModelos = [
    ["Alfa Romeo", ["Giulietta", "Giulia", "Stelvio", "Tonale"]],
    ["Audi", ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "e-tron"]],
    ["BMW", ["Serie 1", "Serie 2", "Serie 3", "Serie 4", "Serie 5", "Serie 6", "Serie 7", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4", "i3", "i4", "iX"]],
    ["Chevrolet", ["Aveo", "Spark", "Cruze", "Malibu", "Orlando", "Trax", "Camaro"]],
    ["Citroën", ["C1", "C3", "C4", "C5", "C5 Aircross", "C3 Aircross", "Berlingo", "Jumper", "Ami"]],
    ["Dacia", ["Sandero", "Logan", "Duster", "Spring"]],
    ["Fiat", ["Panda", "500", "500X", "Tipo", "Punto", "Doblo", "124 Spider"]],
    ["Ford", ["Fiesta", "Focus", "Mondeo", "Kuga", "Puma", "Mustang", "Explorer", "Transit"]],
    ["Honda", ["Civic", "CR-V", "HR-V", "Jazz", "Insight"]],
    ["Hyundai", ["i10", "i20", "i30", "Tucson", "Kona", "Santa Fe", "Nexo", "Ioniq"]],
    ["Jeep", ["Renegade", "Compass", "Cherokee", "Grand Cherokee", "Wrangler", "Gladiator"]],
    ["Kia", ["Picanto", "Rio", "Ceed", "Stonic", "Sportage", "Sorento", "Niro", "Xceed"]],
    ["Lexus", ["CT", "IS", "ES", "GS", "LS", "NX", "RX", "UX", "LC"]],
    ["Maserati", ["Ghibli", "Levante", "Quattroporte", "GranTurismo", "MC20"]],
    ["Mazda", ["Mazda2", "Mazda3", "Mazda6", "CX-3", "CX-5", "CX-30", "CX-50", "MX-5"]],
    ["Mercedes-Benz", ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "G-Class", "EQS", "EQC"]],
    ["Mini", ["Mini 3 puertas", "Mini 5 puertas", "Mini Cabrio", "Mini Countryman", "Mini Clubman"]],
    ["Nissan", ["Micra", "Juke", "Qashqai", "X-Trail", "Leaf", "Navara", "Pathfinder"]],
    ["Opel", ["Corsa", "Astra", "Insignia", "Mokka", "Grandland", "Zafira", "Vivaro"]],
    ["Peugeot", ["108", "208", "3008", "5008", "508", "Partner", "Expert"]],
    ["Porsche", ["718 Cayman", "718 Boxster", "911", "Panamera", "Taycan", "Macan", "Cayenne"]],
    ["Renault", ["Clio", "Megane", "Twingo", "Captur", "Koleos", "Kadjar", "Zoe", "Twizy", "Kangoo"]],
    ["Seat", ["Ibiza", "León", "Arona", "Ateca", "Tarraco", "Mii", "Cupra Formentor"]],
    ["Skoda", ["Citigo", "Fabia", "Octavia", "Superb", "Karoq", "Kodiaq", "Scala"]],
    ["Smart", ["ForTwo", "ForFour", "EQ ForTwo", "EQ ForFour"]],
    ["Toyota", ["Aygo", "Yaris", "Corolla", "C-HR", "Prius", "RAV4", "Land Cruiser", "Hilux", "Supra"]],
    ["Volkswagen", ["Polo", "Golf", "Passat", "Tiguan", "Arteon", "Touareg", "ID.3", "ID.4", "ID.Buzz"]],
    ["Volvo", ["V40", "V60", "V90", "S60", "S90", "XC40", "XC60", "XC90", "C40"]],
    ["Tesla", ["Model 3", "Model S", "Model X", "Model Y"]],
    ["Land Rover", ["Defender", "Discovery", "Range Rover Evoque", "Range Rover Velar", "Range Rover Sport", "Range Rover"]],
    ["Jaguar", ["E-Pace", "F-Pace", "F-Type", "I-Pace", "XE", "XF"]],
    ["Subaru", ["Impreza", "XV", "Forester", "Outback", "Levorg"]],
    ["SsangYong", ["Tivoli", "Korando", "Rexton", "Musso"]],
    ["Lamborghini", ["Huracán", "Aventador", "Urus"]],
    ["Ferrari", ["Portofino", "F8 Tributo", "Roma", "812 Superfast", "SF90 Stradale"]],
    ["Bugatti", ["Chiron", "Divo"]],
    ["Mitsubishi", ["Space Star", "ASX", "Outlander", "L200"]],
    ["Chrysler", ["300C", "Voyager"]],
    ["Rolls-Royce", ["Phantom", "Cullinan", "Wraith", "Dawn"]],
    ["Bentley", ["Continental GT", "Bentayga", "Flying Spur"]]
];

// Variables para los campos del formulario
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellidos');
const dni = document.getElementById('dni');
const email = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const nacimiento = document.getElementById('fechaNacimiento');
const codigoPostal = document.getElementById('codigoPostal');
const fechaCarnet = document.getElementById('fechaCarnet');
const fechaMartriculacion = document.getElementById('fechaMatriculacion');
const matricula = document.getElementById('matricula');
const fichero = document.getElementById('fotoCarnet');
const terminos = document.getElementById('terminos');
const button = document.getElementById('enviar');
const resultados = document.getElementById('resultados');

// Event listeners para los campos del formulario en tiempo real
nombre.addEventListener('input', validarNombre);
apellido.addEventListener('input', validarApellido);
dni.addEventListener('input', validarDni);
email.addEventListener('input', validarEmail);
telefono.addEventListener('input', validarTelefono);
nacimiento.addEventListener('input', validarNacimiento);
codigoPostal.addEventListener('input', validarCodigoPostal);
fechaCarnet.addEventListener('input', validarFechaCarnet);
fechaMartriculacion.addEventListener('input', validarFechaMatriculacion);
matricula.addEventListener('input', validarMatricula);
fichero.addEventListener('change', validarFichero);
terminos.addEventListener('input', validarTerminos);

// Array con los campos del formulario y su estado de validación
// Mi idea con este array es que cada vez que se valide un campo, se cambie su estado a true
// cada vez que llama la funciones de error o quitar error se cambie el estado del campo a true o false
// dependiendo si hay error o no
const inputs = [
    ["inputNombre", false],
    ["inputApellido", false],
    ["inputDni", false],
    ["inputEmail", false],
    ["inputTelefono", false],
    ["inputNacimiento", false],
    ["inputCodigoPostal", false],
    ["inputFechaCarnet", false],
    ["inputFechaMatriculacion", false],
    ["inputMatricula", false],
    ["inputFichero", true],
    ["inputTerminos", false],
    ["inputComunidad", false],
    ["inputProvincia", false],
    ["inputMarca", false],
    ["inputModelo", false],
    ["inputTipoSeguro", false],
    ["inputTipoVehiculo", false]
]

// funcion para comprobar si todos los campos estan completos
// y se compruebe si todos los campos están completos. Si todos los campos están completos,
// se habilita el botón de enviar. Si no, se deshabilita.
function comprobarCampos(){
    const button = document.getElementById('enviar');
    let alltrue = true;

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i][1]) {
            alltrue = false;
            break;
        }
    }

    if (alltrue) {
        button.disabled = false;
    }else {
        button.disabled = true;
    }
}


// Manejo de errores


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


// Funciones de validacion


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

// Función de validación del apellido
function validarApellido(event){
    const apellido = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (apellido.length === 0) {
        verError(2, 'El campo apellido no puede estar vacío');
        hayError = true;
    }

    // Validar si el apellido tiene más de 30 caracteres
    if (apellido.length > 30) {
        verError(2, 'El apellido no puede tener más de 30 caracteres');
        hayError = true;
    }

    // Validar que solo contiene letras (incluyendo acentos y la ñ), y un solo espacio entre apellidos
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
    if (!regex.test(apellido)) {
        verError(2, 'El apellido solo puede contener letras, acentos y un único espacio entre apellidos');
        hayError = true;
    }


    if (!hayError) {
        quitarError(2);
    }
}

// Función de validación del DNI
function validarDni(event){
    const dni = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (dni.length === 0) {
        verError(3, 'El campo DNI no puede estar vacío');
        hayError = true;
    }

    // Validar longitud (generalmente un DNI tiene 8 dígitos y 1 letra, por ejemplo: "12345678A")
    if (dni.length !== 9) {
        verError(3, 'El DNI debe tener 8 dígitos seguidos de una letra');
        hayError = true;
    }

    // Validar el formato (8 dígitos seguidos de una letra mayúscula)
    const regex = /^\d{8}[A-Z]$/;
    if (!regex.test(dni)) {
        verError(3, 'El DNI debe contener 8 números seguidos de una letra mayúscula (por ejemplo, 12345678A)');
        hayError = true;
    }


    if (!hayError) {
        quitarError(3);
    }
}

// Función de validación del email
function validarEmail(event){
    const email = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (email.length === 0) {
        verError(4, 'El campo email no puede estar vacío');
        hayError = true;
    }

    // Validar el formato del email
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        verError(4, 'El email no tiene un formato válido (ejemplo: usuario@dominio.com)');
        hayError = true;
    }

    if (!hayError) {
        quitarError(4);
    }
}

// Función de validación del teléfono
function validarTelefono(event){
    const telefono = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (telefono.length === 0) {
        verError(5, 'El campo teléfono no puede estar vacío');
        hayError = true;
    }

    // Validar que solo contenga números y, opcionalmente, un "+" al inicio
    const regex = /^\+?[0-9]{9}$/;
    if (!regex.test(telefono)) {
        verError(5, 'El teléfono solo puede contener números y, opcionalmente, un "+" al inicio');
        hayError = true;
    }

    if (!hayError) {
        quitarError(5);
    }
}

// Función de validación de la fecha de nacimiento
function validarNacimiento(event){
    const fechaNacimiento = event.target.value;
    let hayError = false;

    // Comprueba si el campo está vacío
    if (!fechaNacimiento) {
        verError(6, 'El campo fecha de nacimiento no puede estar vacío');
        hayError = true;
    }

    // Compruba si la fecha es en el futuro
    const fechaActual = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);

    if (fechaNacimientoDate > fechaActual) {
        verError(6, 'La fecha de nacimiento no puede ser futura');
        hayError = true;
    }

    // Calcula la edad a partir de la fecha de nacimiento
    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    const mes = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
    }

    // Valida que la persona tenga al menos 18 años
    if (edad < 18) {
        verError(6, 'Debes tener al menos 18 años para poder registrarte');
        hayError = true;
    }

    // Valida que la persona no puede tener más de 120 años
    if (edad > 120) {
        verError(6, 'La edad máxima permitida es de 120 años');
        hayError = true;
    }

    if (!hayError) {
        quitarError(6);
    }
}

// Función de validación del código postal
function validarCodigoPostal(event){
    const codigoPostal = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (codigoPostal.length === 0) {
        verError(7, 'El campo código postal no puede estar vacío');
        hayError = true;
    }

    // Validar que el código postal tenga exactamente 5 dígitos numéricos
    const regex = /^[0-9]{5}$/;
    if (!regex.test(codigoPostal)) {
        verError(7, 'El código postal debe tener exactamente 5 dígitos numéricos');
        hayError = true;
    }

    if (!hayError) {
        quitarError(7);
    }
}

// Función de validación de la fecha de carnet
function validarFechaCarnet(event){
    const fechaCarnet = event.target.value;
    let hayError = false;

    // Comprueba si el campo está vacío
    if (!fechaCarnet) {
        verError(8, 'El campo fecha de carnet no puede estar vacío');
        hayError = true;
    }

    // Compruba si la fecha es en el futuro
    const fechaActual = new Date();
    const fechaCarnetDate = new Date(fechaCarnet);

    if (fechaCarnetDate > fechaActual) {
        verError(8, 'La fecha de carnet no puede ser futura');
        hayError = true;
    }

    // Comprueba que la fecha de carnet no sea antes del 1900
    if (fechaCarnetDate.getFullYear() < 1900) {
        verError(8, 'La fecha de carnet no puede ser anterior al año 1900');
        hayError = true;
    }

    // Comprobar que la fecha de carnet sea 18 años después de la fecha de nacimiento
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const edad = fechaCarnetDate.getFullYear() - fechaNacimiento.getFullYear();
    if (edad < 18) {
        verError(8, 'Debes tener al menos 18 años para obtener el carnet');
        hayError = true;
    }

    if (!hayError) {
        quitarError(8);
    }
}

// Función de validación de la fecha de matriculación
function validarFechaMatriculacion(event){
    const fechaMatricula = event.target.value;
    let hayError = false;

    // Comprueba si el campo está vacío
    if (!fechaMatricula) {
        verError(9, 'El campo fecha de matriculación no puede estar vacío');
        hayError = true;
    }

    // Compruba si la fecha es en el futuro
    const fechaActual = new Date();
    const fechaMatriculaDate = new Date(fechaMatricula);

    if (fechaMatriculaDate > fechaActual) {
        verError(9, 'La fecha de matriculación no puede ser futura');
        hayError = true;
    }

    // Comprueba que la fecha de matriculación no sea antes del 1900
    if (fechaMatriculaDate.getFullYear() < 1900) {
        verError(9, 'La fecha de matriculación no puede ser anterior al año 1900');
        hayError = true;
    }

    if (!hayError) {
        quitarError(9);
    }
}

// Función de validación de la matrícula
function validarMatricula(event){
    const matricula = event.target.value;
    let hayError = false;

    // Expresión regular para validar una matrícula española (4 números seguidos de 3 letras)
    const regex = /^[0-9]{4}-[A-Z]{3}$/;
    if (!regex.test(matricula)) {
        verError(10, 'La matrícula debe tener el formato "1234 ABC"');
        hayError = true;
    }

    if (!hayError) {
        quitarError(10);
    }
}

// Función de validación del fichero
function validarFichero(event){
    let fichero = event.target.files[0];
    let hayError = false;

    // Validar si hay un fichero seleccionado
    if (!fichero) {
        quitarError(11);
        return
    }

    // Validar si el fichero es una imagen jpeg o no
    if (!fichero.type.includes('image/jpeg')) {
        verError(11, 'El fichero debe ser una imagen JPEG');
        hayError = true;
    }

    if (!hayError) {
        quitarError(11);
    }
}

// Función de validación de los términos y condiciones
function validarTerminos(event){
    const terminos = event.target.checked;
    let hayError = false;

    // Validar si los términos y condiciones están aceptados
    if (!terminos) {
        verError(12, 'Debes aceptar los términos y condiciones');
        hayError = true;
    }

    if (!hayError) {
        quitarError(12);
    }
}


// Funciones para selectores


// Función para cargar las comunidades en el selector de comunidades
function cargarComunidades() {
    const comunidadSelect = document.getElementById('comunidad');

    comunidadSelect.innerHTML = '<option disabled selected>Seleccione una comunidad</option>';

    comunidadesYProvincias.forEach(([comunidad]) => {
        const option = document.createElement('option');
        option.value = comunidad;
        option.textContent = comunidad;
        comunidadSelect.appendChild(option);
    });
}

// Funcion para cargar una opcion por defecto en el selector de provincias
function cargarProvincias() {
    const provinciaSelect = document.getElementById('provincia');

    provinciaSelect.innerHTML = '<option disabled selected>Seleccione una provincia</option>';
}

// Función para actualizar las provincias cuando se selecciona una comunidad
function actualizarProvincias() {
    inputs[12][1] = true;
    inputs[13][1] = true;
    const comunidadSeleccionada = document.getElementById('comunidad').value;
    const provinciaSelect = document.getElementById('provincia');

    // Limpiar las provincias
    provinciaSelect.innerHTML = '';

    if (!comunidadSeleccionada) return;

    // Añadir las provincias correspondientes a la comunidad seleccionada
    const comunidad = comunidadesYProvincias.find(([nombre]) => nombre === comunidadSeleccionada);

    if (comunidad) {
        const [, provincias] = comunidad;
        provincias.forEach(provincia => {
            const option = document.createElement('option');
            option.value = provincia;
            option.textContent = provincia;
            provinciaSelect.appendChild(option);
        });
    }
}

// Función para cargar las marcas en el selector de marcas
function cargarMarcas() {
    const marcaSelect = document.getElementById('marca');

    marcaSelect.innerHTML = '<option disabled selected>Seleccione una marca</option>';

    marcasYModelos.forEach(([marca]) => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        marcaSelect.appendChild(option);
    });
}

// Función para cargar una opción por defecto en el selector de modelos
function cargarModelo() {
    const modeloSelect = document.getElementById('modelo');

    modeloSelect.innerHTML = '<option disabled selected>Seleccione un modelo</option>';
}

// Función para actualizar los modelos cuando se selecciona una marca
function actualizarModelos() {
    inputs[14][1] = true;
    inputs[15][1] = true;
    const marcaSeleccionada = document.getElementById('marca').value;
    const modeloSelect = document.getElementById('modelo');

    // Limpiar las provincias
    modeloSelect.innerHTML = '';

    if (!marcaSeleccionada) return;

    // Añadir las provincias correspondientes a la comunidad seleccionada
    const marca = marcasYModelos.find(([nombre]) => nombre === marcaSeleccionada);

    if (marca) {
        const [, modelos] = marca;
        modelos.forEach(modelo => {
            const option = document.createElement('option');
            option.value = modelo;
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });
    }
}


// ========================

// Parte de los resultados

// ========================


// Mostrar los resultados


// Event listener para enseñar los resultados
// Aqui se llama a la funcion mostrarInfoTarjetas que es la que se encarga de mostrar las tarjetas
// con los precios de los seguros y de cambiar el color de fondo de la tarjetas y si la tarjeta
// es la seleccionada cambiar el color diferente a las demas
document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();
    resultados.style.display = 'block';
    mostrarInfoTarjetas()
});

// Función para mostrar la información de las tarjetas
function mostrarInfoTarjetas() {
    let tipoSeguro = document.getElementById('tipoSeguro').value;
    switch (tipoSeguro) {
        case 'terceros':
            tipoSeguro = 1;
            break;
        case 'tercerosAmpliado':
            tipoSeguro = 2;
            break;
        case 'conFranquicia':
            tipoSeguro = 3;
            break;
        case 'todoRiesgo':
            tipoSeguro = 4;
            break;
    }

    // Mostrar el precio del seguro en cada tarjeta y cambiar el color de fondo
    for (let i = 1; i <= 4; i++) {
        const precio = document.getElementById(`precio${i}`);
        const tarjeta = document.getElementById(`tarjeta${i}`);

        switch (i) {
            case 1:
                precio.innerHTML = `<p>Precio: ${calcularSeguro('terceros')} €</p>`;
                tarjeta.style.backgroundColor = '#632A7A';
                tarjeta.style.color = 'white';
                tarjeta.style.display = 'block';
                break;
            case 2:
                precio.innerHTML = `<p>Precio: ${calcularSeguro('tercerosAmpliado')} €</p>`;
                tarjeta.style.backgroundColor = '#632A7A';
                tarjeta.style.color = 'white';
                tarjeta.style.display = 'block';
                break;
            case 3:
                precio.innerHTML = '<p>Precio: ' + calcularSeguro('conFranquicia') + ' €</p>';
                tarjeta.style.backgroundColor = '#632A7A';
                tarjeta.style.color = 'white';
                tarjeta.style.display = 'block';
                break;
            case 4:
                precio.innerHTML = '<p>Precio: ' + calcularSeguro('todoRiesgo') + ' €</p>';
                tarjeta.style.backgroundColor = '#632A7A';
                tarjeta.style.color = 'white';
                tarjeta.style.display = 'block';
                break;
        }
    }

    // Cambiar el color de fondo de la tarjeta con el tipo de seguro seleccionado
    const tarjetaSeleccionada = document.getElementById(`tarjeta${tipoSeguro}`);
    tarjetaSeleccionada.style.backgroundColor = '#FADA5E';
    tarjetaSeleccionada.style.color = 'black';
}

// Función para calcular el precio del seguro
function calcularSeguro(tipoSeguro) {
    let precioBase = 0;
    let penalizacionVehiculo = 0;
    let descuentoPermiso = 0;
    let penalizacionEdad = 0;
    let penalizacionAntiguedad = 0;

    const tipoVehiculo = document.getElementById('tipoVehiculo').value;
    const fechaCarnetValor = new Date(document.getElementById('fechaCarnet').value);
    const fechaMatriculacion = new Date(document.getElementById('fechaMatriculacion').value);
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const fechaActual = new Date();

    // Calcular edad del conductor
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if (fechaActual.getMonth() < fechaNacimiento.getMonth() ||
        (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // Calcular años con el permiso de conducir
    let anosPermiso = fechaActual.getFullYear() - fechaCarnetValor.getFullYear();
    if (fechaActual.getMonth() < fechaCarnetValor.getMonth() ||
        (fechaActual.getMonth() === fechaCarnetValor.getMonth() && fechaActual.getDate() < fechaCarnetValor.getDate())) {
        anosPermiso--;
    }

    // Calcular años del coche
    let anosCoche = fechaActual.getFullYear() - fechaMatriculacion.getFullYear();
    if (fechaActual.getMonth() < fechaMatriculacion.getMonth() ||
        (fechaActual.getMonth() === fechaMatriculacion.getMonth() && fechaActual.getDate() < fechaMatriculacion.getDate())) {
        anosCoche--;
    }

    // Precio base según tipo de seguro
    switch (tipoSeguro) {
        case 'terceros':
            precioBase = 500;
            break;
        case 'tercerosAmpliado':
            precioBase = 650;
            break;
        case 'conFranquicia':
            precioBase = 750;
            break;
        case 'todoRiesgo':
            precioBase = 1000;
            break;
    }

    // Penalización por tipo de vehículo
    switch (tipoVehiculo) {
        case 'diesel':
            penalizacionVehiculo = 0.20;
            break;
        case 'gasolina':
            penalizacionVehiculo = 0.15;
            break;
        case 'hibrido':
            penalizacionVehiculo = 0.05;
            break;
        case 'electrico':
            penalizacionVehiculo = 0;
            break;
    }

    // Penalización por edad del conductor
    if (edad < 25) {
        penalizacionEdad = 0.10;
    }

    // Descuento por años con el permiso de conducir
    if (anosPermiso > 5) {
        descuentoPermiso = 0.10;
    }

    // Penalización por años de antigüedad del coche
    if (anosCoche > 10) {
        penalizacionAntiguedad = (anosCoche - 10) * 0.01;
    }

    // Calcular precio final
    let precioFinal = precioBase;
    precioFinal += precioBase * penalizacionVehiculo;
    precioFinal += precioBase * penalizacionEdad;
    precioFinal -= precioBase * descuentoPermiso;
    precioFinal += precioBase * penalizacionAntiguedad;

    return precioFinal.toFixed(2)
}


// Config de botones y botones de Cancelar y Aceptar


// Event listener que cuando haces hover sobre un boton cambia el color de fondo
document.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('boton')) {
        event.target.style.backgroundColor = '#632A7A';
    }
});

// Event listener que cuando dejas de hacer hover sobre un boton vuelva a su color original
document.addEventListener('mouseout', function (event) {
    if (event.target.classList.contains('boton')) {
        event.target.style.backgroundColor = '#280137';
    }
});

// Event listener para los botones de cancelar y contratar
document.addEventListener('click', function (event) {

    // Mirar si el elemento es un botón de cancelar
    if (event.target.classList.contains('cancelar')) {
        event.preventDefault();
        const id = event.target.id; // Get the ID from the data attribute
        console.log(id);
        cancelar(id);
    }

    // Mirar si el elemento es un botón de contratar
    if (event.target.classList.contains('contratar')) {
        event.preventDefault();
        aceptar();
    }
});

// Función para mostrar un mensaje de aceptación
function aceptar() {
    alert('Gracias por contratar. Atentamente tu asesor de seguros Austin Jenner Beltran Panghulan');
}

// Función para esconder una tarjeta
function cancelar(id) {
    const tarjeta = document.getElementById(`tarjeta${id}`);
    if (tarjeta) {
        tarjeta.style.display = 'none';
    }
}

// ========================