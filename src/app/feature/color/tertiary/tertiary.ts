import { Component } from '@angular/core';
import { ColorCard } from '@control/color-card';
import { JellyContainer } from '@core/jelly-container';

@Component({
  imports: [ColorCard, JellyContainer],
  selector: 'prb-tertiary',
  styleUrls: ['../color.scss', './tertiary.scss'],
  templateUrl: './tertiary.html',
})
export class Tertiary {}
