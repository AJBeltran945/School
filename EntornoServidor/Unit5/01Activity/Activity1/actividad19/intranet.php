<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
    exit();
}

$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Intranet</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
<div class="intranet-container">
    <h2>Bienvenido, <?php echo htmlspecialchars($username); ?>!</h2>
    <div class="links">
        <a href="index.php">Ir al inicio</a> |
        <a href="logout.php">Cerrar sesión</a> |
        <a href="../actividad20/disable.php">Darse de baja</a>
    </div>
</div>
</body>
</html>
