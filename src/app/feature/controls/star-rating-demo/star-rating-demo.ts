import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { StarRating } from '@control/star-rating';

@Component({
  imports: [JellyContainer, StarRating],
  selector: 'prb-star-rating-demo',
  styleUrl: './star-rating-demo.scss',
  templateUrl: './star-rating-demo.html',
})
export class StarRatingDemo {
  protected selectedRating = 0;
  protected selectedRating2 = 0;
}
