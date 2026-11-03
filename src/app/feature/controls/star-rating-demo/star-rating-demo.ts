import { Component, model } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { StarRating } from '@control/star-rating';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColoring } from '@core/code-coloring';
import { SlideSwitch } from '@control/slide-switch/slide-switch';
import { FormsModule } from '@angular/forms';
import { Indent } from '@core/indent';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';
import { Button } from '@control/button/button';

@Component({
  imports: [
    JellyContainer,
    StarRating,
    CodeColoring,
    CardContainer,
    CardHeader,
    CardBody,
    SlideSwitch,
    FormsModule,
    Indent,
    RadioGroup,
    Button,
  ],
  selector: 'prb-star-rating-demo',
  styleUrl: './star-rating-demo.scss',
  templateUrl: './star-rating-demo.html',
})
export class StarRatingDemo {
  protected selectedRating = 0;
  protected disabled = model<boolean>(false);
  protected selectedStarCount = model<number>(-1);

  starCountOptions: RadioOption[] = [
    { label: 'default', value: -1 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
    { label: '25', value: 25 },
  ];

  protected isDisabled() {
    return this.selectedRating === 0;
  }

  protected clearStarRating() {
    this.selectedRating = 0;
  }
}
