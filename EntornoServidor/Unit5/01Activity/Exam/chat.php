<?php
session_start();
include 'connectorBD.php';

if (!isset($_SESSION['usuario_id'])) {
    header('Location: login.php');
    exit;
}

$pdo = conectarBD();

// Inserción del mensaje si se envía el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mensaje = $_POST['mensaje'];
    $username = $_SESSION['usuario_id'];
    $fecha = date('Y-m-d H:i:s');

    try {
        $stmt = $pdo->prepare("INSERT INTO mensajes (usuario, mensaje, fecha) VALUES (:username, :mensaje, :fecha)");
        $stmt->bindParam(':mensaje', $mensaje, PDO::PARAM_STR);
        $stmt->bindParam(':username', $username, PDO::PARAM_STR);
        $stmt->bindParam(':fecha', $fecha, PDO::PARAM_STR);

        $stmt->execute();
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}

// Carga de los mensajes del usuario
try {
    $stmt = $pdo->prepare("SELECT usuario, mensaje, fecha FROM mensajes WHERE usuario = :username ORDER BY fecha DESC");
    $stmt->bindParam(':username', $_SESSION['usuario_id'], PDO::PARAM_STR);
    $stmt->execute();
    $mensajes = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}
?>

<h1>Bienvenido al chat</h1>

<h2>Tus mensajes:</h2>
<div>
    <?php if (!empty($mensajes)): ?>
        <ul>
            <?php foreach ($mensajes as $mensaje): ?>
                <li>
                    <?= htmlspecialchars($mensaje['usuario']) ?>
                    <strong>[<?= htmlspecialchars($mensaje['fecha']) ?>]:</strong>
                    <?= htmlspecialchars($mensaje['mensaje']) ?>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php else: ?>
        <p>No has enviado ningún mensaje aún.</p>
    <?php endif; ?>
</div>

<form method="POST" action="">
    <label>
        <textarea name="mensaje" required></textarea>
    </label>
    <br><br>
    <button type="submit">Enviar mensaje</button>
</form>
