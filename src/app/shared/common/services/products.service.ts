import { environment } from '@/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Products } from '../../types/products';

export interface ApiRes<T> {
  res: T;
}
const BASE_PATH = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAll$: Observable<Products[]> = this.http
    .get<ApiRes<Products[]>>(`${BASE_PATH}/products`)
    .pipe(
      map(products => products.res),
      catchError(() => of([]))
    );
  delete$(id: string | number | undefined): Observable<void> {
    return this.http
      .delete<void>(`${BASE_PATH}/products/${id}`)
      .pipe(catchError(() => of()));
  }
  getOne$(id: string): Observable<Products> {
    return this.http.get<ApiRes<Products>>(`${BASE_PATH}/products/${id}`).pipe(
      map(products => products.res),
      catchError(() => of())
    );
  }
  create$(inputData: Products): Observable<Products> {
    return this.http
      .post<ApiRes<Products>>(`${BASE_PATH}/products`, inputData)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }
  update$(id: string, inputData: Products): Observable<Products> {
    return this.http
      .put<ApiRes<Products>>(`${BASE_PATH}/products/${id}`, inputData)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }
}
