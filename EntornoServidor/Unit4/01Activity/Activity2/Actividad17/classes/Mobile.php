<?php

require_once __DIR__ . '/../traits/WiFi.php';
require_once __DIR__ . '/../traits/Bluetooth.php';
require_once __DIR__ . '/Device.php';

class Mobile extends Device {
    use WiFi, Bluetooth;

    private string $phoneNumber;

    public function __construct(string $name, string $phoneNumber) {
        parent::__construct($name);
        $this->phoneNumber = $phoneNumber;
    }

    public function showPhoneNumber(): string {
        return "Phone number: $this->phoneNumber";
    }

    public function makeCall(string $callNumber): string {
        return "Calling number: $callNumber";
    }
}
