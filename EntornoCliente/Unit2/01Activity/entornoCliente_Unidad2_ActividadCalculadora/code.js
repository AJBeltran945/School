function calcular() {
    // Obtener los valores
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operator").value;

    // Verificar los valores
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Error: Ingresa números válidos.";
        return;
    }

    //calcular
    let resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById("resultado").innerText = "Error: No se puede dividir por 0.";
                return;
            }
            resultado = num1 / num2;
            break;
        case '**':
            resultado = num1 ** num2;
            break;
        case '%':
            resultado = num1 % num2;
            break;
        default:
            resultado = "Operación no válida.";
    }

    // Mostrar resultado
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
