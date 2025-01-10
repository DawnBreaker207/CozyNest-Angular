import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule,
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  activeSection?: string;
  toggleSection(section: string): void {
    this.activeSection = this.activeSection === section ? undefined : section;
  }
}
