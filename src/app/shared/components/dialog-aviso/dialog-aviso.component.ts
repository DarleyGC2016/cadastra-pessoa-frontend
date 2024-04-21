import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-aviso',
  standalone: true,
  imports: [
            MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            MatDialogClose],
  templateUrl: './dialog-aviso.component.html',
  styleUrl: './dialog-aviso.component.css'
})
export class DialogAvisoComponent {

  constructor(public dialogRef: MatDialogRef<DialogAvisoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string){

  }

  onNoClick(){}
}
