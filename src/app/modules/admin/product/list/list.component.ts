import { ProductsService } from '@/app/core/services/products.service';
import { Products } from '@/app/shared/types/products';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { NzPopconfirmDirective } from 'ng-zorro-antd/popconfirm';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import {
  NzTableComponent,
  NzTheadComponent,
  NzTrDirective,
  NzTableCellDirective,
  NzThMeasureDirective,
  NzTbodyComponent,
} from 'ng-zorro-antd/table';
import { NgIf, NgFor, AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone: true,
  imports: [
    NgIf,
    NzTableComponent,
    NzTheadComponent,
    NzTrDirective,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTbodyComponent,
    NgFor,
    NzDividerComponent,
    NzButtonComponent,
    ɵNzTransitionPatchDirective,
    RouterLinkActive,
    RouterLink,
    NzWaveDirective,
    NzPopconfirmDirective,
    AsyncPipe,
    CurrencyPipe,
  ],
})
export class ListProductComponent implements OnInit, OnDestroy {
  products$: Observable<Products[]> = new Observable();
  private unsubscribe = new Subject<void>();
  ngOnInit(): void {
    this.products$ = this.service.getAll$;

    this.products$.pipe(takeUntil(this.unsubscribe));
  }
  cancel(): void {
    console.log('Cancel');
  }

  onDelete(id: string | number | undefined): void {
    console.log(id);

    if (id) {
      this.service
        .delete$(id)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(() => {
          this.products$ = this.service.getAll$;
        });
    }
  }
  constructor(private service: ProductsService) {}
  onConfirm(): Observable<boolean> {
    return new Observable(() => {
      true;
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
