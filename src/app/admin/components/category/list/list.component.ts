import { CategoryService } from '@/app/common/services/category.service';
import { Category } from '@/app/types/category';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListCategoryComponent implements OnInit {
  // category$ = new MatTableDataSource<Category>();

  // getCategory(): void {
  //   this.service.getAll$
  //     .pipe(map(category => category ?? []))
  //     .subscribe(category => {
  //       console.log(category);
  //       this.category$.data = category;
  //     });
  // }
  constructor(private service: CategoryService) {}
  ngOnInit(): void {
    // this.getCategory();
  }
  // displayColumn: string[] = ['name', 'type', 'options'];
  // onDelete(id: string) {
  //   return this.service.delete$(id);
  // }
}
