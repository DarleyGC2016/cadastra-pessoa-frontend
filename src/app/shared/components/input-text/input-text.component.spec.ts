import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextComponent, NoopAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
