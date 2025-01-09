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
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  isCollapsed = false;
}
