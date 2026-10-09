import { Component, model } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColoring } from '@core/code-coloring';
import { Button, buttonSize } from '@control/button/button';
import { SlideSwitch } from '@control/slide-switch/slide-switch';
import { FormsModule } from '@angular/forms';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';

@Component({
  imports: [
    JellyContainer,
    CardContainer,
    CardHeader,
    CardBody,
    CodeColoring,
    Button,
    SlideSwitch,
    FormsModule,
    RadioGroup,
  ],
  selector: 'prb-about-button-demo',
  styleUrl: './about-button-demo.scss',
  templateUrl: './about-button-demo.html',
})
export class AboutButtonDemo {
  protected isPill = model<boolean>(false);
  protected isDisabled = model<boolean>(false);
  protected selectedSize = model<buttonSize>('medium');

  buttonSizes: RadioOption[] = [
    { label: 'Large', value: 'large' },
    { label: 'Medium', value: 'medium' },
    { label: 'Small', value: 'small' },
  ];

  protected onClickPrimary($event: MouseEvent) {
    console.log('onClickPrimary', $event);
  }

  protected onClickSecondary($event: MouseEvent) {
    console.log('onClickSecondary', $event);
  }

  protected onClickTertiary($event: MouseEvent) {
    console.log('onClickTertiary', $event);
  }
}
