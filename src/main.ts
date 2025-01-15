import { registerLocaleData } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import en from '@angular/common/locales/en';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
registerLocaleData(en);

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    provideNzI18n(en_US),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      NzNotificationModule,
      BrowserAnimationsModule,
      CanvasJSAngularChartsModule
    ),
  ],
}).catch(err => console.error(err));
