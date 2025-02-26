<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVistoToAjbpMensajesTable extends Migration
{
    public function up()
    {
        Schema::table('ajbp_mensajes', function (Blueprint $table) {
            $table->boolean('visto')->nullable();
        });
    }

    public function down()
    {
        Schema::table('ajbp_mensajes', function (Blueprint $table) {
            $table->dropColumn('visto');
        });
    }
}
