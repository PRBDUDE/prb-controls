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
  ],
  selector: 'prb-star-rating-demo',
  styleUrl: './star-rating-demo.scss',
  templateUrl: './star-rating-demo.html',
})
export class StarRatingDemo {
  protected selectedRating = 0;
  protected selectedRating2 = 0;
  protected disabled = model<boolean>(false);
  protected disabled2 = model<boolean>(false);
}
