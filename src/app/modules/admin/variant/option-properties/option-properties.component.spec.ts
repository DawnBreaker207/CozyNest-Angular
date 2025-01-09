import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPropertiesComponent } from './option-properties.component';

describe('OptionPropertiesComponent', () => {
  let component: OptionPropertiesComponent;
  let fixture: ComponentFixture<OptionPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionPropertiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
