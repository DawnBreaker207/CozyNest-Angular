import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionValueComponent } from './option-value.component';

describe('OptionValueComponent', () => {
  let component: OptionValueComponent;
  let fixture: ComponentFixture<OptionValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionValueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
