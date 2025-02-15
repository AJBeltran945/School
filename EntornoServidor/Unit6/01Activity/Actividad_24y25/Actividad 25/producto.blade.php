<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $producto['nombre'] }}</title>
    <style>

        /*el estilo esta hecha por ia*/

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            text-align: center;
            background-color: #f4f4f4;
        }
        h1 {
            color: #333;
        }
        p {
            font-size: 18px;
            color: #555;
        }
        a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 15px;
            text-decoration: none;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            transition: 0.3s;
        }
        a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
<h1>{{ $producto['nombre'] }}</h1>
<p><strong>Precio:</strong> ${{ $producto['precio'] }}</p>
<p><strong>Descripción:</strong> {{ $producto['descripcion'] }}</p>
<a href="/productos">Volver al listado</a>
</body>
</html>
