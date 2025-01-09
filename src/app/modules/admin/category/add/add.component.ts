import { CategoryService } from '@/app/core/services/category.service';
import { NotificationsService } from '@/app/shared/common/services/notifications.service';
import { Category } from '@/app/shared/types/category';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { NzButtonComponent } from 'ng-zorro-antd/button';
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
  selector: 'app-category-add',
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
    NzOptionComponent,
    NzTextareaCountComponent,
    NzButtonComponent,
    NzWaveDirective,
    ɵNzTransitionPatchDirective,
  ],
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
