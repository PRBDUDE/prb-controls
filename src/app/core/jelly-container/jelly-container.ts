import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'jelly-container',
  styleUrl: './jelly-container.scss',
  template: `
   <ng-content></ng-content>
  `,
  host: {
    role: 'container',
  },
})
export class JellyContainer {}
