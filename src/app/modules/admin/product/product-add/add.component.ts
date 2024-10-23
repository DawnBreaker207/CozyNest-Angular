import { CategoryService } from '@/app/shared/common/services/category.service';
import { NotificationsService } from '@/app/shared/common/services/notifications.service';
import { ProductsService } from '@/app/shared/common/services/products.service';
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
    const productData = this.formProduct.value as Products;
    console.log(productData);

    this.productService.create$(productData).subscribe(() => {
      this.notification.createNotification(
        'success',
        'Create Product Success',
        'Product created successfully'
      );
    });
  };
}
