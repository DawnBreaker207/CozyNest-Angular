import { CategoryService } from '@/app/core/services/category.service';
import { Category } from '@/app/shared/types/category';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import {
  NzTableComponent,
  NzTheadComponent,
  NzTrDirective,
  NzTableCellDirective,
  NzThMeasureDirective,
  NzTbodyComponent,
} from 'ng-zorro-antd/table';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-category-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone: true,
  imports: [
    NgIf,
    NzTableComponent,
    NzTheadComponent,
    NzTrDirective,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTbodyComponent,
    NgFor,
    NzButtonComponent,
    ɵNzTransitionPatchDirective,
    RouterLinkActive,
    RouterLink,
    NzDividerComponent,
    AsyncPipe,
  ],
})
export class ListCategoryComponent implements OnInit, OnDestroy {
  category$: Observable<Category[]> = new Observable();
  private unsubscribe = new Subject<void>();

  constructor(private service: CategoryService) {}
  ngOnInit(): void {
    this.category$ = this.service.getAll$;
    this.category$.pipe(takeUntil(this.unsubscribe));
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  del() {}
  edit() {}
}
