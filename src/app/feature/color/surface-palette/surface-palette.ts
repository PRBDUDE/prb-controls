import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { ColorCard } from '@control/color-card';

@Component({
  imports: [JellyContainer, ColorCard],
  selector: 'prb-surface-palette',
  styleUrls: ['../color.scss', './surface-palette.scss'],
  templateUrl: './surface-palette.html',
})
export class SurfacePalette {}
