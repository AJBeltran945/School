<?php
ini_set('display_errors', 1);  // Muestra los errores en pantalla
error_reporting(E_ALL);

require_once 'traits/WiFi.php';
require_once 'traits/Bluetooth.php';
require_once 'classes/Device.php';
require_once 'classes/Mobile.php';
require_once 'classes/Tablet.php';

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

ob_start();

// Create an instance of Mobile
$mobile = new Mobile("Samsung", "123456789");
echo "<h2>Mobile Information</h2>";
echo "<p><strong>Device Name:</strong> " . $mobile->showName() . "</p>";
echo "<p><strong>Phone Number:</strong> " . $mobile->showPhoneNumber() . "</p>";
echo "<p>" . $mobile->connectWiFi("Samsung") . "</p>";
echo "<p>" . $mobile->connectBluetooth("Samsung") . "</p>";
echo "<p>" . $mobile->makeCall("987654321") . "</p>";
echo "<p>" . $mobile->disconnectWiFi("Samsung") . "</p>";
echo "<p>" . $mobile->disconnectBluetooth("Samsung") . "</p>";

// Create an instance of Tablet
$tablet = new Tablet("GalaxyTab", "S10 Ultra");
echo "<h2>Tablet Information</h2>";
echo "<p><strong>Device Name:</strong> " . $tablet->showName() . "</p>";
echo "<p><strong>Model:</strong> " . $tablet->showModel() . "</p>";
echo "<p>" . $tablet->connectWiFi("GalaxyTab") . "</p>";
echo "<p>" . $tablet->connectBluetooth("GalaxyTab") . "</p>";
echo "<p>" . $tablet->readBook("Harry Potter") . "</p>";
echo "<p>" . $tablet->disconnectWiFi("GalaxyTab") . "</p>";
echo "<p>" . $tablet->disconnectBluetooth("GalaxyTab") . "</p>";

$output = ob_get_clean(); // Capture output and stop buffering
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Device Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            color: #333;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 15px;
            text-align: center;
            font-size: 1.5em;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #4CAF50;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 5px;
        }
        p {
            margin: 10px 0;
        }
        strong {
            color: #333;
        }
    </style>
</head>
<body>
<header>Device Manager</header>
<div class="container">
    <?= $output; ?>
</div>
</body>
</html>
