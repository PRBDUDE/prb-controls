import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'card-header',
  styleUrl: './card-header.scss',
  template: `
    <ng-content></ng-content>
  `
})
export class CardHeader {}
