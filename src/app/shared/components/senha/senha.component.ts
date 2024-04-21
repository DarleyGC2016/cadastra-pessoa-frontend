import { Component, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';

@Component({
  selector: 'comum-senha',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './senha.component.html',
  styleUrl: './senha.component.css'
})
export class SenhaComponent {
  @Input()
  placeholder:string = '';
  @Input()
  label:string = '';
  @Input()
  senha = new FormControl();
  @Input({alias:"errorPasswordEmpty"})
  erroSenhaVazio: string = '';
  @Input({alias:"erroPasswordValid"})
  erroSenhaValido: string = '';
  @Input({alias:"campoValidacao"})
  campo: string = '';
  @Input({alias: 'min'})
  limiteMin: number = 0;
  @Input({alias: 'max'})
  limiteMax: number = 0;

  errorMessage = '';

  constructor() {
    merge(this.senha.statusChanges, this.senha.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.senha.hasError('required')) {
      this.errorMessage = this.erroSenhaVazio;
    } else if (this.senha.hasError('minlength')) {
      this.errorMessage = this.erroSenhaValido;
    } else {
      this.errorMessage = '';
    }
  }
}
