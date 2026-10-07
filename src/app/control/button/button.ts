import { Component, input, output } from '@angular/core';

export type buttonSize = 'large' | 'medium' | 'small';

@Component({
  imports: [],
  selector: 'button-primary, button-secondary, button-tertiary',
  template: `
    <button
      [class]="size()"
      [class.pill]="pill()"
      [disabled]="disabled()"
      (click)="onClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      button {
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        border: 1px solid transparent;
        width: 100%;

        &.pill {
          border-radius: 18px;
        }
      }

      /* Sizes */
      .large {
        padding: 10px 24px;
        font-size: 14pt;
      }

      .medium {
        padding: 8px 18px;
        font-size: 11pt;
      }

      .small {
        padding: 6px 12px;
        font-size: 9pt;
      }

      /* Primary Style (<button-primary>) */
      :host(button-primary) button {
        background-color: var(--prb-color-primary-600);
        color: #ffffff;

        &:hover:not(:disabled) {
          background-color: var(--prb-color-primary-700);
        }
      }

      /* Secondary Style (<button-secondary>) */
      :host(button-secondary) button {
        background-color: #e0e0e0;
        color: #333333;
        border-color: #cccccc;

        &:hover:not(:disabled) {
          background-color: #c0c0c0;
        }
      }

      /* Tertiary Style (<button-tertiary>) */
      :host(button-tertiary) button {
        background-color: transparent;
        color: var(--prb-color-tertiary-600);

        &:hover:not(:disabled) {
          background-color: var(--prb-color-primary-800);
          color: var(--prb-color-tertiary-500);
        }
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `,
  ],
})
export class Button {
  size = input<buttonSize>('large');
  pill = input<boolean>(false);
  disabled = input<boolean>(false);

  readonly click = output<MouseEvent>();

  onClick(event: MouseEvent) {
    if (!this.disabled) {
      this.click.emit(event);
    }
  }
}
