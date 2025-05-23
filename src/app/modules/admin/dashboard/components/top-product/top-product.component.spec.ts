import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductComponent } from './top-product.component';

describe('TopProductComponent', () => {
  let component: TopProductComponent;
  let fixture: ComponentFixture<TopProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
