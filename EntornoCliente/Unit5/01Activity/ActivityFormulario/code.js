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

function  calcularSeguro(){

}

function error(){
    
}

// Funciones de validacion

function validarNombre(event) {
    const nombre = event.target.value;

    // Validar si el campo está vacío
    if (nombre.length === 0) {
        console.log('El campo nombre no puede estar vacío');
    }

    // Validar si el nombre tiene más de 30 caracteres
    if (nombre.length > 30) {
        console.log('El nombre no puede tener más de 30 caracteres');
    }

    // Validar que solo contiene letras (incluyendo acentos y la ñ), y un solo espacio entre nombres
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
    if (!regex.test(nombre)) {
        console.log('El nombre solo puede contener letras, acentos y un único espacio entre nombres');
    }

    console.log('Nombre válido');

}


function validarApellido(event){
    if (apellido.length === 0){
        return 'El campo apellido no puede estar vacio';
    }
}

function validarDni(event){
    if (dni.length === 0){
        return 'El campo dni no puede estar vacio';
    }
}

function validarEmail(event){
    if (email.length === 0){
        return 'El campo email no puede estar vacio';
    }
}

function validarTelefono(event){
    if (telefono.length === 0){
        return 'El campo telefono no puede estar vacio';
    }
}

function validarNacimiento(event){
    if (nacimiento.length === 0){
        return 'El campo fecha de nacimiento no puede estar vacio';
    }
}

function validarCodigoPostal(event){
    if (codigoPostal.length === 0){
        return 'El campo codigo postal no puede estar vacio';
    }
}

function validarFechaCarnet(event){
    if (fechaCarnet.length === 0){
        return 'El campo fecha de carnet no puede estar vacio';
    }
}

function validarFechaMatriculacion(event){
    if (fechaMatriculacion.length === 0){
        return 'El campo fecha de matriculacion no puede estar vacio';
    }
}

function validarMatricula(event){
    if (matricula.length === 0){
        return 'El campo matricula no puede estar vacio';
    }
}

function validarFichero(event){
    if (fichero.length === 0){
        return 'El campo fichero no puede estar vacio';
    }
}