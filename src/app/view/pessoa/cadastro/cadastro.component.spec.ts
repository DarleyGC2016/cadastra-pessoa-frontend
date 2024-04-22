import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CadastroComponent } from './cadastro.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroService } from './cadastro.service';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroComponent, HttpClientTestingModule, NoopAnimationsModule],
      providers:[CadastroService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
