import { CategoryService } from '@/app/core/services/category.service';
import { NotificationsService } from '@/app/shared/common/services/notifications.service';
import { Category } from '@/app/shared/types/category';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddCategoryComponent implements OnInit {
  formCategory!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: CategoryService,
    private notification: NotificationsService
  ) {}
  ngOnInit() {
    this.formCategory = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }
  submitForm = () => {
    this.service.create$(this.formCategory.value as Category).subscribe(() => {
      this.notification.createNotification(
        'success',
        'Create Category Success',
        'Category created successfully'
      );
    });
  };
}
