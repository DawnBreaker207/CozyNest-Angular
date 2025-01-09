import { NgIf } from '@angular/common';
import { Component, input, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent implements ControlValueAccessor {
  label = input<string>('');
  type = input<string>('text');

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }
  writeValue(): void {}
  registerOnChange(): void {}
  registerOnTouched(): void {}

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }
}
