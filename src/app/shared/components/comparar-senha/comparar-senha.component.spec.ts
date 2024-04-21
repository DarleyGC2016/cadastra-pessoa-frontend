import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararSenhaComponent } from './comparar-senha.component';

describe('CompararSenhaComponent', () => {
  let component: CompararSenhaComponent;
  let fixture: ComponentFixture<CompararSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompararSenhaComponent]
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
