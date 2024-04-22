import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailComponent } from './email.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailComponent, NoopAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
