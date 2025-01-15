import { ApiRes, Query } from '@/app/shared/types/api';
import { Order } from '@/app/shared/types/order';
import { environment } from '@/environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  BASE_PATH: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAll$(input?: Partial<Query>): Observable<Order[]> {
    const params = input
      ? new HttpParams({ fromObject: input })
      : new HttpParams();
    return this.http
      .get<ApiRes<Order[]>>(`${this.BASE_PATH}/orders`, { params })
      .pipe(
        map(order => order.res || []),
        catchError(() => of([]))
      );
  }
}
