import { Component } from '@angular/core';
import {
  NzBreadCrumbComponent,
  NzBreadCrumbItemComponent,
} from 'ng-zorro-antd/breadcrumb';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import {
  NzMenuDirective,
  NzSubMenuComponent,
  NzMenuItemComponent,
} from 'ng-zorro-antd/menu';
import {
  NzLayoutComponent,
  NzSiderComponent,
  NzHeaderComponent,
  NzContentComponent,
  NzFooterComponent,
} from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzSiderComponent,
    NzMenuDirective,
    NzSubMenuComponent,
    NzMenuItemComponent,
    RouterLinkActive,
    RouterLink,
    NzHeaderComponent,
    NzIconDirective,
    NzContentComponent,
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    RouterOutlet,
    NzFooterComponent,
  ],
})
export class AdminComponent {
  isCollapsed = false;
}
