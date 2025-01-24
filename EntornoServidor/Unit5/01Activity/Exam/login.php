<?php
// login.php
session_start();
include 'connectorBD.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $contrasena = $_POST['contrasena'];

    // Conectar a la base de datos
    $pdo = conectarBD();
    $user = getUserByName($pdo, $nombre);

    // Verificar si el usuario existe y la contraseña es correcta
    if ($user && password_verify($contrasena, $user['password'])) {
        $_SESSION['usuario_id'] = $user['id'];
        header('Location: chat.php');
        exit;
    } else {
        $error = "Usuario o contraseña incorrectos.";
    }
}
?>

<form method="POST" action="">
    <label for="nombre">Nombre de usuario</label>
    <label>
        <input type="text" name="nombre" required>
    </label>
    <br>
    <label for="contrasena">Contraseña</label>
    <label>
        <input type="password" name="contrasena" required>
    </label>
    <br>
    <button type="submit">Iniciar sesión</button>
</form>
<?php if (isset($error)) echo "<p>$error</p>"; ?>
