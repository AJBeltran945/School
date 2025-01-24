<?php
/*
Crear chat_db_def y la tabla mensajes (si no existen):

CREATE DATABASE IF NOT EXISTS chat_db_def;

USE chat_db_def;

CREATE TABLE IF NOT EXISTS mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255)
);
*/

$host = "172.17.0.2";    // Estamos trabajando en equipo local
$user = "root";         // Usuario predeterminado en XAMPP
$pass = "aj090405";             // Por defecto no hay contraseña
$db   = "chat_db_austin_jenner_beltran_panghulan"; // Nombre de la base de datos

try {
    $dsn = "mysql:host=$host";
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->exec("CREATE DATABASE IF NOT EXISTS $db");
    $pdo->exec("USE $db");

    $pdo->exec("CREATE TABLE IF NOT EXISTS mensajes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario VARCHAR(50) NOT NULL,
        mensaje TEXT NOT NULL,
        fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");

    $pdo->exec("CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255)
    )");

    $stmt = $pdo->prepare("INSERT IGNORE INTO usuarios (username, password) VALUES (:username, :password)");
    $adminPassword = password_hash("admin", PASSWORD_DEFAULT);
    $userPassword = password_hash("123", PASSWORD_DEFAULT); // Contraseña de usuario
    $stmt->execute([':username' => 'admin', ':password' => $adminPassword]);
    $stmt->execute([':username' => 'invitado', ':password' => NULL]);
    $stmt->execute([':username' => 'usuario', ':password' => $userPassword]); // Insertar usuario

} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
