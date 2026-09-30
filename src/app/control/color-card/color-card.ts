import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'prb-color-card',
  styleUrl: './color-card.scss',
  templateUrl: './color-card.html',
})
export class ColorCard {
  name = input.required<string>();

  toProperCase(name: string): any {
    return name.substring(0, 1).toUpperCase() + name.substring(1);
  }

  readonly shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  getCssVarString(shade: number): string {
    return `var(--prb-color-${this.name()}-${shade})`;
  }
}
