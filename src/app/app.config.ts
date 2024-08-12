import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
    withInMemoryScrolling({
      scrollPositionRestoration:'top'
    })
  ), provideClientHydration(),
  importProvidersFrom(HttpClientModule)
]
};
