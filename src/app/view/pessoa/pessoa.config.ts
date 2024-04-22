import { ApplicationConfig } from "@angular/core";
import { CadastroService } from "./cadastro/cadastro.service";
import { provideHttpClient } from '@angular/common/http';

export const pessoaConfig: ApplicationConfig = {
    providers: [
      CadastroService,
      provideHttpClient()
    ]
  };