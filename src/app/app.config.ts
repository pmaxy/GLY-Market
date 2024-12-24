import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IonicModule } from '@ionic/angular/ionic-module';
import { provideHttpClient } from '@angular/common/http';
import { ApiConfiguration } from './services/api-configuration';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideToastr({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true
    }),
    {provide: ApiConfiguration, useValue: { rootUrl: 'http://localhost:8089'}}
  ]
}



