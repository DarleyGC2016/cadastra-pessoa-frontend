import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../../../shared/model/pessoa.model';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  url = environment.api
  constructor(private httpClient: HttpClient) { }

  verificaConexao(): Observable<any>{
    return this.httpClient.get<string>(`${this.url}/cadastro/existe`).pipe(
      catchError((error) =>{
          if (error.status === 0){
            return of({"error":"error"})
          } else {
            return of([])
          }           
        }), 
      );
  }

  salvarPessoa(pessoa: any): Observable<Pessoa>{
    return this.httpClient.post<any>("http://localhost:8080/cadastro/new", pessoa);
  }
}
