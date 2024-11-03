export interface Transacao {
    id: number | null; 
    valor: number; 
    tipo: 'Receita' | 'Despesa'; 
    categoria: string; 
    filter: string;
  }
