<?php

use App\Http\Controllers\MensajeController;
use Illuminate\Support\Facades\Route;

// Ruta a la página de inicio
Route::get('/home', [MensajeController::class, 'home'])->name('home');

// Rutas para las operaciones CRUD de mensajes (protegidas por autenticación)
Route::middleware('auth')->group(function () {
    Route::resource('mensajes', MensajeController::class);
});
