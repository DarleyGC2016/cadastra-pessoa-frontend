import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

let http = provideHttpClient(withFetch());

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
      provideClientHydration(),
      provideAnimationsAsync(),     
      http,
     {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue:{hasBackdrop: false}} 
    ]
};
