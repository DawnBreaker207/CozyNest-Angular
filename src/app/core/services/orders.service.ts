import { ApiRes } from '@/app/shared/types/api';
import { Order } from '@/app/shared/types/order';
import { environment } from '@/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  BASE_PATH: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAll$: Observable<Order[]> = this.http
    .get<ApiRes<Order[]>>(`${this.BASE_PATH}/orders`)
    .pipe(
      map(order => order.res),
      catchError(() => of([]))
    );
}
