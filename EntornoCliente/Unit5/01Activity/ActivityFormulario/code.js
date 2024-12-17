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
fichero.addEventListener('input', validarFichero);
terminos.addEventListener('input', validarTerminos);


// Función para calcular el seguro

const inputs = [
    {
        inputNombre: false,
    },
    {
        inputApellido: false,
    },
    {
        inputDni: false,
    },
    {
        inputEmail: false,
    },
    {
        inputTelefono: false,
    },
    {
        inputNacimiento: false,
    },
    {
        inputComunidad: false,
    },
    {
        inputProvincia: false,
    },
    {
        inputCodigoPostal: false,
    },
    {
        inputMarca: false,
    },
    {
        inputModelo: false,
    },
    {
        inputTipoSeguro: false,
    },
    {
        inputTipoVehiculo: false,
    },
    {
        inputFechaCarnet: false,
    },
    {
        inputFechaMatriculacion: false,
    },
    {
        inputMatricula: false,
    },
    {
        inputTerminos: false,
    }
]

function  calcularSeguro(){
    let precio = 0;
    let edad = 0;
    let tipoSeguro = 0;
    let tipoVehiculo = 0;
    let fechaCarnet = 0;
    let fechaMatriculacion = 0;
    let matricula = 0;

    
}


// Manejo de errores


// Función para mostrar un mensaje de error
function verError(id, message) {
    const errorElement = document.getElementById(`error-input${id}`);
    if (errorElement) {
        errorElement.innerText = message; // Set the error message
        errorElement.style.display = "block"; // Make sure the error is visible
        console.log(errorElement)
    }
}

// Función para limpiar un mensaje de error
function quitarError(id) {
    const errorElement = document.getElementById(`error-input${id}`);
    if (errorElement) {
        errorElement.innerText = ""; // Clear the error message
        errorElement.style.display = "none"; // Hide the error
    }
}


// Funciones de validacion


// Función de validación del nombre
function validarNombre(event) {
    const nombre = event.target.value;
    let hayError = false;

    // Validar si el campo está vacío
    if (nombre.length === 0) {
        verError(1, 'El campo nombre no puede estar vacío');
        hayError = true; // Registrar que hay un error
    }

    // Validar si el nombre tiene más de 30 caracteres
    if (nombre.length > 30) {
        verError(1, 'El nombre no puede tener más de 30 caracteres');
        hayError = true; // Registrar que hay un error
    }

    // Validar que solo contiene letras (incluyendo acentos y la ñ), y un solo espacio entre nombres
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
    if (!regex.test(nombre)) {
        verError(1, 'El nombre solo puede contener letras, acentos y un único espacio entre nombres');
        hayError = true; // Registrar que hay un error
    }

    // Si no hay errores, limpiar el mensaje de error
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
        hayError = true; // Registrar que hay un error
    }

    // Validar si el apellido tiene más de 30 caracteres
    if (apellido.length > 30) {
        verError(2, 'El apellido no puede tener más de 30 caracteres');
        hayError = true; // Registrar que hay un error
    }

    // Validar que solo contiene letras (incluyendo acentos y la ñ), y un solo espacio entre apellidos
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
    if (!regex.test(apellido)) {
        verError(2, 'El apellido solo puede contener letras, acentos y un único espacio entre apellidos');
        hayError = true; // Registrar que hay un error
    }

    // Si no hay errores, limpiar el mensaje de error
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
        hayError = true; // Registrar que hay un error
    }

    // Validar longitud (generalmente un DNI tiene 8 dígitos y 1 letra, por ejemplo: "12345678A")
    if (dni.length !== 9) {
        verError(3, 'El DNI debe tener 8 dígitos seguidos de una letra');
        hayError = true; // Registrar que hay un error
    }

    // Validar el formato (8 dígitos seguidos de una letra mayúscula)
    const regex = /^\d{8}[A-Z]$/;
    if (!regex.test(dni)) {
        verError(3, 'El DNI debe contener 8 números seguidos de una letra mayúscula (por ejemplo, 12345678A)');
        hayError = true; // Registrar que hay un error
    }

    // Si no hay errores, limpiar el mensaje de error
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
        hayError = true; // Registrar que hay un error
    }

    // Validar el formato del email
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        verError(4, 'El email no tiene un formato válido (ejemplo: usuario@dominio.com)');
        hayError = true; // Registrar que hay un error
    }

    // Si no hay errores, limpiar el mensaje de error
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
        hayError = true; // Registrar que hay un error
    }

    // Validar que solo contenga números y, opcionalmente, un "+" al inicio
    const regex = /^\+?[0-9]{9}$/;
    if (!regex.test(telefono)) {
        verError(5, 'El teléfono solo puede contener números y, opcionalmente, un "+" al inicio');
        hayError = true; // Registrar que hay un error
    }

    // Si no hay errores, limpiar el mensaje de error
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
        hayError = true; // Registrar que hay un error
    }

    // Validar que el código postal tenga exactamente 5 dígitos numéricos
    const regex = /^[0-9]{5}$/;
    if (!regex.test(codigoPostal)) {
        verError(7, 'El código postal debe tener exactamente 5 dígitos numéricos');
        hayError = true; // Registrar que hay un error
    }

    // Si no hay errores, limpiar el mensaje de error
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
        verError(8, 'El campo fecha de nacimiento no puede estar vacío');
        hayError = true;
    }

    // Compruba si la fecha es en el futuro
    const fechaActual = new Date();
    const fechaCarnetDate = new Date(fechaCarnet);

    if (fechaCarnetDate > fechaActual) {
        verError(8, 'La fecha de nacimiento no puede ser futura');
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
        verError(9, 'El campo fecha de nacimiento no puede estar vacío');
        hayError = true;
    }

    // Compruba si la fecha es en el futuro
    const fechaActual = new Date();
    const fechaMatriculaDate = new Date(fechaMatricula);

    if (fechaMatriculaDate > fechaActual) {
        verError(9, 'La fecha de nacimiento no puede ser futura');
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
        hayError = true; // Registrar que hay un error
    }

    if (!hayError) {
        quitarError(10);
    }
}

