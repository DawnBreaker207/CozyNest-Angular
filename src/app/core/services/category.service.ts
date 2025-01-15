import { environment } from '@/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Category } from '../../shared/types/category';
import { ApiRes } from '../../shared/types/api';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  BASE_PATH = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getAll$: Observable<Category[]> = this.http
    .get<ApiRes<Category[]>>(`${this.BASE_PATH}/categories`)
    .pipe(
      map(category => category.res),
      catchError(() => of([]))
    );

  getOne$(id: string): Observable<Category> {
    return this.http
      .get<ApiRes<Category>>(`${this.BASE_PATH}/categories/${id}`)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }

  create$(inputData: Partial<Category>): Observable<Category> {
    return this.http
      .post<ApiRes<Category>>(`${this.BASE_PATH}/categories`, inputData)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }

  update$(id: string, inputData: Partial<Category>): Observable<Category> {
    return this.http
      .put<ApiRes<Category>>(`${this.BASE_PATH}/categories/${id}`, inputData)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }

  delete$(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.BASE_PATH}/categories/${id}`)
      .pipe(catchError(() => of()));
  }

  hide$(id: string, input: Partial<Category>): Observable<void> {
    return this.http
      .patch<void>(`${this.BASE_PATH}/categories/${id}`, input)
      .pipe(catchError(() => of()));
  }
}
