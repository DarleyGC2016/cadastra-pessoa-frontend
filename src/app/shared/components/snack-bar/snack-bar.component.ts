import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.css'
})
export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
