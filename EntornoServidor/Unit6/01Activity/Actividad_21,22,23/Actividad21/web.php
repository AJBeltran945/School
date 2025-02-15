<?php

use Illuminate\Support\Facades\Route;
use App\View\Components\ProductoCard;
Route::get('/', function () {
    return view('welcome');
});


Route::get('/productos', function () {
    $productos = [
        ['nombre' => 'Laptop Gamer', 'precio' => 1200, 'descripcion' => 'Laptop para gaming.'],
        ['nombre' => 'Teclado Mecánico', 'precio' => 100, 'descripcion' => 'Teclado RGB con switches mecánicos.'],
        ['nombre' => 'Mouse Inalámbrico', 'precio' => 50, 'descripcion' => 'Mouse ergonómico y recargable.'],
        ['nombre' => 'Monitor 27"', 'precio' => 300, 'descripcion' => 'Monitor de alta resolución.']
    ];

    return view('productos.index', ['productos' => $productos]);
});
