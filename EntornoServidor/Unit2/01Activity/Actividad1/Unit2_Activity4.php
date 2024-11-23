<?php
// Iniciar la sesión
session_start();

// Configuración inicial de colores (fondo blanco, texto negro)
if (!isset($_SESSION['bg_color'])) {
    $_SESSION['bg_color'] = 'white';
}
if (!isset($_SESSION['text_color'])) {
    $_SESSION['text_color'] = 'black';
}

// Actualizar colores si se envían desde el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['bg_color']) && isset($_POST['text_color'])) {
    $_SESSION['bg_color'] = $_POST['bg_color'];
    $_SESSION['text_color'] = $_POST['text_color'];
}

// Contador de accesos
if (isset($_SESSION['contador'])) {
    // Incrementar el contador si ya existe
    $_SESSION['contador']++;
} else {
    // Si no existe, inicializar el contador a 1
    $_SESSION['contador'] = 1;
}

// Inicializar las variables en la sesión si no existen
if (!isset($_SESSION['total'])) {
    $_SESSION['total'] = 0;
}
if (!isset($_SESSION['contador_numeros'])) {
    $_SESSION['contador_numeros'] = 0;
}

// Comprobar si se ha enviado un número
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['numero'])) {
    $numero = (float)$_POST['numero'];

    $_SESSION['total'] += $numero;
    $_SESSION['contador_numeros']++;
}

// Calcular la media si se han introducido números
$media = ($_SESSION['contador_numeros'] > 0) ? $_SESSION['total'] / $_SESSION['contador_numeros'] : 0;

// Comprobar si se ha superado el límite
$superado = $_SESSION['total'] >= 10000; // Cambiado para incluir igual

// Comprobar si se ha solicitado el reinicio
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['reset'])) {
    // Reiniciar las variables de sesión
    $_SESSION['total'] = 0;
    $_SESSION['contador_numeros'] = 0;
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Accesos y Introducir Números</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: <?php echo $_SESSION['bg_color']; ?>;
            color: <?php echo $_SESSION['text_color']; ?>;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: <?php echo $_SESSION['bg_color']; ?>;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 1);
        }

        h1,
        h2 {
            color: <?php echo $_SESSION['text_color']; ?>;
        }

        p {
            font-size: 18px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Actividad 9</h1>
        <h2>Contador de Accesos a la Página</h2>
        <p>Número de accesos a esta página en esta sesión: <strong><?php echo $_SESSION['contador']; ?></strong></p>

        <h1>Actividad 10</h1>
        <h2>Introduce Números</h2>
        <?php if ($superado): ?>
            <h2>¡Límite superado!</h2>
            <p>Total acumulado: <?php echo $_SESSION['total']; ?></p>
            <p>Contador de números introducidos: <?php echo $_SESSION['contador_numeros']; ?></p>
            <p>Media: <?php echo $media; ?></p>
        <?php else: ?>
            <form method="post">
                <label for="numero">Número:</label>
                <input type="number" name="numero" required>
                <input type="submit" value="Añadir">
            </form>
            <p>Total acumulado: <?php echo $_SESSION['total']; ?></p>
            <p>Contador de números introducidos: <?php echo $_SESSION['contador_numeros']; ?></p>
            <p>Media: <?php echo $media; ?></p>
        <?php endif; ?>

        <!-- Botón de reinicio -->
        <form method="post">
            <input type="submit" name="reset" value="Reiniciar">
        </form>

        <!-- Formulario de selección de colores -->
        <h1>Actividad 11</h1>
        <form method="post">
            <label for="bg_color">Color de fondo:</label>
            <select name="bg_color" id="bg_color">
                <option value="white" <?php if ($_SESSION['bg_color'] == 'white') echo 'selected'; ?>>Blanco</option>
                <option value="red" <?php if ($_SESSION['bg_color'] == 'red') echo 'selected'; ?>>Vermell</option>
                <option value="green" <?php if ($_SESSION['bg_color'] == 'green') echo 'selected'; ?>>Verd</option>
                <option value="blue" <?php if ($_SESSION['bg_color'] == 'blue') echo 'selected'; ?>>Blau</option>
                <option value="cyan" <?php if ($_SESSION['bg_color'] == 'cyan') echo 'selected'; ?>>Cian</option>
                <option value="yellow" <?php if ($_SESSION['bg_color'] == 'yellow') echo 'selected'; ?>>Groc</option>
            </select>

            <label for="text_color">Color del texto:</label>
            <select name="text_color" id="text_color">
                <option value="black" <?php if ($_SESSION['text_color'] == 'black') echo 'selected'; ?>>Negre</option>
                <option value="red" <?php if ($_SESSION['text_color'] == 'red') echo 'selected'; ?>>Vermell</option>
                <option value="green" <?php if ($_SESSION['text_color'] == 'green') echo 'selected'; ?>>Verd</option>
                <option value="blue" <?php if ($_SESSION['text_color'] == 'blue') echo 'selected'; ?>>Blau</option>
                <option value="cyan" <?php if ($_SESSION['text_color'] == 'cyan') echo 'selected'; ?>>Cian</option>
                <option value="yellow" <?php if ($_SESSION['text_color'] == 'yellow') echo 'selected'; ?>>Groc</option>
            </select>
            <input type="submit" value="Aplicar colores">
        </form>
    </div>
</body>

</html>