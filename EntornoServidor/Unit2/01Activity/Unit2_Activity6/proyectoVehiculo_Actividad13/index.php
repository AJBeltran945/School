<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles del Coche</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            text-align: center;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
            font-size: 1.1em;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Detalles del Coche</h1>
    <?php
    // Incluir los archivos de clase
    include 'vehiculo.php';
    include 'coche.php';

    // Crear una instancia de la clase Coche
    $coche = new Coche("Toyota", "Corolla", "rojo", 250);

    // Mostrar los detalles del coche
    echo "<p>" . $coche->mostrarDetalles() . "</p>";
    ?>
</div>

</body>
</html>
