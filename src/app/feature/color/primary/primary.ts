import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { ColorCard } from '../color-card/color-card';

@Component({
  imports: [JellyContainer, ColorCard],
  selector: 'prb-primary',
  styleUrl: './primary.scss',
  templateUrl: './primary.html',
})
export class Primary {}
