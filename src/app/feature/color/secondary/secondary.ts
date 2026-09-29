import { Component } from '@angular/core';
import { ColorCard } from '@control/color-card';
import { JellyContainer } from '@core/jelly-container';

@Component({
  imports: [ColorCard, JellyContainer],
  selector: 'prb-secondary',
  styleUrls: ['../color.scss', './secondary.scss'],
  templateUrl: './secondary.html',
})
export class Secondary {}
