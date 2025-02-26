@extends('layouts.app')

@section('content')
    <h1>Mensaje Detalle</h1>
    <p><strong>Usuario:</strong> {{ $mensaje->usuario }}</p>
    <p><strong>Mensaje:</strong> {{ $mensaje->mensaje }}</p>
    <p><strong>Fecha de creación:</strong> {{ $mensaje->created_at }}</p>
    <p><strong>Fecha de última modificación:</strong> {{ $mensaje->updated_at }}</p>
    <p><strong>ID:</strong> {{ $mensaje->id }}</p>
    <p><strong>Creado por:</strong> {{ $mensaje->createdBy }}</p>
    <a href="{{ route('mensajes.index') }}">Volver al tablón</a>
@endsection
