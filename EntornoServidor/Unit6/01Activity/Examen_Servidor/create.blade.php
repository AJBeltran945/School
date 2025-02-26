@extends('layouts.app')

@section('content')
    <h1>Crear mensaje</h1>
    <form action="{{ route('mensajes.store') }}" method="POST">
        @csrf
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario" required>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>

        <button type="submit">Enviar</button>
    </form>
@endsection
