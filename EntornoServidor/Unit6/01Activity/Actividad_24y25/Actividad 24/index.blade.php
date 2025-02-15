<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Productos</title>
    <style>

        /*el estilo esta hecha por ia*/

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            text-align: center;
            background-color: #f8f9fa;
        }
        h1 {
            color: #333;
        }
        ul {
            list-style: none;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
        }
        li {
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            width: 250px;
        }
        a {
            text-decoration: none;
            font-weight: bold;
            color: #007bff;
        }
        a:hover {
            color: #0056b3;
        }
    </style>
</head>
<body>
<h1>Productos Disponibles</h1>
<ul>
    @foreach ($productos as $producto)
        <li>
            <a href="/productos/{{ $producto['nombre'] }}">{{ $producto['nombre'] }}</a><br>
            <span><strong>Precio:</strong> ${{ $producto['precio'] }}</span>
        </li>
    @endforeach
</ul>
</body>
</html>