// Función de validación del fichero
function validarFichero(event){
    const fichero = event.target.files[0];
    let hayError = false;

    // Validar si el fichero es una imagen jpeg o no
    if (!fichero.type.includes('image/jpeg')) {
        verError(11, 'El fichero debe ser una imagen JPEG');
        hayError = true; // Registrar que hay un error
    }

    // Validar si hay un fichero seleccionado
    if (!fichero) {
        quitarError(11);
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
        hayError = true; // Registrar que hay un error
    }

    if (!hayError) {
        quitarError(12);
    }
}


// Funciones para selectores


// Función para cargar las comunidades en el selector de comunidades
function cargarComunidades() {
    const comunidadSelect = document.getElementById('comunidad');
    comunidadesYProvincias.forEach(([comunidad]) => {
        const option = document.createElement('option');
        option.value = comunidad;
        option.textContent = comunidad;
        comunidadSelect.appendChild(option);
    });
}

// Función para cargar todas las provincias en el selector de provincias
function cargarProvincias() {
    const provinciaSelect = document.getElementById('provincia');
    comunidadesYProvincias.forEach(([comunidad, provincias]) => {
        provincias.forEach(provincia => {
            const option = document.createElement('option');
            option.value = provincia;
            option.textContent = provincia;
            provinciaSelect.appendChild(option);
        });
    });
}

// Función para actualizar las provincias cuando se selecciona una comunidad
function actualizarProvincias() {
    const comunidadSeleccionada = document.getElementById('comunidad').value;
    const provinciaSelect = document.getElementById('provincia');

    // Limpiar las provincias
    provinciaSelect.innerHTML = '';

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
    marcasYModelos.forEach(([marca]) => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        marcaSelect.appendChild(option);
    });
}

// Función para cargar los modelos en el selector de modelos
function cargarModelo() {
    const modeloSelect = document.getElementById('modelo');
    marcasYModelos.forEach(([marca, modelos]) => {
        modelos.forEach(modelo => {
            const option = document.createElement('option');
            option.value = modelo;
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });
    });
}

// Función para actualizar los modelos cuando se selecciona una marca
function actualizarModelos() {
    const marcaSeleccionada = document.getElementById('marca').value;
    const modeloSelect = document.getElementById('modelo');

    // Limpiar las provincias
    modeloSelect.innerHTML = '';

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

// Función para seleccionar automáticamente la primera opción en ambos selectores
function seleccionarPrimeraOpcion() {
    const comunidadSelect = document.getElementById('comunidad');
    const provinciaSelect = document.getElementById('provincia');
    const marcaSelect = document.getElementById('marca');
    const modeloSelect = document.getElementById('modelo');

    // Seleccionar la primera comunidad y sus provincias
    comunidadSelect.selectedIndex = 0;
    actualizarProvincias();

    // Seleccionar la primera marca y sus modelos
    marcaSelect.selectedIndex = 0;
    actualizarModelos();

}

// Cargar las opciones al cargar la página
window.onload = function() {
    cargarComunidades();
    cargarProvincias();
    cargarMarcas();
    cargarModelo();

    // Seleccionar automáticamente la primera opción
    seleccionarPrimeraOpcion();

    // Event listeners para cambiar dinámicamente
    document.getElementById('comunidad').addEventListener('change', actualizarProvincias);
    document.getElementById('marca').addEventListener('change', actualizarModelos);
    const button = document.getElementById('enviar');

    const allTrue = inputs.every(input => Object.values(input)[0] === true);

    if (allTrue) {
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}