<?php
require_once 'shape.php';

class Triangle implements Shape {
    private $base;
    private $height;
    private $sideA;
    private $sideB;
    private $sideC;

    public function __construct($base, $height, $sideA, $sideB, $sideC) {
        $this->base = $base;
        $this->height = $height;
        $this->sideA = $sideA;
        $this->sideB = $sideB;
        $this->sideC = $sideC;
    }

    public function calculateArea() {
        return ($this->base * $this->height) / 2;
    }

    public function calculatePerimeter() {
        return $this->sideA + $this->sideB + $this->sideC;
    }
}
?>
