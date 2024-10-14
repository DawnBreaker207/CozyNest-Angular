import { ProductsService } from '@/app/common/services/products.service';
import { Products } from '@/app/types/products';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListProductComponent implements OnInit {
  products$ = new MatTableDataSource<Products>();

  getProduct(): void {
    this.service.getAll$
      .pipe(map(products => products ?? []))
      .subscribe(products => {
        console.log(products);

        this.products$.data = products;
      });
  }

  ngOnInit(): void {
    this.getProduct();
  }
  constructor(private service: ProductsService) {}
  displayColumn: string[] = [
    'position',
    'name',
    'thumbnail',
    'brand',
    'price',
    'description',
    'options',
  ];

  onDelete(id: string) {
    return this.service.delete$(id);
  }
}
