import { Component } from '@angular/core';
import { Section } from '@core/section';
import { StarRatingDemo } from './star-rating-demo/star-rating-demo';
import { PainScaleDemo } from './pain-scale-demo/pain-scale-demo';
import { AiGeneratedDemo } from './ai-generated-demo/ai-generated-demo';
import { SlideSwitchDemo } from './slide-switch-demo/slide-switch-demo';
import { RadioGroupDemo } from './radio-group-demo/radio-group-demo';
import { CalendarDemo } from './calendar-demo/calendar-demo';

@Component({
  imports: [
    Section,
    StarRatingDemo,
    PainScaleDemo,
    AiGeneratedDemo,
    SlideSwitchDemo,
    RadioGroupDemo,
    CalendarDemo,
  ],
  selector: 'prb-controls',
  styleUrl: './controls.scss',
  templateUrl: './controls.html',
})
export class Controls {}
