import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { ThreeDBall } from '@control/three-d-ball/three-d-ball';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';
import { FormsModule } from '@angular/forms';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColoring } from '@core/code-coloring';
import { Indent } from '@core/indent';

@Component({
  imports: [
    JellyContainer,
    ThreeDBall,
    RadioGroup,
    FormsModule,
    CardContainer,
    CardHeader,
    CardBody,
    CodeColoring,
    Indent,
  ],
  selector: 'prb-three-d-ball-demo',
  styleUrl: './three-d-ball-demo.scss',
  templateUrl: './three-d-ball-demo.html',
})
export class ThreeDBallDemo {
  protected ballColor = '#3b82f6';
  protected selectedSize = 70;

  sizeOptions: RadioOption[] = [
    { label: '50', value: 50 },
    { label: '60', value: 60 },
    { label: '70', value: 70 },
    { label: '80', value: 80 },
    { label: '90', value: 90 },
    { label: '100', value: 100 },
  ];

  colorOptions: RadioOption[] = [
    { color: '#3b82f6', value: '#3b82f6' },
    { color: '#ef4444', value: '#ef4444' },
    { color: '#10b981', value: '#10b981' },
    { color: '#8b5cf6', value: '#8b5cf6' },
    { color: '#da5cf6', value: '#da5cf6' },
  ];
}
