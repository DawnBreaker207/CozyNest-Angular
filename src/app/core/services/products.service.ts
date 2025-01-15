import { environment } from '@/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Products } from '../../shared/types/products';
import { ApiRes } from '../../shared/types/api';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private BASE_PATH = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getAll$: Observable<Products[]> = this.http
    .get<ApiRes<Products[]>>(`${this.BASE_PATH}/products`)
    .pipe(
      map(products => products.res || []),
      catchError(() => of([]))
    );

  getOne$(id: string): Observable<Products> {
    return this.http
      .get<ApiRes<Products>>(`${this.BASE_PATH}/products/${id}`)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }
  create$(inputData: Products): Observable<Products> {
    return this.http
      .post<ApiRes<Products>>(`${this.BASE_PATH}/products`, inputData)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }
  update$(id: string, inputData: Products): Observable<Products> {
    return this.http
      .put<ApiRes<Products>>(`${this.BASE_PATH}/products/${id}`, inputData)
      .pipe(
        map(products => products.res),
        catchError(() => of())
      );
  }
  delete$(id: string | number | undefined): Observable<void> {
    return this.http
      .delete<void>(`${this.BASE_PATH}/products/${id}`)
      .pipe(catchError(() => of()));
  }
  hide$(id: string, input: Partial<Products>): Observable<void> {
    return this.http
      .patch<void>(`${this.BASE_PATH}/products/${id}`, input)
      .pipe(catchError(() => of()));
  }
}
