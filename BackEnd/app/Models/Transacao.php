<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transacao extends Model
{
    protected $table = 'transacoes'; // Nome correto da tabela
    protected $fillable = ['tipo', 'valor', 'categoria'];
}
