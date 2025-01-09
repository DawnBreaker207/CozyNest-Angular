import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent,
} from 'ng-zorro-antd/layout';
import {
  NzMenuDirective,
  NzMenuItemComponent,
  NzSubMenuComponent,
} from 'ng-zorro-antd/menu';

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
    RouterOutlet,
    NzFooterComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  isCollapsed = false;
}
