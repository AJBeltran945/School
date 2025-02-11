class Tanque extends Heroe {
    constructor() {
        super(100);
    }

    // Elige Piedra
    elegirAccion() {
        return 'piedra';
    }
}


class DPS extends Heroe {
    constructor() {
        super(100);
    }

    // Elige Tijeras
    elegirAccion() {
        return 'tijeras';
    }
}


class Support extends Heroe {
    constructor() {
        super(100);
    }

    // Elige Papel
    elegirAccion() {
        return 'papel';
    }
}



// Instancias de los personajes
const jugador1 = new Tanque(); // Tanque elige Piedra
const jugador2 = new DPS();	// DPS elige Tijeras

// Función que empieza el combate
function iniciarCombate() {
    actualizarCombate("¡El combate comienza!");
    compararAcciones(jugador1, jugador2);  // Compara las acciones de ambos jugadores
}


function actualizarCombate(texto) {
    const textarea = document.getElementById('dynamicTextarea');
    textarea.value += texto + '\n';  // Agrega el texto y un salto de línea
    textarea.scrollTop = textarea.scrollHeight;  // Desplaza el scroll al final
}

// Función para comparar las acciones y determinar el ganador
function compararAcciones(jugador1, jugador2) {
    const accion1 = jugador1.elegirAccion();
    const accion2 = jugador2.elegirAccion();

    actualizarCombate(`Jugador 1 (Tanque) elige: ${accion1}`);
    actualizarCombate(`Jugador 2 (DPS) elige: ${accion2}`);

    if (accion1 === accion2) {
        actualizarCombate("¡Es un empate!");
        return;
    }

    if (
        (accion1 === 'piedra' && accion2 === 'tijeras') ||
        (accion1 === 'papel' && accion2 === 'piedra') ||
        (accion1 === 'tijeras' && accion2 === 'papel')
    ) {
        actualizarCombate("¡Jugador 1 gana!");
    } else {
        actualizarCombate("¡Jugador 2 gana!");
    }
}

// Función que empieza el combate
function iniciarCombate() {
    actualizarCombate("¡El combate comienza!");
    const jugador1 = new Tanque(); // Tanque elige Piedra
    const jugador2 = new DPS();	// DPS elige Tijeras
    compararAcciones(jugador1, jugador2);
}

