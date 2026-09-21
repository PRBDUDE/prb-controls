import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'layout',
  styleUrl: './layout.scss',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    'class': 'layout',
  }
})
export class Layout {}
