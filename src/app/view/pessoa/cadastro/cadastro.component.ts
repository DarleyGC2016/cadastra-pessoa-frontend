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
  public pessoaForm: any;
  errado:boolean = true ;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder,
              private service: CadastroService){
                
  }

  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    })
    this.verificarServidor();
  }

  verificarServidor():void{
    this.service.salvarPessoa(this.pessoaForm.value)
    .pipe(
            catchError(error =>{              
              this.errado = error.ok
               return of([])  
            })
          ).subscribe((obj)=>obj);
  }

  enviarDados():void{
    
    this.service.salvarPessoa(this.pessoaForm.value).subscribe(obj=> obj);
    window.location.reload();
  }

}
