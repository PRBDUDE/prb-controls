import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'class-name, html-attribute, html-tag, number-value, user-tag',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: inherit;
      }

      :host(class-name) {
        color: var(--color-class-name);
      }

      :host(html-attribute) {
        color: var(--color-html-attribute);
      }

      :host(html-tag) {
        color: var(--color-html-tag);
      }

      :host(number-value) {
        color: var(--color-number-value);
      }

      :host(user-tag) {
        color: var(--color-user-tag);
      }
    `,
  ],
})
export class CodeColoring {}
