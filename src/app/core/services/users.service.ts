import { ApiRes, Query } from '@/app/shared/types/api';
import { User } from '@/app/shared/types/user';
import { environment } from '@/environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private BASE_PATH = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getAll$(input?: Partial<Query>): Observable<User[]> {
    const params = input
      ? new HttpParams({ fromObject: input })
      : new HttpParams();
    return this.http
      .get<ApiRes<User[]>>(`${this.BASE_PATH}/users`, { params })
      .pipe(
        map(user => user.res || []),
        catchError(() => of([]))
      );
  }
  getId$(id: string): Observable<User> {
    return this.http.get<ApiRes<User>>(`${this.BASE_PATH}/users/${id}`).pipe(
      map(user => user.res),
      catchError(() => of())
    );
  }
  update$(input?: Partial<User>): Observable<User> {
    return this.http
      .patch<ApiRes<User>>(`${this.BASE_PATH}/${input?._id}`, input)
      .pipe(
        map(user => user.res),
        catchError(() => of())
      );
  }
}
