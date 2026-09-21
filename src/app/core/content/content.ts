import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'prb-content',
  styleUrl: './content.scss',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    class: 'content',
    role: 'container'
  }
})
export class Content {}
