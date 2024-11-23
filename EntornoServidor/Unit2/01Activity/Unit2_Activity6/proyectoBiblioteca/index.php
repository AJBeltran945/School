<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
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
            width: 100%;
        }
        h1 {
            text-align: center;
            color: #4a90e2;
        }
        .section {
            margin-bottom: 20px;
        }
        .section h2 {
            margin: 0;
            font-size: 1.2em;
            color: #333;
            border-bottom: 2px solid #4a90e2;
            padding-bottom: 5px;
        }
        .detail {
            margin: 5px 0;
            font-size: 1em;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Detalles de Biblioteca</h1>

    <?php
    require 'biblioteca/ficcion/libro.php';
    require 'biblioteca/ficcion/autor.php';
    require 'biblioteca/ciencia/libro.php';
    require 'biblioteca/ciencia/autor.php';

    use Biblioteca\Ficcion\Libro as LibroFccion;
    use Biblioteca\Ficcion\Autor as AutorFiccion;
    use Biblioteca\Ciencia\Libro as LibroCiencia;
    use Biblioteca\Ciencia\Autor as AutorCiencia;

    // Crear instancias de "Ficcion"
    $libroFiccion = new LibroFiccion("1984", 1949);
    $autorFiccion = new AutorFiccion("George Orwell", "Británica";

    // Crear instancias de "Ciencia"
    $libroCiencia = new LibroCiencia("Breve historia del tiempo", 1988);
    $autorCiencia = new AutorCiencia("Stephen Hawking", "Británica");
    ?>

    <div class="section">
        <h2>Ficción</h2>
        <div class="detail"><?php $libroFiccion->mostrarDetalles(); ?></div>
        <div class="detail"><?php $autorFiccion->mostrarDetalles(); ?></div>
    </div>

    <div class="section">
        <h2>Ciencia</h2>
        <div class="detail"><?php $libroCiencia->mostrarDetalles(); ?></div>
        <div class="detail"><?php $autorCiencia->mostrarDetalles(); ?></div>
    </div>
</div>

</body>
</html>
