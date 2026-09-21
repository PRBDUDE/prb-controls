import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'card-container',
  styleUrl: './card-container.scss',
  template: `
    <ng-content select="card-header"></ng-content>
    <ng-content select="card-body"></ng-content>
  `
})
export class CardContainer {}
