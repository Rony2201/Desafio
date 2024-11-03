import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private apiUrl = 'http://127.0.0.1:8000/api/transacoes';

  constructor(private http: HttpClient) { }

  getTransacao(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addTransacao(transacao: any): Observable<any> {
    return this.http.post(this.apiUrl, transacao);
  } 

  updateTransacao(id: number, transacao: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, transacao);
  }
  deleteTransacao(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
