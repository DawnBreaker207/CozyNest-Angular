import { ProductsService } from '@/app/shared/common/services/products.service';
import { Products } from '@/app/shared/types/products';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListProductComponent implements OnInit {
  products$: Observable<Products[]> = new Observable();
  ngOnInit(): void {
    this.products$ = this.service.getAll$;
  }
  constructor(private service: ProductsService) {}
  onDelete(id: string | number | undefined) {
    this.service.delete$(id).subscribe(() => {
      this.service.getAll$;
    });
  }
}
