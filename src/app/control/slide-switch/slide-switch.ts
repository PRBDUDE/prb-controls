import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'slide-switch',
  template: `
    <label class="switch-container" [class.disabled]="disabled()">
      @if (label() && labelPosition() === 'left') {
        <span class="label-text label-left">{{ label() }}</span>
      }

      <span class="switch">
        <input
          type="checkbox"
          [checked]="checked()"
          [disabled]="disabled()"
          (change)="toggle($event)"
        />
        <span class="slider"></span>
      </span>

      @if (label() && labelPosition() === 'right') {
        <span class="label-text label-left">{{ label() }}</span>
      }
    </label>
  `,
  styles: [
    `
      :host {
        --diameter: 18px;
      }

      .switch-container {
        display: inline-flex;
        align-items: center;
        gap: var(--label-gap);
        cursor: pointer;
        user-select: none;
      }

      .label-text {
        font-family: var(--label-font-family), serif;
        font-size: var(--label-font-size);
        color: var(--color-label);
      }

      .switch {
        position: relative;
        display: inline-block;
        width: calc(var(--diameter) * 2);
        height: var(--diameter);
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--prb-color-primary-50);
        transition: 0.3s;
        border-radius: var(--diameter);

        &:before {
          content: '';
          position: absolute;
          height: calc(var(--diameter) - 6px);
          width: calc(var(--diameter) - 6px);
          left: 3px;
          bottom: 3px;
          background-color: black;
          transition: 0.3s;
          border-radius: 50%;
        }
      }

      input {
        &:checked + .slider {
          background-color: var(--prb-color-primary-500);

          &:before {
            transform: translateX(var(--diameter));
          }
        }

        &:focus + .slider {
          box-shadow: 0 0 1px var(--prb-color-primary-500);
        }
      }

      .disabled {
        opacity: 0.6;
        cursor: not-allowed;

        .slider {
          cursor: not-allowed;
        }
      }
    `,
  ],
})
export class SlideSwitch {
  checked = model<boolean>(false);
  disabled = input<boolean>(false);
  label = input<string>();
  labelPosition = input<'left' | 'right'>('left');

  toggle(event: Event) {
    if (this.disabled()) {
      return;
    }
    const target = event.target as HTMLInputElement;
    this.checked.set(target.checked);
  }
}
