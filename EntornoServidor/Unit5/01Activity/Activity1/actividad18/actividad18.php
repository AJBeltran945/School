<?php
require_once "connection.php";

$pdo = conectarBBDD();
$username = "aj";

$user = getUserByName($pdo, $username);

if ($user) {
    echo "Usuario encontrado: <br>";
    print_r($user);
} else {
    echo "No se encontró el usuario con nombre: $username";
}
