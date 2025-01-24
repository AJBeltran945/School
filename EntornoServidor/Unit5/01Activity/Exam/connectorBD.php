<?php
// connectorBD.php

// Función para conectar a la base de datos
function conectarBD() {
    $host = '172.17.0.2';
    $dbname = 'chat_db_austin_jenner_beltran_panghulan';
    $username = 'root';
    $password = 'aj090405';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        die("Error de conexión: " . $e->getMessage());
    }
}

// Función para obtener un usuario por nombre
function getUserByName($pdo, $username) {
    $sql = "SELECT * FROM usuarios WHERE username = :username LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function getMessageByName($pdo, $username) {
    $sql = "
        SELECT mensajes.*, usuarios.username 
        FROM mensajes 
        JOIN usuarios ON mensajes.usuario = usuarios.id 
        WHERE usuarios.username = :username 
        ORDER BY mensajes.fecha DESC
    ";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
