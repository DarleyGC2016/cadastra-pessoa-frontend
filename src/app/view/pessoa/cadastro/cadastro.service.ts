import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../../../shared/model/pessoa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  url = environment.api
  constructor(private httpClient: HttpClient) { }

  salvarPessoa(pessoa: any): Observable<Pessoa>{
    return this.httpClient.post<any>("http://localhost:8080/cadastro/new", pessoa);
  }
}
