import { ProductsService } from '@/app/shared/common/services/products.service';
import { Products } from '@/app/shared/types/products';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListProductComponent implements OnInit, OnDestroy {
  selectedProductId: string | number | undefined;
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
