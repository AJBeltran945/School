<?php
session_start();
include('../actividad18/connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Debug: Check if POST data is being received
    echo "Username: $username, Password: $password, Confirm Password: $confirm_password, name: $name, surname: $surname <br>";

    if ($password === $confirm_password) {
        // Debug: Passwords match
        echo "Passwords match.<br>";

        // Comprobamos si el nombre de usuario ya existe
        $pdo = conectarBBDD();
        if (!$pdo) {
            echo "Database connection failed.<br>";
        } else {
            echo "Database connected successfully.<br>";
        }

        $user = getUserByName($pdo, $username);

        // Debug: Check if user exists
        if ($user) {
            echo "User already exists.<br>";
            $error = "El nombre de usuario ya está registrado.";
        } else {
            echo "User does not exist.<br>";
        }

        // Encriptamos la contraseña antes de guardarla
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        echo "Hashed Password: $hashed_password<br>";

        $status = 1;

        try {
            $stmt = $pdo->prepare("INSERT INTO Usuarios (name, surname, user_name, password, status) VALUES (:name, :surname, :username, :password, 1)");
            $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $stmt->bindParam(':surname', $surname, PDO::PARAM_STR);
            $stmt->bindParam(':username', $username, PDO::PARAM_STR);
            $stmt->bindParam(':password', $hashed_password, PDO::PARAM_STR);

            $stmt->execute();

            echo "Query executed successfully.<br>";

            // Redirigimos al usuario al login después de registrarse
            header("Location: ../actividad19/index.php");
            exit();
        } catch (PDOException $e) {
            echo "Error executing query: " . $e->getMessage() . "<br>";
        }

    } else {
        // Debug: Passwords don't match
        echo "Passwords don't match.<br>";
        $error = "Las contraseñas no coinciden.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registrar</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
<div class="register-container">
    <h2>Registrar</h2>

    <?php if (isset($error)): ?>
        <p style="color: red;"><?php echo $error; ?></p>
    <?php endif; ?>

   <form action="register.php" method="post">

    <label for="name">Nombre:</label>
    <input type="text" name="name" id="name" required>

    <label for="surname">Apellido:</label>
    <input type="text" name="surname" id="surname" required>

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
