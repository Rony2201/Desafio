<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('transacoes', function (Blueprint $table) {
            $table->id();
            $table->enum('tipo', ['receita', 'despesa']);
            $table->decimal('valor', 10, 2);
            $table->string('categoria');
            $table->timestamps();
        });
}

    public function down(): void
    {
        Schema::dropIfExists('transacaos');
    }
};
