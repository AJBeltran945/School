<?php
session_start();
include('../actividad18/connection.php');

// Verificamos que el usuario esté logueado
if (!isset($_SESSION['username'])) {
    header("Location: ../actividad19/index.php");
    exit();
}

// Conectamos a la base de datos y eliminamos al usuario
$pdo = conectarBBDD();

// Obtenemos el nombre de usuario de la sesión
$username = $_SESSION['username'];

try {
    //Actualiza el estado del usuario de "1" a "0" (inactivo)
    $stmt = $pdo->prepare("UPDATE Usuarios SET status = 0 WHERE user_name = :username");
    $stmt->bindParam(':username', $_SESSION['username'], PDO::PARAM_STR);
    $stmt->execute();

    // Destruimos la sesión
    session_unset();
    session_destroy();

    header("Location: ../actividad19/index.php");
    exit();

} catch (PDOException $e) {
    echo "Error al darse de baja: " . $e->getMessage();
}
// Redirigimos al usuario al login después de darse de baja
?>
