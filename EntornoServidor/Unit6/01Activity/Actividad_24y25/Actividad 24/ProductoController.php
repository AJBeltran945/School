<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductoController extends Controller
{
    private $productos;

    public function __construct()
    {
        $this->productos = [
            ['nombre' => 'Laptop Gamer', 'precio' => 1200, 'descripcion' => 'Laptop para gaming.'],
            ['nombre' => 'Teclado Mecánico', 'precio' => 100, 'descripcion' => 'Teclado RGB con switches mecánicos.'],
            ['nombre' => 'Mouse Inalámbrico', 'precio' => 50, 'descripcion' => 'Mouse ergonómico y recargable.'],
            ['nombre' => 'LLM', 'precio' => 111, 'descripcion' => 'Large Language Model.']
        ];
    }

    public function index()
    {
        return view('productos.index', ['productos' => $this->productos]);
    }

    public function show($nombre)
    {
        $producto = collect($this->productos)->firstWhere('nombre', $nombre);

        if (!$producto) {
            return redirect('/productos');
        }

        return view('productos.producto', ['producto' => $producto]);
    }
}

