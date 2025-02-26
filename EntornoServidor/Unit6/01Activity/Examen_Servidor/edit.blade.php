@extends('layouts.app')

@section('content')
    <h1>Editar mensaje</h1>
    <form action="{{ route('mensajes.update', $mensaje->id) }}" method="POST">
        @csrf
        @method('PUT')
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario" value="{{ $mensaje->usuario }}" required>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required>{{ $mensaje->mensaje }}</textarea>

        <button type="submit">Actualizar</button>
    </form>
@endsection
