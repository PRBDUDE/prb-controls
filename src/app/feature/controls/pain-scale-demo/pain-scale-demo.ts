import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { PainScaleSelector } from '@control/pain-scale-selector';

@Component({
  imports: [JellyContainer, PainScaleSelector],
  selector: 'prb-pain-scale-demo',
  styleUrl: './pain-scale-demo.scss',
  templateUrl: './pain-scale-demo.html',
})
export class PainScaleDemo {
  protected selectedPainLevel = 0;
}
