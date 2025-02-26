<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mensaje extends Model
{
    use HasFactory;

    protected $table = 'ajbp_mensajes'; // Especifica la tabla
    protected $fillable = ['usuario', 'mensaje']; // Campos rellenables
    public $timestamps = true;
    public $createdBy = 'Creado por Austin Jenner Beltran PAnghulan'; // Atributo creado
}
