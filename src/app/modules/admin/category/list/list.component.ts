import { CategoryService } from '@/app/core/services/category.service';
import { Category } from '@/app/shared/types/category';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
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
