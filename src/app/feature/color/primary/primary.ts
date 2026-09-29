import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { ColorCard } from '@control/color-card';

@Component({
  imports: [JellyContainer, ColorCard],
  selector: 'prb-primary',
  styleUrls: ['../color.scss', './primary.scss'],
  templateUrl: './primary.html',
})
export class Primary {}
