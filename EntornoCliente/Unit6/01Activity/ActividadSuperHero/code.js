const next =  document.getElementById('siguiente');
const jugador1 = document.getElementById('jugador1');
const jugador2 = document.getElementById('jugador2');
next.addEventListener('click', e =>{

    jugador1.style.display = 'none';
    jugador2.style.display = 'block'

});


const empezar = document.getElementById('dynamicTextarea');
empezar.addEventListener('click', e=>{
    const tablero = document.getElementById('Tablero');
    jugador2.style.display = 'none';
    tablero.style.display = 'flex';
});




// Selecciona el textarea
const textarea = document.getElementById("dynamicTextarea");

// Ajusta la altura automáticamente cuando el usuario escribe
textarea.addEventListener("input", function () {
    // Restablece la altura para calcular correctamente la nueva altura
    this.style.height = "auto";
    // Establece la altura basada en el scrollHeight
    this.style.height = `${this.scrollHeight}px`;
});

// Opcional: Ajusta la altura inicial si ya hay contenido
textarea.style.height = `${textarea.scrollHeight}px`;





// Array de héroes
let heroes = [];

class Heroe {
    constructor(vida) {
        this.vida = vida;
    }


    recibirDaño(cantidad) {
        this.vida -= cantidad;
        if (this.vida < 0) this.vida = 0;
        console.log(`${this.constructor.name} recibió ${cantidad} de daño. Vida restante: ${this.vida}`);
    }


    curar(cantidad) {
        this.vida += cantidad;
        if (this.vida > 100) this.vida = 100;
        console.log(`${this.constructor.name} se curó ${cantidad}. Vida actual: ${this.vida}`);
    }


    estaVivo() {
        return this.vida > 0;
    }
}


class Tanque extends Heroe {
    constructor() {
        super(100);
        this.bloqueoActivo = false;
    }


    habilidadRandom(enemigo) {
        const eleccion = Math.random() < 0.5 ? "golpeDeAcero" : "auraDeAcero";
        if (eleccion === "golpeDeAcero") {
            this.golpeDeAcero(enemigo);
        } else {
            this.auraDeAcero();
        }
    }


    golpeDeAcero(enemigo) {
        console.log("Superman usa Golpe de Acero causando 20 de daño.");
        enemigo.recibirDaño(20);
    }


    auraDeAcero() {
        console.log("Superman activa Aura de Acero: reducirá el próximo daño en un 50%.");
        this.bloqueoActivo = true;
    }


    recibirDaño(cantidad) {
        if (this.bloqueoActivo) {
            cantidad /= 2;
            this.bloqueoActivo = false;
            console.log("Aura de Acero activo, el daño se redujo a la mitad.");
        }
        super.recibirDaño(cantidad);
    }
}


class DPS extends Heroe {
    constructor() {
        super(100);
        this.esquivaActiva = false;
    }


    habilidadRandom(enemigo) {
        const eleccion = Math.random() < 0.5 ? "golpeRapido" : "esquivaAgil";
        if (eleccion === "golpeRapido") {
            this.golpeRapido(enemigo);
        } else {
            this.esquivaAgil();
        }
    }


    golpeRapido(enemigo) {
        console.log("Batman usa Golpe Rápido causando 15 de daño.");
        enemigo.recibirDaño(15);
    }


    esquivaAgil() {
        console.log("Batman activa Esquiva Ágil: bloqueará completamente el próximo ataque.");
        this.esquivaActiva = true;
    }


    recibirDaño(cantidad) {
        if (this.esquivaActiva) {
            console.log("Esquiva Ágil activa, el ataque fue completamente bloqueado.");
            this.esquivaActiva = false;
            return;
        }
        super.recibirDaño(cantidad);
    }
}


class Support extends Heroe {
    constructor() {
        super(100);
    }


    habilidadRandom(enemigo) {
        const eleccion = Math.random() < 0.5 ? "rayoArcano" : "curacionMagica";
        if (eleccion === "rayoArcano") {
            this.rayoArcano(enemigo);
        } else {
            this.curacionMagica();
        }
    }


    rayoArcano(enemigo) {
        console.log("Zatanna usa Rayo Arcano causando 10 de daño.");
        enemigo.recibirDaño(10);
    }


    curacionMagica() {
        console.log("Zatanna usa Curación Mágica recuperando 20 de vida.");
        this.curar(20);
    }
}


function iniciarPartida() {
    imprimirEnTextarea("¡La partida comienza!");

    // Crear héroes
    const tanqueHeroe = new tanque("Superman", 200, ["Martillo pesado"]);
    const dpsHeroe = new dps("Batman", 100, ["Espada ligera"]);
    const supportHeroe = new support("Zatana", 120, ["Varita mágica"]);

    // Añadir héroes al array
    heroes.push(tanqueHeroe, dpsHeroe, supportHeroe);

    imprimirEnTextarea("Héroes en la partida:");
    heroes.forEach(h => imprimirEnTextarea(`- ${h.nombre} (${h.constructor.name})`));

    // Ciclo del juego
    let partidaActiva = true;
    while (partidaActiva) {
        imprimirEnTextarea("\nTurno de los héroes...");
        heroes.forEach(h => {
            if (h.vida > 0) {
                h.atacar();
            } else {
                h.retirar();
            }
        });

        // Simular daño recibido
        heroes.forEach(h => h.controladorVida(-Math.floor(Math.random() * 50)));

        // Verificar si todos los héroes han sido derrotados
        if (heroes.every(h => h.vida <= 0)) {
            imprimirEnTextarea("¡Todos los héroes han sido derrotados! Fin de la partida.");
            partidaActiva = false;
        }
    }
}
