<?php
require_once 'circle.php';
require_once 'rectangle.php';
require_once 'triangle.php';

// Create instances of the shapes
$circle = new Circle(5); // Radius = 5
$rectangle = new Rectangle(4, 6); // Width = 4, Height = 6
$triangle = new Triangle(3, 7, 5, 6, 7); // Base = 3, Height = 7, Sides = 5, 6, 7

// Output results
echo "Circle:";
echo "<br/>";
echo "Area: " . $circle->calculateArea() . " square units";
echo "<br/>";
echo "Perimeter: " . $circle->calculatePerimeter() . " units";
echo "<br/><br/>";

echo "Rectangle:";
echo "<br/>";
echo "Area: " . $rectangle->calculateArea() . " square units";
echo "<br/>";
echo "Perimeter: " . $rectangle->calculatePerimeter() . " units";
echo "<br/><br/>";

echo "Triangle:";
echo "<br/>";
echo "Area: " . $triangle->calculateArea() . " square units";
echo "<br/>";
echo "Perimeter: " . $triangle->calculatePerimeter() . " units";