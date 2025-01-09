import { environment } from '@/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../../shared/types/user';
import { ApiRes } from '../../shared/types/api';

const BASE_PATH = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(input: User): Observable<User> {
    return this.http
      .post<ApiRes<User>>(`${BASE_PATH}/auth/register`, input)
      .pipe(
        map(user => user.res),
        catchError(() => of())
      );
  }
  login(input: User): Observable<User> {
    return this.http.post<ApiRes<User>>(`${BASE_PATH}/auth/login`, input).pipe(
      map(user => user.res),
      catchError(() => of())
    );
  }
}
