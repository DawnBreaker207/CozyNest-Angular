import { environment } from '@/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../../shared/types/user';
import { ApiRes } from '../../shared/types/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_PATH = environment.apiUrl;
  constructor(private http: HttpClient) {}
  register$(input: Partial<User>): Observable<User> {
    return this.http
      .post<ApiRes<User>>(`${this.BASE_PATH}/auth/register`, input)
      .pipe(
        map(user => user.res),
        catchError(() => of())
      );
  }
  login$(input: Partial<User>): Observable<User> {
    return this.http
      .post<ApiRes<User>>(`${this.BASE_PATH}/auth/login`, input)
      .pipe(
        map(user => user.res),
        catchError(() => of())
      );
  }
  forgot$(input: Partial<User>) {
    return this.http
      .post<ApiRes<User>>(`${this.BASE_PATH}/users/forgotPassword`, input)
      .pipe(
        map(user => user.res),
        catchError(() => of())
      );
  }

  logout$() {}
}
