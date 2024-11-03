import { Component, OnInit } from '@angular/core';
import { Transacao  } from 'src/app/transacao';
import { NgModule } from '@angular/core';
import { TransacaoService } from 'src/app/transacao.service';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css']
})
export class TransacaoComponent implements OnInit {
  transacoes: any[] = [];
  filtrarTransacoes: Transacao[] = [];
  transacao: Transacao = {
    id: null!,
    valor: 0,
    tipo: 'Receita',
    categoria: '',
    filter: ''
  };
  tipoSelecionado: string = '';
  procurar: string = '';
  
  constructor(private transacaoService: TransacaoService) {}

  TransacaoService: any;

  ngOnInit(): void {
    this.loadTransacoes();
  }

  loadTransacoes() {
    this.transacaoService.getTransacao().subscribe((data: Transacao[]) => {
      console.log(data); // Adicione isso para verificar a estrutura
      this.transacoes = data;
      this.filtrarTransacoes = data; // Inicializa a lista filtrada
    });
  }

  saveTransacoes() {
    this.transacaoService.addTransacao(this.transacao).subscribe(() => {
      this.loadTransacoes();
      this.transacao = {
        id: null,
        valor: 0,
        tipo: 'Receita',
        categoria: '',
        filter: ''
      };
    })
  }

  updateTransacoes() {
    if (this.transacao.id) {
      this.transacaoService.updateTransacao(this.transacao.id, this.transacao).subscribe(() => {
        this.loadTransacoes();
        this.resetForm();
      });
    }
  }
  editTransacao(trans: any) {
    this.transacao = { ...trans }; // Preenche o formulário com a transação selecionada
  }
  
  filtrarTransacao(tipo: string = '') {
    this.tipoSelecionado = tipo;
    let filtered = this.transacoes;
    
    // Filtrar por tipo
    if (this.tipoSelecionado) {
      filtered = filtered.filter(transacao => transacao.tipo === this.tipoSelecionado);
    }
    
    // Filtrar pelo termo de pesquisa
    if (this.procurar) {
      filtered = filtered.filter(transacao => 
        transacao.tipo.toLowerCase().includes(this.procurar.toLowerCase())
      );
    }
    
    this.filtrarTransacoes = filtered;
  }


  deleteTransacao(id: number | null ) {
    if(id !== null) {
      this.transacaoService.deleteTransacao(id).subscribe(() => {
        this.loadTransacoes();
      });
    }
  }

  resetForm() {
    this.transacao = {
      id: null,
      valor: 0,
      tipo: 'Receita',
      categoria: '',
      filter: ''
    }; 
    this.filtrarTransacoes = this.transacoes; 
  }
}

