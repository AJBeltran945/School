<?php
require_once 'shape.php';

class Rectangle implements Shape {
    private $width;
    private $height;

    public function __construct($width, $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function calculateArea() {
        return $this->width * $this->height;
    }

    public function calculatePerimeter() {
        return 2 * ($this->width + $this->height);
    }
}
?>
