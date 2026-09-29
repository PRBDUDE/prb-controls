import { Component } from '@angular/core';
import { ColorCard } from '../color-card/color-card';
import { JellyContainer } from '@core/jelly-container';

@Component({
  imports: [ColorCard, JellyContainer],
  selector: 'prb-secondary',
  styleUrl: './secondary.scss',
  templateUrl: './secondary.html',
})
export class Secondary {}
