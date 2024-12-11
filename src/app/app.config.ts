import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IonicModule } from '@ionic/angular/ionic-module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
