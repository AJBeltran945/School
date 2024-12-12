<?php
session_start();
include('db.php');

// Verificamos que el usuario esté logueado
if (!isset($_SESSION['username'])) {
    header("Location: index.php");
    exit();
}

// Obtenemos el nombre de usuario de la sesión
$username = $_SESSION['username'];

// Conectamos a la base de datos y eliminamos al usuario
$pdo = conectarBBDD();
$sql = "DELETE FROM Usuarios WHERE nombre_usuario = :username";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':username', $username);
$stmt->execute();

// Destruimos la sesión
session_unset();
session_destroy();

// Redirigimos al usuario al login después de darse de baja
header("Location: index.php");
exit();
?>
