import { Component } from '@angular/core';
import { ColorCard } from '../color-card/color-card';
import { JellyContainer } from '@core/jelly-container';

@Component({
  imports: [ColorCard, JellyContainer],
  selector: 'prb-tertiary',
  styleUrl: './tertiary.scss',
  templateUrl: './tertiary.html',
})
export class Tertiary {}
