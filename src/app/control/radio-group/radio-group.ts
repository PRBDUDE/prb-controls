import { Component, forwardRef, input, model } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export interface RadioOption<T = any> {
  label?: string;
  color?: string;
  value: T;
}

@Component({
  imports: [],
  selector: 'radio-group',
  template: `
    <div
      class="radio-group"
      [class.horizontal]="orientation() === 'horizontal'"
      [class.vertical]="orientation() === 'vertical'"
      role="radiogroup"
    >
      @for (option of options(); track option.value) {
        <label class="radio-label" [class.disabled]="disabled()">
          <input
            type="radio"
            [name]="name()"
            [value]="option.value"
            [checked]="value() === option.value"
            [disabled]="disabled()"
            (change)="onSelect(option.value)"
            (blur)="onTouched()"
          />
          @if (option.label) {
            <span>{{ option.label }}</span>
          }
          @if (option.color) {
            <span class="radio-color" [style.background-color]="option.color"></span>
          }
        </label>
      }
    </div>
  `,
  styles: [
    `
      .radio-group {
        display: flex;
        gap: 0.5rem;
      }

      .radio-group.vertical {
        flex-direction: column;
      }

      .radio-group.horizontal {
        flex-direction: row;
        align-items: center;
      }

      .radio-label {
        display: inline-flex;
        align-items: center;
        gap: var(--label-gap);
        cursor: pointer;
        user-select: none;
        font-family: var(--label-font-family), serif;
        font-size: var(--label-font-size);
        color: var(--color-label);
      }

      .radio-label.disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      .radio-color {
        width: 20px;
        height: 20px;
        border-radius: 5px;
      }

      input[type='radio'] {
        cursor: pointer;
      }

      input[type='radio']:disabled {
        cursor: not-allowed;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroup),
      multi: true,
    },
  ],
})
export class RadioGroup {
  options = input.required<RadioOption[]>();
  name = input.required<string>();
  orientation = input<'horizontal' | 'vertical'>('vertical');

  readonly value = model<any>(null);
  readonly disabled = input<boolean>(false);

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  onSelect(val: any): void {
    if (!this.disabled()) {
      this.value.set(val);
      this.onChange(val);
      this.onTouched();
    }
  }

  // ControlValueAccessor Implementation
  writeValue(val: any): void {
    this.value.set(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.apply(isDisabled);
  }
}
