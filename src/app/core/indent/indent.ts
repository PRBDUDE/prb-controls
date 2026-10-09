import { Component } from '@angular/core';

@Component({
  selector:
    'indent-1, indent-2, indent-3, indent-4, indent-5, indent-6, indent-7, indent-8, indent-9',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: block;
      }

      :host(indent-1) {
        margin-left: 1rem;
      }

      :host(indent-2) {
        margin-left: 2rem;
      }

      :host(indent-3) {
        margin-left: 3rem;
      }

      :host(indent-4) {
        margin-left: 4rem;
      }

      :host(indent-5) {
        margin-left: 5rem;
      }

      :host(indent-6) {
        margin-left: 6rem;
      }

      :host(indent-7) {
        margin-left: 7rem;
      }

      :host(indent-8) {
        margin-left: 8rem;
      }

      :host(indent-9) {
        margin-left: 9rem;
      }
    `,
  ],
})
export class Indent {}
