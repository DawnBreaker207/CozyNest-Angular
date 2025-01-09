import { CategoryService } from '@/app/core/services/category.service';
import { NotificationsService } from '@/app/core/services/notifications.service';
import { ProductsService } from '@/app/core/services/products.service';
import { Category } from '@/app/shared/types/category';
import { Products } from '@/app/shared/types/products';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddProductComponent implements OnInit {
  categories$: Observable<Category[]> = new Observable();
  formProduct!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductsService,
    private notification: NotificationsService
  ) {}
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAll$;
    this.formProduct = this.fb.group({
      originId: [''],
      name: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      brand: [''],
      description: [''],
      price: [0, [Validators.required, Validators.min(2)]],
      SKU: ['', [Validators.required]],
    });
  }
  submitForm = () => {
    this.productService
      .create$(this.formProduct.value as Products)
      .subscribe(() => {
        this.notification.createNotification(
          'success',
          'Create Product Success',
          'Product created successfully'
        );
      });
  };
}
