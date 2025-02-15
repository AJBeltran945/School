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
        // Obtener productos iniciales
        $productosIniciales = $this->productos;

        // Obtener productos almacenados en sesión
        $productosSesion = session('productos', []);

        // Fusionar ambas listas
        $productos = array_merge($productosIniciales, $productosSesion);

        // Buscar el producto por nombre
        $producto = collect($productos)->firstWhere('nombre', $nombre);

        if (!$producto) {
            return redirect('/productos'); // Si no existe, redirigir a la lista
        }

        return view('productos.producto', ['producto' => $producto]);
    }


    public function store(Request $request)
    {
        $nuevoProducto = [
            'nombre' => $request->input('nombre'),
            'precio' => $request->input('precio'),
            'descripcion' => $request->input('descripcion'),
        ];

        // Agregar el nuevo producto a la lista
        session()->push('productos', $nuevoProducto);

        return redirect('/productos');
    }

}

