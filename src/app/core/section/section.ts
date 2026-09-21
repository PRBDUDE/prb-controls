import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'prb-section',
  styleUrl: './section.scss',
  template: `
    <div class="content-section-description">{{ description() }}</div>
    <ng-content></ng-content>
  `,
  host: {
    class: 'content-section',
    rol: 'content',
    '[id]': 'sectionName()'
  }
})
export class Section {
  sectionName = input<string>('');
  description = input<string>('');
}
