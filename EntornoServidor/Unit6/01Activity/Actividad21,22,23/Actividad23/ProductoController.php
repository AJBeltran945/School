<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = [
            ['nombre' => 'Laptop Gamer', 'precio' => 1200, 'descripcion' => 'Laptop para gaming.'],
            ['nombre' => 'Teclado Mecánico', 'precio' => 100, 'descripcion' => 'Teclado RGB con switches mecánicos.'],
            ['nombre' => 'Mouse Inalámbrico', 'precio' => 50, 'descripcion' => 'Mouse ergonómico y recargable.'],
            ['nombre' => 'Monitor 27"', 'precio' => 300, 'descripcion' => 'Monitor de alta resolución.'],
            ['nombre' => 'LLM', 'precio' => 111, 'descripcion' => 'Large Language Model.']
        ];

        return view('productos.index', ['productos' => $productos]);
    }
}
