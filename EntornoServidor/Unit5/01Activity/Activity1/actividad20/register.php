<?php
session_start();
include('../actividad18/connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password === $confirm_password) {
        // Comprobamos si el nombre de usuario ya existe
        $pdo = conectarBBDD();
        $user = getUserByName($pdo, $username);

        if ($user) {
            // Si el usuario ya existe, mostramos un error
            $error = "El nombre de usuario ya está registrado.";
        } else {
            // Encriptamos la contraseña antes de guardarla
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Insertamos el nuevo usuario en la base de datos
            $sql = "INSERT INTO Usuarios (nombre_usuario, password, estado) VALUES (:username, :password, 1)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':password', $hashed_password);
            $stmt->execute();

            // Redirigimos al usuario al login después de registrarse
            header("Location: index.php");
            exit();
        }
    } else {
        $error = "Las contraseñas no coinciden.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registrar</title>
    <link rel="stylesheet" href="../actividad19/styles/style.css">
</head>
<body>
<div class="register-container">
    <h2>Registrar</h2>

    <?php if (isset($error)): ?>
        <p style="color: red;"><?php echo $error; ?></p>
    <?php endif; ?>

    <form action="register.php" method="post">
        <label for="username">Nombre de usuario:</label>
        <input type="text" name="username" id="username" required>

        <label for="password">Contraseña:</label>
        <input type="password" name="password" id="password" required>

        <label for="confirm_password">Confirmar contraseña:</label>
        <input type="password" name="confirm_password" id="confirm_password" required>

        <button type="submit">Registrar</button>
    </form>
</div>
</body>
</html>
