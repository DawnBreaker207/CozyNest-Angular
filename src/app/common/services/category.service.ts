import { Category } from '@/app/types/category';
import { environment } from '@/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiRes } from './products.service';

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
}
