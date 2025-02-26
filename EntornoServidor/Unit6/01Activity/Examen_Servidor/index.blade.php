@extends('layouts.app')

@section('content')
    <h1>Tablón de Mensajes</h1>
    <table>
        <thead>
        <tr>
            <th>Usuario</th>
            <th>Mensaje</th>
            <th>Fecha de última modificación</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        @foreach ($mensajes as $mensaje)
            <tr>
                <td>{{ $mensaje->usuario }}</td>
                <td>{{ $mensaje->mensaje }}</td>
                <td>{{ $mensaje->updated_at }}</td>
                <td>
                    <a href="{{ route('mensajes.show', $mensaje->id) }}">Ver</a>
                    <a href="{{ route('mensajes.edit', $mensaje->id) }}">Editar</a>
                    <form action="{{ route('mensajes.destroy', $mensaje->id) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit">Eliminar</button>
                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    <a href="{{ route('mensajes.create') }}">Crear mensaje</a>
@endsection
