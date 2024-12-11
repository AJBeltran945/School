<?php

class Device {
    public string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function showName(): string {
        return "Device name: $this->name";
    }
}
