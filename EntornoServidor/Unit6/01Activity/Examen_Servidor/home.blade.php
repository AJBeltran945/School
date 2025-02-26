@extends('layouts.app')

@section('content')
    @auth
        <p>Bienvenido, {{ auth()->user()->name }}!</p>
        <a href="{{ route('mensajes.index') }}">Ver mensajes</a>
        <a href="{{ route('logout') }}">Cerrar sesión</a>
    @else
        <a href="{{ route('login') }}">Iniciar sesión</a>
        <a href="{{ route('register') }}">Registrarse</a>
    @endauth
    <p>{{ $createdBy ?? 'Creado por Juan Luis Ladaria' }}</p>
@endsection
