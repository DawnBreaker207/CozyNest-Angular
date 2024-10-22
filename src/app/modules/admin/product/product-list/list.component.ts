import { ProductsService } from '@/app/shared/common/services/products.service';
import { Products } from '@/app/shared/types/products';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListProductComponent implements OnInit {
  selectedProductId: string | number | undefined;
  products$: Observable<Products[]> = new Observable();
  ngOnInit(): void {
    this.products$ = this.service.getAll$;
  }
  cancel(): void {
    console.log('Cancel');
  }

  confirm(): void {
    if (this.selectedProductId) {
      this.service.delete$(this.selectedProductId).subscribe(() => {
        this.service.getAll$;
      });
    }
    console.log('Confirm');
  }
  constructor(private service: ProductsService) {}
  onDelete(id: string | number | undefined) {
    this.selectedProductId = id;
    return () => of(true);
  }
}
