<?php
// Definition of the abstract class Shape
abstract class Shape {
    // Abstract method calculateArea()
    abstract public function calculateArea();
}

// Subclass Circle implementing calculateArea()
class Circle extends Shape {
    private $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function calculateArea() {
        return pi() * pow($this->radius, 2);
    }
}

// Subclass Rectangle implementing calculateArea()
class Rectangle extends Shape {
    private $width;
    private $height;

    public function __construct($width, $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function calculateArea() {
        return $this->width * $this->height;
    }
}

// Subclass Triangle implementing calculateArea()
class Triangle extends Shape {
    private $base;
    private $height;

    public function __construct($base, $height) {
        $this->base = $base;
        $this->height = $height;
    }

    public function calculateArea() {
        return ($this->base * $this->height) / 2;
    }
}

// Script to instantiate and calculate areas
$circle = new Circle(5); // Radius = 5
$rectangle = new Rectangle(4, 6); // Width = 4, Height = 6
$triangle = new Triangle(3, 7); // Base = 3, Height = 7

echo "Area of the Circle: " . $circle->calculateArea() . " square units";
echo "<br/>";
echo "Area of the Rectangle: " . $rectangle->calculateArea() . " square units";
echo "<br/>";
echo "Area of the Triangle: " . $triangle->calculateArea() . " square units";
