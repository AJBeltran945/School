<?php

// Clase abstracta Vehiculo
abstract class Vehiculo {
    protected mixed $numero_ruedas;

    public function __construct($numero_ruedas = 4) {
        $this->numero_ruedas = $numero_ruedas;
    }

    abstract public function mostrarDetalles();
}