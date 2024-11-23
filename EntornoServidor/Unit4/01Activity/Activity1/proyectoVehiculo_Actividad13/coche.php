<?php

class Coche extends Vehiculo {
    private string $marca;
    private string $modelo;
    private string $color;
    private string $velocidad_maxima;

    public function __construct($marca, $modelo, $color, $velocidad_maxima) {
        parent::__construct(); // Llama al constructor de Vehiculo para establecer el número de ruedas
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->color = $color;
        $this->velocidad_maxima = $velocidad_maxima;
    }

    public function mostrarDetalles(): string
    {
        return "Este coche es un $this->marca $this->modelo de color $this->color, con $this->numero_ruedas ruedas y velocidad máxima de $this->velocidad_maxima km/h.";
    }
}
