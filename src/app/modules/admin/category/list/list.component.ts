import { CategoryService } from '@/app/core/services/category.service';
import { Category } from '@/app/shared/types/category';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { map, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone: true,
  imports: [
    NzTableModule,
    NzButtonComponent,
    ɵNzTransitionPatchDirective,
    RouterLink,
    NzIconModule,
    NzSelectModule,
    CommonModule,
    NzSpaceModule,
    NzTagModule,
    NzPopconfirmModule,
    NzInputModule,
  ],
})
export class ListCategoryComponent implements OnInit, OnDestroy {
  columns = [
    { title: 'Tên danh mục' },
    { title: 'Ảnh danh mục' },
    { title: 'Trạng thái hiển thị' },
    { title: 'Ngày thêm' },
    { title: 'Action' },
  ];
  category$: Observable<Category[]> = this.service
    .getAll$()
    .pipe(map(category => category || []));
  private unsubscribe = new Subject<void>();

  constructor(private service: CategoryService) {}
  ngOnInit(): void {
    this.category$.pipe(takeUntil(this.unsubscribe)).subscribe();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  del() {}
  edit() {}
}
