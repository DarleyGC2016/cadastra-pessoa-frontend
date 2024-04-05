import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MyErrorStateMatcher } from './my.error.state.matcher';
import {MatCardModule} from '@angular/material/card';
import { catchError, Observable, of } from 'rxjs';

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

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, 
            MatFormFieldModule,
            MatInputModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatButtonModule,
            MatCardModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})


export class CadastroComponent implements OnInit{
  pessoaForm: any;
  pessoas:Pessoa[] = []
  errado:boolean = false ;
  mensagem: string = '';
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder,
              private service: CadastroService){
                this.verificarServidor();          
  }

  ngOnInit(): void {
      this.pessoaForm = this.fb.group({
        nome: ['', Validators.required],
        email: ['', Validators.required],
        senha: ['', Validators.required],
        confirmarSenha: ['', Validators.required]
      });
  }

  verificarServidor():void{
    this.service.verificaConexao()
    .pipe(
            catchError(error => error)
          ).subscribe((obj)=> {
            this.errado = true;
            this.mensagem = obj
          });
  }

  enviarDados():void{
    
    this.service.salvarPessoa(this.pessoaForm.value).subscribe(obj=> this.errado = false);
    window.location.reload();
  }

}
