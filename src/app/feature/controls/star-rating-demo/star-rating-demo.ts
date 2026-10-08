import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { StarRating } from '@control/star-rating';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColoring } from '@core/code-coloring';

@Component({
  imports: [JellyContainer, StarRating, CodeColoring, CardContainer, CardHeader, CardBody],
  selector: 'prb-star-rating-demo',
  styleUrl: './star-rating-demo.scss',
  templateUrl: './star-rating-demo.html',
})
export class StarRatingDemo {
  protected selectedRating = 0;
  protected selectedRating2 = 0;
}
