import { Component, model } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { SlideSwitch } from '@control/slide-switch/slide-switch';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';

@Component({
  imports: [JellyContainer, CardContainer, CardHeader, CardBody, SlideSwitch, RadioGroup],
  selector: 'prb-slide-switch-demo',
  styleUrl: './slide-switch-demo.scss',
  templateUrl: './slide-switch-demo.html',
})
export class SlideSwitchDemo {
  protected demoValue = model<boolean>(false);
  protected demoPositionValue = model<boolean>(false);
  protected selectedLabelPosition = model<'left' | 'right'>('left');
  protected disabled = model<boolean>(false);

  labelPosition: RadioOption[] = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' }
  ];
}
