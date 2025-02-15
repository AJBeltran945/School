<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;

Route::get('/productos', [ProductoController::class, 'index']);
Route::get('/productos/{nombre}', [ProductoController::class, 'show']);
Route::post('/productos', [ProductoController::class, 'store']);


