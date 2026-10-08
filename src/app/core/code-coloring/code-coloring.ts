import { Component } from '@angular/core';

@Component({
  imports: [],
  selector:
    'class-name, key-word, html-attribute, html-tag, method-name, number-value, prb-caution, prb-comment, prb-property, prb-string, user-tag',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: inherit;
      }

      :host(class-name) {
        color: var(--color-class-name);
      }

      :host(key-word) {
        color: var(--color-key-word);
      }

      :host(html-attribute) {
        color: var(--color-html-attribute);
      }

      :host(html-tag) {
        color: var(--color-html-tag);
      }

      :host(method-name) {
        color: var(--color-method-name);
      }

      :host(number-value) {
        color: var(--color-number-value);
      }

      :host(prb-caution) {
        color: var(--color-caution);
        font-weight: bold;

        &.large {
          font-size: 18pt;
        }
      }

      :host(prb-comment) {
        color: var(--color-comment);
      }

      :host(prb-property) {
        color: var(--color-property);
      }

      :host(prb-string) {
        color: var(--color-string);
      }

      :host(user-tag) {
        color: var(--color-user-tag);
      }
    `,
  ],
})
export class CodeColoring {}
