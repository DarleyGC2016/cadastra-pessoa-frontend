import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MyErrorStateMatcher } from './my.error.state.matcher';
import {MatCardModule} from '@angular/material/card';
import { catchError, Observable, of, tap } from 'rxjs';

import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup
} from '@angular/forms';

import { CadastroService } from './cadastro.service';
import { Pessoa } from '../../../shared/model/pessoa.model';
import { EmailComponent } from '../../../shared/componets/email/email.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, 
            MatFormFieldModule,
            MatInputModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatButtonModule,
            MatCardModule,
            EmailComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})


export class CadastroComponent implements OnInit{
  pessoaForm: any; 
  mensagem: string = '';
  pessoa:any;
  matcher = new MyErrorStateMatcher();
  cadastrado: boolean = false;
  emailControl:FormControl = new FormControl('',[Validators.required, Validators.email])
  erroConexao:boolean = false;
  listaErro: any[] = []

  constructor(private fb: FormBuilder,
              private service: CadastroService){
                        
  }

  ngOnInit(): void {
      this.pessoaForm = this.fb.group({
        nome: ['', Validators.required],
        email: this.emailControl,
        senha: ['', Validators.required],
        confirmarSenha: ['', Validators.required]
      });
      this.verificarServidor();  
  }

  verificarServidor():void{
    this.service.salvarPessoa(this.pessoaForm.valu)
    .pipe(
            catchError(error => {
              this.erroConexao = error.status === 0? true : false;    
              return of([]);
            })
          ).subscribe(obj=>obj);
  }

  enviarDados():void{
    
    this.service
    .salvarPessoa(this.pessoaForm.value)
    .subscribe(obj=> { 
                  if (obj.mensagem.descricao.includes('Erro')) {
                    this.mensagem = obj.mensagem.descricao;
                    this.cadastrado = true;    
                  } else {
                      this.mensagem = obj.mensagem.descricao;
                      this.cadastrado = true;    
                  }
                  return of([]);
                });
    
    // window.location.reload();
  }

}
