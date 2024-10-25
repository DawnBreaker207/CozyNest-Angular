import { environment } from '@/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Category } from '../../types/category';
import { ApiRes } from '../../types/api';

const BASE_PATH = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  getAll$: Observable<Category[]> = this.http
    .get<ApiRes<Category[]>>(`${BASE_PATH}/categories`)
    .pipe(
      map(category => category.res),
      catchError(() => of([]))
    );
  delete$(id: string): Observable<void> {
    return this.http
      .delete<void>(`${BASE_PATH}/categories/${id}`)
      .pipe(catchError(() => of()));
  }
  getOne$(id: string): Observable<Category> {
    return this.http
      .get<ApiRes<Category>>(`${BASE_PATH}/categories/${id}`)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }
  create$(inputData: Category): Observable<Category> {
    return this.http
      .post<ApiRes<Category>>(`${BASE_PATH}/categories`, inputData)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }
  update$(id: string, inputData: Category): Observable<Category> {
    return this.http
      .put<ApiRes<Category>>(`${BASE_PATH}/categories/${id}`, inputData)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }
}
