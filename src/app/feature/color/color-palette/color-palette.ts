import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { ColorCard } from '@control/color-card';

@Component({
  imports: [JellyContainer, ColorCard],
  selector: 'prb-color-palette',
  styleUrl: './color-palette.scss',
  templateUrl: './color-palette.html',
})
export class ColorPalette {}
