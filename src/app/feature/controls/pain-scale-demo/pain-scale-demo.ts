import { Component, model } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { PainScaleSelector } from '@control/pain-scale-selector';
import { CardBody } from '@core/card-body';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CodeColoring } from '@core/code-coloring';
import { Indent } from '@core/indent';
import { SlideSwitch } from '@control/slide-switch/slide-switch';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
    JellyContainer,
    PainScaleSelector,
    CardBody,
    CardContainer,
    CardHeader,
    CodeColoring,
    Indent,
    SlideSwitch,
    FormsModule,
  ],
  selector: 'prb-pain-scale-demo',
  styleUrl: './pain-scale-demo.scss',
  templateUrl: './pain-scale-demo.html',
})
export class PainScaleDemo {
  protected selectedPainLevel = 0;
  protected disabled = model<boolean>(false);
}
