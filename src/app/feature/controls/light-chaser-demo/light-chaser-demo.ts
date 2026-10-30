import { Component, model } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { SlideSwitch } from '@control/slide-switch';
import { FormsModule } from '@angular/forms';
import { LightChaser } from '@control/light-chaser';
import { CodeColoring } from '@core/code-coloring';
import { Indent } from '@core/indent';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';

@Component({
  imports: [
    JellyContainer,
    CardContainer,
    CardHeader,
    CardBody,
    SlideSwitch,
    FormsModule,
    LightChaser,
    CodeColoring,
    Indent,
    RadioGroup,
  ],
  selector: 'prb-light-chaser-demo',
  styleUrl: './light-chaser-demo.scss',
  templateUrl: './light-chaser-demo.html',
})
export class LightChaserDemo {
  protected isProcessing = model<boolean>(false);
  protected isShowActivity = model<boolean>(false);
  protected count = model<number>(10);
  protected speed = model<number>(90);
  protected size = model<number>(20);
  protected color = model<string>('#ff3366')

  countOptions: RadioOption[] = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
    { label: '25', value: 25 },
  ];

  speedOptions: RadioOption[] = [
    { label: '90', value: 90 },
    { label: '100', value: 100 },
    { label: '110', value: 110 },
    { label: '120', value: 120 },
    { label: '130', value: 130 },
    { label: '140', value: 140 },
  ];

  sizeOptions: RadioOption[] = [
    { label: '10', value: 10 },
    { label: '12', value: 12 },
    { label: '15', value: 15 },
    { label: '18', value: 18 },
    { label: '20', value: 20 },
    { label: '25', value: 25 },
  ];

  colorOptions: RadioOption[] = [
    { label: '#ff3366', value: '#ff3366' },
    { label: '#00ffcc', value: '#00ffcc' },
    { label: '#2233cc', value: '#2233cc' },
    { label: '#aaaacc', value: '#aaaacc' },
  ];
}
