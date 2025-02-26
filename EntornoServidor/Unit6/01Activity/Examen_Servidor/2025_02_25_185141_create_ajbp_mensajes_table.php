<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAjbpMensajesTable extends Migration
{
    public function up()
    {
        Schema::create('ajbp_mensajes', function (Blueprint $table) {
            $table->id();
            $table->string('usuario');
            $table->text('mensaje');
            $table->timestamps();
            $table->string('createdBy')->default('Creado por Austin Jenner Beltran Panghulan');
        });
    }

    public function down()
    {
        Schema::dropIfExists('ajbp_mensajes');
    }
}
