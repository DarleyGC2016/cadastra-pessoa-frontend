import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SenhaComponent } from '../senha/senha.component';

@Component({
  selector: 'comum-comparar-senha',
  standalone: true,
  imports: [MatFormFieldModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
            SenhaComponent],
  templateUrl: './comparar-senha.component.html',
  styleUrl: './comparar-senha.component.css'
})
export class CompararSenhaComponent {
  @Input({alias:"senha"})
  senhaControl = new FormControl();
  @Input({alias:"confirmarSenha"})
  confirmaSenhaControl = new FormControl();
  constructor(){

  }
}
