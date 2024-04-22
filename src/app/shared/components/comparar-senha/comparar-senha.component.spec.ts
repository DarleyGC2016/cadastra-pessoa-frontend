import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararSenhaComponent } from './comparar-senha.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CompararSenhaComponent', () => {
  let component: CompararSenhaComponent;
  let fixture: ComponentFixture<CompararSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompararSenhaComponent, NoopAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompararSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
