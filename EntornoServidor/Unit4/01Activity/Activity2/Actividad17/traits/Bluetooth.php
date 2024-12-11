<?php

trait Bluetooth {
    private bool $bluetoothConnect = false;

    public function connectBluetooth(string $deviceName): string {
        $this->bluetoothConnect = true;
        return "$deviceName: Bluetooth connection enabled.";
    }

    public function disconnectBluetooth(string $deviceName): string {
        $this->bluetoothConnect = false;
        return "$deviceName: Bluetooth connection disabled.";
    }
}
