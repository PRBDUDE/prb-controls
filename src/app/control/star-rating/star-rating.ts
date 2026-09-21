import { Component, computed, forwardRef, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'prb-star-rating',
  imports: [CommonModule],
  styleUrl: './star-rating.scss',
  templateUrl: './star-rating.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRating),
      multi: true,
    },
  ],
})
export class StarRating implements ControlValueAccessor {
  // Two-way bound signal for rating value (default: 0)
  rating = model<number>(0);

  // Maximum number of stars
  maxStars = input<number>(5);

  // Readonly mode option
  disabled = input<boolean>(false);

  // Array used to iterate over stars in template
  stars = computed(() => Array.from({ length: this.maxStars() }, (_, i) => i + 1));

  // ControlValueAccessor callbacks
  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  selectRating(starValue: number): void {
    this.rating.set(starValue);
    this.onChange(starValue);
    this.onTouched();
  }

  // --- ControlValueAccessor Implementation ---
  writeValue(value: number): void {
    if (value !== undefined && value !== null) {
      this.rating.set(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
