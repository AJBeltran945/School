<?php

// Ejercicio 1
echo "<h1>Que dia es hoy?</h1>";

$today = date("D");

switch($today) {
    case 'Mon':
        echo "Hoy es lunes.";
        break;
    case 'Tue':
        echo "Hoy es martes.";
        break;
    case 'Wed':
        echo "Hoy es miércoles.";
        break;
    case 'Thu':
        echo "Hoy es jueves.";
        break;
    case 'Fri':
        echo "Hoy es viernes.";
        break;
    case 'Sat':
        echo "Hoy es sábado.";
        break;
    case 'Sun':
        echo "Hoy es domingo.";
        break;
    default:
        echo "No se pudo determinar el día.";
        break;
}

// Ejercicio 2

$nota = rand(1,10);
echo "<h1>" . "Tu nota es: " . $nota . "</h1>";

switch ($nota) {
    case $nota >= 9:
        echo "Excelente";
        break;
    
    case $nota >= 7:
        echo "Notable";
        break;
    
    case $nota == 6:
        echo "Bien";
        break;
    
    default:
        echo "Suspendido";
        break;
}

// Ejercicio 3

$nota = rand(0.1*10, 10*10) / 10;
echo "<h1>" . "Tu nota es: " . $nota . "</h1>";

switch ($nota) {
    case $nota > 8.0:
        echo "Excelente";
        break;
    
    case $nota > 6.0:
        echo "Notable";
        break;
    
    case $nota > 5.0:
        echo "Bien";
        break;
    
    default:
        echo "Suspendido";
        break;
}

// Ejercicio 4

echo "<h1>Comprobacion de name</h1>";
$names = [
    'Nam11e', 
    'NamE', 
    'Austin', 
    "N4m3", 
    "nAmE",
    "NaM1",
    "n4M3",
    "qwerty",
    "nAme2",
    "namE"
];

$randNum = rand(0,9);
$name = $names[$randNum];

echo "Tu nombre es: " . $name . "<br>";

try {
    if (!preg_match('/^[a-zA-Z]+$/', $name)) {
        throw new Exception("Contiene caracteres diferentes de a-z A-Z");
    }

    if (strpos(strtolower($name), 'name') !== false) {
        throw new Exception ("Contiene la palabra 'name'");
    } else {
        throw new Exception ("Introducir nombre nuevamente");
    }

} catch (Exception $e) {
    echo $e->getMessage();
}