import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  FormBuilder
} from '@angular/forms';

import { CadastroService } from './cadastro.service';
import { EmailComponent } from '../../../shared/components/email/email.component';
import { CompararSenhaComponent } from '../../../shared/components/comparar-senha/comparar-senha.component';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
            InputTextComponent,
            EmailComponent,
            CompararSenhaComponent            
          ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  encapsulation: ViewEncapsulation.None
})


export class CadastroComponent implements OnInit{

  pessoaForm: any; 
  mensagem: string = '';
  erroConexao:boolean = false;

  nomeControl:FormControl = new FormControl('',[Validators.required]);
  emailControl:FormControl = new FormControl('',[Validators.required, Validators.email]);
  senhaControl:FormControl = new FormControl('',[Validators.required]);
  confirmaSenhaControl:FormControl = new FormControl('',[Validators.required]);

  constructor(private fb: FormBuilder,
              private service: CadastroService,
              private _snackBar: MatSnackBar){
  }

  ngOnInit(): void {
      this.pessoaForm = this.fb.group({
        nome: this.nomeControl,
        email: this.emailControl,
        senha: this.senhaControl,
        confirmarSenha: this.confirmaSenhaControl
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
    .subscribe(obj => this.apresentaSnack(obj));
  }

  openSnack(descricao:string, estilo:string):void{
    this.mensagem = descricao;
    this._snackBar.open(this.mensagem,'',{
      panelClass:[estilo],
      duration: 5000
    });
  }
   
  apresentaSnack(obj: any): Observable<any>{
      if (obj.mensagem.includes('Erro')) {
        this.openSnack(obj.mensagem,'error');                     
      } else if (obj.mensagem.includes('Sucesso')){
          this.openSnack(obj.mensagem,'success');                     
      } else {
        this.openSnack(obj.mensagem,'info');
      }
      return of([]);
    }
}
