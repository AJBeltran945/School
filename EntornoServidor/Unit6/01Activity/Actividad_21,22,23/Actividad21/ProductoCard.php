<?php
namespace App\View\Components;

use Illuminate\View\Component;

class ProductoCard extends Component
{
    public $nombre;
    public $descripcion;
    public $precio;

    public function __construct($nombre, $descripcion, $precio)
    {
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
    }

    public function render()
    {
        return view('components.producto-card');
    }
}
