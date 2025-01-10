<?php
session_start();
include('../actividad18/connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $pdo = conectarBBDD();
    $user = getUserByName($pdo, $username);

    // Verificamos si el usuario existe y la contraseña es correcta
    if ($user && password_verify($password, $user['contraseña'])) {
        $_SESSION['username'] = $user['nombre_usuario']; // Guardamos el nombre de usuario en la sesión
        header("Location: intranet.php"); // Redirigimos a la intranet
        exit();
    } else {
        header("Location: index.php?error=1"); // Si la autenticación falla, redirigimos al login con error
        exit();
    }
}
?>
