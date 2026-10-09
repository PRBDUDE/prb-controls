import { Component } from '@angular/core';
import { Section } from '@core/section';
import { StarRatingDemo } from './star-rating-demo/star-rating-demo';
import { PainScaleDemo } from './pain-scale-demo/pain-scale-demo';
import { AiGeneratedDemo } from './ai-generated-demo/ai-generated-demo';
import { SlideSwitchDemo } from './slide-switch-demo/slide-switch-demo';

@Component({
  imports: [Section, StarRatingDemo, PainScaleDemo, AiGeneratedDemo, SlideSwitchDemo],
  selector: 'prb-controls',
  styleUrl: './controls.scss',
  templateUrl: './controls.html',
})
export class Controls {}
