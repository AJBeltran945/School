<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Productos</title>
</head>
<body>
<h1>Listado de Productos</h1>

@foreach($productos as $producto)
    <x-producto-card>
        <h2>{{ $producto['nombre'] }}</h2>
        <p>{{ $producto['descripcion'] }}</p>
        <strong>Precio: ${{ $producto['precio'] }}</strong>
    </x-producto-card>
@endforeach
</body>
</html>
