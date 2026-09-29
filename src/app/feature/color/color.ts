import { Component } from '@angular/core';
import { Section } from '@core/section';
import { Primary } from './primary/primary';
import { Secondary } from './secondary/secondary';
import { Tertiary } from './tertiary/tertiary';
import { ColorPalette } from './color-palette/color-palette';

@Component({
  imports: [Section, Primary, Secondary, Tertiary, ColorPalette],
  selector: 'prb-color',
  styleUrl: './color.scss',
  templateUrl: './color.html',
})
export class Color {}
