<?php

trait WiFi {
    private bool $wifiConnect = false;

    public function connectWiFi(string $deviceName): string {
        $this->wifiConnect = true;
        return "$deviceName: WiFi connection enabled.";
    }

    public function disconnectWiFi(string $deviceName): string {
        $this->wifiConnect = false;
        return "$deviceName: WiFi connection disabled.";
    }
}
