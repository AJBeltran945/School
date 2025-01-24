window.onload = function () {
    // Inicialización del tablero
    crearColumna('Para hacer');
    crearColumna('En progreso');
    crearColumna('Finalizado');
}


document.getElementById('addList').addEventListener('click', () => {
    let texto;
    do {
        texto = prompt('Ingrese el título de la lista');
        if (texto === null) {
            // Si el usuario cancela el prompt, no se hace nada
            return;
        }
        texto = texto.trim(); // Eliminar espacios innecesarios
        if (!texto) {
            alert('Debe ingresar un título válido.');
        }
    } while (!texto);

    crearColumna(texto);
});



// Funciones para crear columnas y tarjetas


// Función para crear columnas (listas)
function crearColumna(titulo) {
    const columna = document.createElement('div');
    columna.classList.add('columna');

    // Poner el título de la columna
    const encabezado = document.createElement('h2');
    encabezado.textContent = titulo;
    encabezado.classList.add('encabezado');

    // Crear la area de la lista de tarjetas
    const lista = document.createElement('div');
    lista.classList.add('lista');
    lista.setAttribute('ondrop', 'soltar(event)');
    lista.setAttribute('ondragover', 'permitirSoltar(event)');

    // Crear boton para agregar tarjetas
    const botonAgregar = document.createElement('button');
    botonAgregar.textContent = 'Agregar tarjeta';
    botonAgregar.classList.add('boton-agregar');
    botonAgregar.onclick = () => agregarTarjeta(lista);

    // Crear boton para eliminar todas las tarjetas
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar tarjetas';
    botonEliminar.classList.add('boton-eliminar');
    botonEliminar.onclick = () => lista.innerHTML = '';

    // Crear boton para eliminar la lista
    const botonEliminarColumna = document.createElement('button');
    botonEliminarColumna.textContent = 'Eliminar lista';
    botonEliminarColumna.classList.add('boton-eliminar-columna');
    botonEliminarColumna.onclick = () => columna.remove();

    // Agregar los elementos a la columna
    columna.appendChild(encabezado);
    columna.appendChild(lista);
    columna.appendChild(botonAgregar);
    columna.appendChild(botonEliminar);
    columna.appendChild(botonEliminarColumna);

    // Evento de doble clic para editar el texto
    encabezado.ondblclick = () => editarTexto(encabezado);

    // Agregar la columna al tablero
    document.getElementById('tablero').appendChild(columna);
}

// Función para agregar una tarjeta
function agregarTarjeta(lista) {

    // Crear la tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    tarjeta.setAttribute('draggable', 'true');
    tarjeta.setAttribute('ondragstart', 'arrastrar(event)');

    // Crear el contenido de la tarjeta
    const texto = 'Nueva tarjeta'
    const contenido = document.createElement('span');
    contenido.textContent = texto;

    // Crear el botón para eliminar la tarjeta
    const botonEliminarTarjeta = document.createElement('button');
    botonEliminarTarjeta.textContent = 'X';
    botonEliminarTarjeta.classList.add('boton-eliminar-tarjeta');
    botonEliminarTarjeta.onclick = () => tarjeta.remove();

    // Crear el checkbox para marcar la tarjeta
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox-tarjeta');
    checkbox.style.marginRight = '0.5rem';

    // Evento para poner o quitar la línea al texto
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            contenido.style.textDecoration = 'line-through';
        } else {
            contenido.style.textDecoration = 'none';
        }
    });

    // Evento de doble clic para editar el texto
    tarjeta.ondblclick = () => editarTexto(contenido);

    // Agregar los elementos a la tarjeta y la tarjeta a la lista
    tarjeta.appendChild(checkbox);
    tarjeta.appendChild(contenido);
    tarjeta.appendChild(botonEliminarTarjeta);
    lista.appendChild(tarjeta);

}


// Funciónes para editar texto al hacer el doble click


// Función para editar el texto de la tarjeta
function editarTexto(contenido) {
    const textoOriginal = contenido.textContent;

    // Crear un input para editar el texto
    const input = document.createElement('input');
    input.type = 'text';
    input.value = textoOriginal;

    // Aplicar estilos al input para que parezca texto
    input.style.border = 'none';
    input.style.background = 'transparent';
    input.style.font = 'inherit';
    input.style.width = '100%';
    input.style.padding = '0';
    input.style.margin = '0';
    input.style.outline = 'none';
    input.style.color = 'inherit';

    // Reemplazar el contenido con el input
    contenido.innerHTML = '';
    contenido.appendChild(input);

    // Seleccionar el texto dentro del campo de entrada
    input.select();

    // Al perder el foco o presionar Enter, guardar el nuevo texto
    input.addEventListener('blur', () => guardarTextoEditado(input, contenido));
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            guardarTextoEditado(input, contenido);
        }
    });
}

// Función para guardar el texto editado
function guardarTextoEditado(input, contenido) {
    const nuevoTexto = input.value;
    contenido.innerHTML = nuevoTexto;
}


// funciones para arrastrar y soltar


// Variable global para almacenar la tarjeta que se está arrastrando
let tarjetaArrastrada = null;

// Función para manejar el inicio del arrastre
function arrastrar(event) {

    // Guardar la tarjeta que se está arrastrando
    tarjetaArrastrada = event.target;
    event.dataTransfer.setData('text/plain', '');
}

// Función para permitir que se suelte en una columna
function permitirSoltar(event) {
    event.preventDefault();
}

// Función para manejar el evento de soltar
function soltar(event) {
    event.preventDefault();
    const lista = event.target.closest('.lista');

    // Si hay una lista y una tarjeta arrastrada, mover la tarjeta a la lista
    if (lista && tarjetaArrastrada) {
        lista.appendChild(tarjetaArrastrada);
        tarjetaArrastrada = null;
    }
}



