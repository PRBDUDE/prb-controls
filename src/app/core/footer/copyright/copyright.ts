import {Component, input} from '@angular/core';

@Component({
  selector: 'prb-copyright',
  imports: [],
  template: `
    {{ copyrightHolder() }} &copy; {{ year }}
  `,
  styleUrls: [
    '../footer.scss',
    './copyright.scss'
  ]
})
export class Copyright {
  copyrightHolder = input<string>('Programmer Roadblocks');
  year = new Date().getFullYear();
}
