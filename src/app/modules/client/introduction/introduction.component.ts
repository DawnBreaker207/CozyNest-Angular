import { Component } from '@angular/core';
import { Contact1Component } from './contact1/contact1.component';
import { Contact2Component } from './contact2/contact2.component';
import { Contact3Component } from './contact3/contact3.component';
import { Contact4Component } from './contact4/contact4.component';
@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    Contact1Component,
    Contact2Component,
    Contact3Component,
    Contact4Component,
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {}
