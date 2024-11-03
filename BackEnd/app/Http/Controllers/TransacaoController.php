<?php

namespace App\Http\Controllers;

use App\Models\Transacao;
use Illuminate\Http\Request;

class TransacaoController extends Controller
{
    public function index(Request $request)
    {
        $tipo = $request->query('tipo');
        $transacoes = $tipo ? Transacao::where('tipo', $tipo)->get() : Transacao::all();
        return response()->json($transacoes);
    
        // Verifica se o parâmetro 'tipo' está presente e se é válido
        $tipo = $request->query('tipo');

        if ($tipo && in_array($tipo, ['receita', 'despesa'])) {
            $transacoes = Transacao::where('tipo', $tipo)->get();
        } else {
            // Se não houver filtro, retorna todas as transações
            $transacoes = Transacao::all();
        }

        return response()->json($transacoes);
}


    public function store(Request $request)
    {
        $request->validate([
            'tipo' => 'required|in:receita,despesa',
            'valor' => 'required|numeric',
            'categoria' => 'required|string',
        ]);

        $valor = $request->tipo === 'despesa' ? -abs($request->valor) : abs($request->valor);

        $transacao = Transacao::create([
            'tipo' => $request->tipo,
            'valor' => $valor,
            'categoria' => $request->categoria,
        ]);

        return response()->json($transacao, 201);
    }

    public function show($id)
    {
        $transacao = Transacao::findOrFail($id);
        return response()->json($transacao);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'tipo' => 'required|in:receita,despesa',
            'valor' => 'required|numeric',
            'categoria' => 'required|string',
        ]);

        $transacao = Transacao::findOrFail($id);
        $valor = $request->tipo === 'despesa' ? -abs($request->valor) : abs($request->valor);

        $transacao->update([
            'tipo' => $request->tipo,
            'valor' => $valor,
            'categoria' => $request->categoria,
        ]);

        return response()->json($transacao);
    }

    public function destroy($id)
    {
        $transacao = Transacao::findOrFail($id);
        $transacao->delete();

        return response()->json(null, 204);
    }
}
