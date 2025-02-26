<?php

namespace App\Http\Controllers;

use App\Models\Mensaje;
use Illuminate\Http\Request;

class MensajeController extends Controller
{
    public function index()
    {
        $mensajes = Mensaje::all();
        return view('mensajes.index', ['mensajes' => $mensajes]);
    }

    public function create()
    {
        return view('mensajes.create');
    }

    public function store(Request $request)
    {
        $mensaje = Mensaje::create($request->all());
        return redirect()->route('mensajes.index');
    }

    public function show($id)
    {
        $mensaje = Mensaje::find($id);
        return view('mensajes.show', compact('mensaje'));
    }

    public function edit($id)
    {
        $mensaje = Mensaje::find($id);
        return view('mensajes.edit', compact('mensaje'));
    }

    public function update(Request $request, $id)
    {
        $mensaje = Mensaje::find($id);
        $mensaje->update($request->all());
        return redirect()->route('mensajes.index');
    }

    public function destroy($id)
    {
        $mensaje = Mensaje::find($id);
        $mensaje->delete();
        return redirect()->route('mensajes.index');
    }

    public function home()
    {
        return view('mensajes.home');
    }
}
