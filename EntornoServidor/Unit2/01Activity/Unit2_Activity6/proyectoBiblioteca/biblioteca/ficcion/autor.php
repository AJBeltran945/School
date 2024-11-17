<?php
namespace Biblioteca\Ficcion;

class autor {
    private $nombre;
    private $nacionalidad;

    public function __construct($nombre, $nacionalidad) {
        $this->nombre = $nombre;
        $this->nacionalidad = $nacionalidad;
    }

    public function mostrarDetalles() {
        echo "Autor de Ficción: {$this->nombre}, Nacionalidad: {$this->nacionalidad}<br>";
    }
}
