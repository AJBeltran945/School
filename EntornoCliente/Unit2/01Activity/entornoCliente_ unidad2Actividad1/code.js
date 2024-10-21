// Ejercicio 1: Cálculo de la paga
function calcularPaga() {
    let horas = document.getElementById('horas').value;
    let coste =document.getElementById('coste').value;
    let paga = horas * coste;
    document.getElementById('resultado1').innerText = `La paga que te corresponde es: ${paga.toFixed(2)} €`;
}

// Ejercicio 2: Cálculo del IMC
function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let estatura = document.getElementById('estatura').value;
    let imc = peso / (estatura ** 2);
    document.getElementById('resultado2').innerText = `Tu índice de masa corporal es ${imc.toFixed(2)}`;
}

// Ejercicio 3: División con cociente y resto
function calcularDivision() {
    let n = document.getElementById('n').value;
    let m = document.getElementById('m').value;
    let cociente = Math.floor(n / m);
    let resto = n % m;
    document.getElementById('resultado3').innerText = `La división de ${n} entre ${m} da un cociente de ${cociente} y un resto de ${resto}`;
}

// Ejercicio 4: Cálculo de capital en una inversión
function calcularInversion() {
    let cantidad = document.getElementById('cantidad').value;
    let interes = document.getElementById('interes').value / 100;
    let años = document.getElementById('años').value;
    let capital_final = cantidad * Math.pow(1 + interes, años);
    document.getElementById('resultado4').innerText = `El capital obtenido es: ${capital_final.toFixed(2)} €`;
}

// Ejercicio 5: Cálculo del peso total de un paquete
function calcularPeso() {
    let peso_payaso = 112;
    let peso_muñeca = 75;
    let payasos = document.getElementById('payasos').value;
    let muñecas = document.getElementById('muñecas').value;
    let peso_total = (payasos * peso_payaso) + (muñecas * peso_muñeca);
    document.getElementById('resultado5').innerText = `El peso total del paquete es ${peso_total} gramos.`;
}

// Ejercicio 6: Precio de barras de pan con descuento
function calcularPrecio() {
    let precio_barra = 3.49;
    let descuento = 0.60;
    let barrasNAD = document.getElementById('barrasNAD').value;
    let barrasTotal = document.getElementById('barrasAD').value;
    let precioAD = precio_barra * barrasTotal;
    let precioNAD = (precio_barra * descuento) * barrasNAD;
    let precio_final = ((barrasTotal - barrasNAD) * precio_barra) + (precio_barra * descuento * barrasNAD);
    if( barrasNAD <= barrasTotal){
        document.getElementById('resultado6').innerText =
            `Precio total si fuera al dia: ${precioAD.toFixed(2)} €\n` +
            `Precio total de las barras no al dia: ${precioNAD.toFixed(2)} €\n` +
            `Precio final: ${precio_final.toFixed(2)} €`;
    } else{
        document.getElementById('resultado6').innerHTML = 'ERROR';
    }

}

// Ejercicio 7: Cuestionario de Sí o No
function cuestionario() {
    let pregunta1 = document.getElementById('pregunta1').value.toLowerCase();
    let pregunta2 = document.getElementById('pregunta2').value.toLowerCase();
    let pregunta3 = document.getElementById('pregunta3').value.toLowerCase();

    if (pregunta1 === "si" && pregunta2 === "si" && pregunta3 === "no") {
        document.getElementById('resultado7').innerText = "¡Felicitaciones! Has respondido correctamente a todas.";
    } else {
        document.getElementById('resultado7').innerText = "Has perdido el juego. Respondiste mal al menos una pregunta.";
    }
}

// Ejercicio 8: Autenticación de Usuario
function autenticar() {
    const usuarioGuardado = "AustinJenner";
    const contraseñaGuardada = "BeltranPanghulan";

    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    if (usuario === usuarioGuardado && contraseña === contraseñaGuardada) {
        document.getElementById('resultado8').innerText = "Autenticación correcto.";
    } else {
        document.getElementById('resultado8').innerText = "Usuario o contraseña incorrecto.";
    }
}

// Ejercicio 9: Evaluación de Satisfacción
function evaluarSatisfaccion() {
    let evaluacion = parseInt(document.getElementById('evaluacion').value);
    let mensaje;

    if (evaluacion >= 1 && evaluacion <= 10) {
        if (evaluacion === 10) {
            mensaje = "¡Te encanta el chocolate!";
        } else if (evaluacion >= 7) {
            mensaje = "Te gusta mucho.";
        } else if (evaluacion >= 4) {
            mensaje = "No está mal.";
        } else {
            mensaje = "No te gusta mucho.";
        }
    } else {
        mensaje = "Por favor ingresa un número del 1 al 10.";
    }

    document.getElementById('resultado9').innerText = mensaje;
}

// Ejercicio 10: Evaluación de Puntaje
function evaluarNota() {
    let nota = parseInt(document.getElementById('nota').value);
    let mensaje;

    if (nota === 10) {
        mensaje = "¡Excelente!";
    } else if (nota === 8 || nota === 9) {
        mensaje = "¡Muy bien!";
    } else if (nota === 6 || nota === 7) {
        mensaje = "Aprobado.";
    } else if (nota < 6) {
        mensaje = "Reprobado.";
    } else {
        mensaje = "Por favor ingresa un número del 1 al 10.";
    }

    document.getElementById('resultado10').innerText = mensaje;
}

