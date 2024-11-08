<?php
session_start();

$users = [
    "austin" => "123456",
    "aj" => "aj",
    "qwerty" => "qwerty"
];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (isset($users[$username]) && $users[$username] === $password) {
        $_SESSION['username'] = $username;
        header("Location: intranet.php");
        exit();
    } else {
        header("Location: index.php");
        exit();
    }
}
