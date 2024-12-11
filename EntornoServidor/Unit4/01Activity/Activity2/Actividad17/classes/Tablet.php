<?php

require_once __DIR__ . '/../traits/WiFi.php';
require_once __DIR__ . '/../traits/Bluetooth.php';
require_once __DIR__ . '/Device.php';

class Tablet extends Device {
    use WiFi, Bluetooth;

    private string $model;

    public function __construct(string $name, string $model) {
        parent::__construct($name);
        $this->model = $model;
    }

    public function showModel(): string {
        return "Tablet model: $this->model";
    }

    public function readBook(string $bookTitle): string {
        return "Reading the book: $bookTitle";
    }
}
