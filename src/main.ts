import { registerLocaleData } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import en from '@angular/common/locales/en';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NZ_I18N, en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

registerLocaleData(en);

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US },
    provideNzI18n(en_US),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(BrowserModule, FormsModule, NzNotificationModule),
  ],
}).catch(err => console.error(err));
