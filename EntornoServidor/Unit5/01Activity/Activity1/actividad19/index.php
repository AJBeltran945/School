<?php
session_start();

if (isset($_SESSION['username'])) {
    // Si el usuario está logueado, lo redirigimos a la intranet
    header("Location: intranet.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
<div class="login-container">
    <h2>Login</h2>

    <form action="login.php" method="post">
        <label for="username">Nombre de usuario:</label>
        <input type="text" name="username" id="username" required>

        <label for="password">Contraseña:</label>
        <input type="password" name="password" id="password" required>

        <button type="submit">Entrar</button>
    </form>

    <div class="register-link">
        <!-- Solo mostrar este enlace si el usuario no está logueado -->
        <p>¿No tienes cuenta? <a href="../actividad20/register.php">Regístrate aquí</a></p>
    </div>
</div>
</body>
</html>
