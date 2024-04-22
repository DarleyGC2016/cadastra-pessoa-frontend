import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponent } from './snack-bar.component';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('SnackBarComponent', () => {
  let component: SnackBarComponent;
  let fixture: ComponentFixture<SnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackBarComponent, MatSnackBarModule ],
      providers: [MatSnackBar, {
        provide: MAT_SNACK_BAR_DATA, useValue: {}}]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
