<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
    exit();
}

$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Intranet</title>
    <style>
        /* Basic reset for all elements */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Body styling */
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f0f4f8; /* Light grayish-blue background */
            font-family: Arial, sans-serif;
        }

        /* Container for the welcome message and links */
        .intranet-container {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            text-align: center;
        }

        h2 {
            margin-bottom: 1.5rem;
            color: #333;
        }

        a {
            color: #007bff;
            text-decoration: none;
            font-size: 1rem;
            margin: 0 0.5rem;
            transition: color 0.3s;
        }

        a:hover {
            color: #0056b3;
        }

        /* Additional styling for the link container */
        .links {
            margin-top: 1.5rem;
        }
    </style>
</head>
<body>
    <div class="intranet-container">
        <h2>Bienvenido, <?php echo htmlspecialchars($username); ?></h2>
        <div class="links">
            <a href="index.php">Ir al inicio</a> |
            <a href="logout.php">Cerrar sesión</a>
        </div>
    </div>
</body>
</html>

