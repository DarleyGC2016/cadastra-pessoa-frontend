import { Component, input, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [MatFormFieldModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  @Input()
  placeholder:string = '';
  @Input()
  label:string = '';
  @Input()
  email = new FormControl();
  @Input({alias:"erroEmailVazio"})
  erroEmailVazio: string = '';
  @Input({alias:"erroEmailValido"})
  erroEmailValido: string = '';

  errorMessage = '';

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    
    if (this.email.hasError('required')) {
      this.errorMessage = this.erroEmailVazio;
    } else if (this.email.hasError('email')) {
      this.errorMessage = this.erroEmailValido;
    } else {
      this.errorMessage = '';
    }
  }
}

