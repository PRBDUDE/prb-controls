import { Component, model } from '@angular/core';
import { Button, buttonSize } from '@control/button/button';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';
import { CodeColoring } from '@core/code-coloring';
import { Indent } from '@core/indent';
import { SlideSwitch } from '@control/slide-switch/slide-switch';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
    Button,
    JellyContainer,
    CardContainer,
    CardHeader,
    CardBody,
    CodeColoring,
    Indent,
    RadioGroup,
    SlideSwitch,
    TitleCasePipe,
    FormsModule,
  ],
  selector: 'prb-button-tertiary-demo',
  styleUrl: './button-tertiary-demo.scss',
  templateUrl: './button-tertiary-demo.html',
})
export class ButtonTertiaryDemo {
  protected size = model<buttonSize>('large');
  protected pill = model<boolean>(false);
  protected disabled = model<boolean>(false);

  protected sizeOptions: RadioOption[] = [
    { value: 'large', label: 'Large' },
    { value: 'medium', label: 'Medium' },
    { value: 'small', label: 'Small' },
  ];

  protected onTertiaryClick($event: MouseEvent) {
    console.log('Tertiary Large Click');
  }
}
