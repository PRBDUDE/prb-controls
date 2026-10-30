import { Component, model } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { SlideSwitch } from '@control/slide-switch';
import { FormsModule } from '@angular/forms';
import { LightChaser } from '@control/light-chaser';

@Component({
  imports: [
    JellyContainer,
    CardContainer,
    CardHeader,
    CardBody,
    SlideSwitch,
    FormsModule,
    LightChaser,
  ],
  selector: 'prb-light-chaser-demo',
  styleUrl: './light-chaser-demo.scss',
  templateUrl: './light-chaser-demo.html',
})
export class LightChaserDemo {
  protected isProcessing = model<boolean>(true);
}
