import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'html-tag',
  styleUrl: './html-tag.scss',
  template: `
    <ng-content></ng-content>
  `,
})
export class HtmlTag {}
