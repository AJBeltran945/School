<?php
namespace biblioteca\ficcion;

class libro {
    private $titulo;
    private $año;

    public function __construct($titulo, $año) {
        $this->titulo = $titulo;
        $this->año = $año;
    }

    public function mostrarDetalles() {
        echo "Libro de Ficción: {$this->titulo}, Año: {$this->año}<br>";
    }
}
