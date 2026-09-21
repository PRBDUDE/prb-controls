import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'card-body',
  styleUrl: './card-body.scss',
  template: `
    <ng-content></ng-content>
  `
})
export class CardBody {}
