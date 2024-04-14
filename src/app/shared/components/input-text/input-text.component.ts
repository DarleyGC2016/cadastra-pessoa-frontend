import { Component, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';

@Component({
  selector: 'comum-input-text',
  standalone: true,
  imports: [MatFormFieldModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Input()
  placeholder:string = '';
  @Input()
  label:string = '';
  @Input()
  texto = new FormControl();
  @Input({alias:"errorTextEmpty"})
  erroTextoVazio: string = '';
  @Input({alias:"errorTextValid"})
  erroTextoValido: string = '';
  @Input({alias: 'min'})
  limiteMin: number = 0;
  @Input({alias: 'max'})
  limiteMax: number = 0;
  errorMessage: string = '';

  constructor() {
    merge(this.texto.statusChanges, this.texto.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.texto.hasError('required')) {
      this.errorMessage = this.erroTextoVazio;
    } else if (this.texto.hasError('minlength')) {
      this.errorMessage = this.erroTextoValido;
    } else {
      this.errorMessage = '';
    }
  }
}
