import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { StarRating } from '@control/star-rating';
import { HtmlTag } from '@core/html-tag';
import { UserTag } from '@core/user-tag';
import { HtmlAttribute } from '@core/html-attribute';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';

@Component({
  imports: [
    JellyContainer,
    StarRating,
    HtmlTag,
    UserTag,
    HtmlAttribute,
    CardContainer,
    CardHeader,
    CardBody,
  ],
  selector: 'prb-star-rating-demo',
  styleUrl: './star-rating-demo.scss',
  templateUrl: './star-rating-demo.html',
})
export class StarRatingDemo {
  protected selectedRating = 0;
  protected selectedRating2 = 0;
}
