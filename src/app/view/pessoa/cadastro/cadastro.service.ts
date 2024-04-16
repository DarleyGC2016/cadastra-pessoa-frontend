import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../../../shared/model/pessoa.model';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private readonly url = environment.api
  constructor(private httpClient: HttpClient) { }

  salvarPessoa(pessoa: any): Observable<Pessoa>{
    return this.httpClient.post<any>(`${this.url}/new`, pessoa)
                          .pipe(
                            first(),
                            tap(pessoaNova => console.log("tap pessoa: ",pessoaNova))
                          );
  }
}
