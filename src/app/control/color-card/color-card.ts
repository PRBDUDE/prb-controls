import { Component, input } from '@angular/core';
import { hslToHex } from '@core/functions/hsl-to-rgb';

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

  getCssValue(shade: number) {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(`--prb-color-${this.name()}-${shade}`).trim();
  }

  getRgb(shade: number) {
    const hsl = this.getCssValue(shade).replace('hsl(', '').replace(')', '').replaceAll('%', '');
    const hslValues = hsl.split(',');
    return hslToHex(Number(hslValues[0]), Number(hslValues[1]), Number(hslValues[2]));
  }
}
