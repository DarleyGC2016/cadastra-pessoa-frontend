import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaComponent } from './senha.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SenhaComponent', () => {
  let component: SenhaComponent;
  let fixture: ComponentFixture<SenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenhaComponent, NoopAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
