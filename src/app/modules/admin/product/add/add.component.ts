import { CategoryService } from '@/app/core/services/category.service';
import { NotificationsService } from '@/app/shared/common/services/notifications.service';
import { ProductsService } from '@/app/core/services/products.service';
import { Category } from '@/app/shared/types/category';
import { Products } from '@/app/shared/types/products';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { NzSelectComponent, NzOptionComponent } from 'ng-zorro-antd/select';
import {
  NzInputDirective,
  NzTextareaCountComponent,
} from 'ng-zorro-antd/input';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import {
  NzFormDirective,
  NzFormItemComponent,
  NzFormLabelComponent,
  NzFormControlComponent,
} from 'ng-zorro-antd/form';

@Component({
  selector: 'app-product-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormDirective,
    NzRowDirective,
    NzFormItemComponent,
    NzColDirective,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzInputDirective,
    NzSelectComponent,
    NgIf,
    NgFor,
    NzOptionComponent,
    NzTextareaCountComponent,
    NzButtonComponent,
    NzWaveDirective,
    ɵNzTransitionPatchDirective,
    AsyncPipe,
  ],
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
    this.categories$ = this.categoryService.getAll$();
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
