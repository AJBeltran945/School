<?php
function conectarBBDD(
    $dbType = "mysql",
    $host = "172.17.0.2",
    $dbName = "DWES",
    $charset = "utf8mb4",
    $user = "root",
    $password = "aj090405"
) {
    try {
        $dsn = "$dbType:host=$host;dbname=$dbName;charset=$charset";
        $pdo = new PDO($dsn, $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        die("Error al conectar a la base de datos: " . $e->getMessage());
    }
}

function getUserByName($pdo, $username) {
    $sql = "SELECT * FROM Usuarios WHERE nombre_usuario = :username LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}
