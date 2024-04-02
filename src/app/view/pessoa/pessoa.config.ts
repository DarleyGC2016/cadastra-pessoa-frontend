import { ApplicationConfig } from "@angular/core";
import { MyErrorStateMatcher } from "./cadastro/my.error.state.matcher";
import { CadastroService } from "./cadastro/cadastro.service";

export const appConfig: ApplicationConfig = {
    providers: [
      MyErrorStateMatcher,
      CadastroService
    ]
  };