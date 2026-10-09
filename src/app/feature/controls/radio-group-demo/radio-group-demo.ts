import { Component, input, model } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColoring } from '@core/code-coloring';
import { Indent } from '@core/indent';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';
import { FormsModule } from '@angular/forms';
import { SlideSwitch } from '@control/slide-switch/slide-switch';

@Component({
  imports: [
    JellyContainer,
    CardContainer,
    CardHeader,
    CardBody,
    CodeColoring,
    Indent,
    RadioGroup,
    FormsModule,
    SlideSwitch,
  ],
  selector: 'prb-radio-group-demo',
  styleUrl: './radio-group-demo.scss',
  templateUrl: './radio-group-demo.html',
})
export class RadioGroupDemo {
  protected selectedOption = model<string>();
  protected orientation = model<'vertical' | 'horizontal'>('vertical');
  protected disabled = model<boolean>(false);

  orientationOptions: RadioOption[] = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  selectionOptions: RadioOption[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ];
  protected readonly JSON = JSON;
}
