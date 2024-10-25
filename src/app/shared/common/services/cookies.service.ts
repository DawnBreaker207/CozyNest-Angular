import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor(private cookieService: CookieService) {}
  public getCookie(cookieName: string): string | null {
    return this.cookieService.get(cookieName);
  }
  public setCookie(cookieName: string, value: string, days: number): void {
    this.cookieService.set(cookieName, value, days);
  }

  public deleteCookie(cookieName: string): void {
    this.cookieService.delete(cookieName);
  }
}
