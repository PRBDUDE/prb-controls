import { Component } from '@angular/core';
import { Section } from '@core/section';
import { StarRatingDemo } from './star-rating-demo/star-rating-demo';
import { PainScaleDemo } from './pain-scale-demo/pain-scale-demo';
import { AiGeneratedDemo } from './ai-generated-demo/ai-generated-demo';

@Component({
  imports: [Section, StarRatingDemo, PainScaleDemo, AiGeneratedDemo],
  selector: 'prb-controls',
  styleUrl: './controls.scss',
  templateUrl: './controls.html',
})
export class Controls {}
