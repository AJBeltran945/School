<?php
$conn = new mysqli("db", "austin", "123456", "austin_db");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

echo "Conexión establecida con MySQL!";
?>
