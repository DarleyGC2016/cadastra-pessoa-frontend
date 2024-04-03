import { ApplicationConfig } from "@angular/core";
import { MyErrorStateMatcher } from "./cadastro/my.error.state.matcher";
import { CadastroService } from "./cadastro/cadastro.service";
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
      MyErrorStateMatcher,
      CadastroService,
      provideHttpClient()
    ]
  };