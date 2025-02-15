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
            background-color: #f8f9fa;
            text-align: center;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
            color: #333;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: #f4f4f4;
            padding: 15px;
            border-radius: 8px;
        }
        label {
            font-weight: bold;
        }
        input, textarea {
            width: 90%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: #007bff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }
        button:hover {
            background-color: #0056b3;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            background: white;
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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
<div class="container">
    <h1>Productos Disponibles</h1>

    <!-- Formulario para agregar productos -->
    <h2>Agregar un nuevo producto</h2>
    <form action="/productos" method="POST">
        @csrf
        <label>Nombre: <input type="text" name="nombre" required></label>
        <label>Precio: <input type="number" name="precio" required></label>
        <label>Descripción: <textarea name="descripcion" required></textarea></label>
        <button type="submit">Agregar Producto</button>
    </form>

    <h2>Lista de productos</h2>
    <ul>
        @foreach (session('productos', []) as $producto)
            <li>
                <a href="/productos/{{ $producto['nombre'] }}">{{ $producto['nombre'] }}</a>
                - Precio: ${{ $producto['precio'] }}
            </li>
        @endforeach
    </ul>
</div>
</body>
</html>
