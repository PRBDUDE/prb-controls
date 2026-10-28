import { Component, model } from '@angular/core';
import { Button } from '@control/button/button';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';
import { FormsModule } from '@angular/forms';
import { SlideSwitch } from '@control/slide-switch/slide-switch';
import { CodeColoring } from '@core/code-coloring';
import { Indent } from '@core/indent';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [
    Button,
    JellyContainer,
    CardContainer,
    CardHeader,
    CardBody,
    RadioGroup,
    FormsModule,
    SlideSwitch,
    CodeColoring,
    Indent,
    TitleCasePipe,
  ],
  selector: 'prb-button-primary-demo',
  styleUrl: './button-primary-demo.scss',
  templateUrl: './button-primary-demo.html',
})
export class ButtonPrimaryDemo {
  protected size = model<'large' | 'medium' | 'small'>('large');
  protected pill = model<boolean>(false);
  protected disabled = model<boolean>(false);

  protected sizeOptions: RadioOption[] = [
    { value: 'large', label: 'Large' },
    { value: 'medium', label: 'Medium' },
    { value: 'small', label: 'Small' },
  ];

  protected onPrimaryClick($event: MouseEvent) {
    console.log('Primary Click');
  }
}
