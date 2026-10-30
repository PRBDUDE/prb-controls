import { Component } from '@angular/core';
import { Section } from '@core/section';
import { StarRatingDemo } from './star-rating-demo/star-rating-demo';
import { PainScaleDemo } from './pain-scale-demo/pain-scale-demo';
import { AiGeneratedDemo } from './ai-generated-demo/ai-generated-demo';
import { SlideSwitchDemo } from './slide-switch-demo/slide-switch-demo';
import { RadioGroupDemo } from './radio-group-demo/radio-group-demo';
import { CalendarDemo } from './calendar-demo/calendar-demo';
import { LightChaserDemo } from './light-chaser-demo/light-chaser-demo';
import { CalendarWithBlockingDemo } from './calendar-with-blocking-demo/calendar-with-blocking-demo';

@Component({
  imports: [
    Section,
    StarRatingDemo,
    PainScaleDemo,
    AiGeneratedDemo,
    SlideSwitchDemo,
    RadioGroupDemo,
    CalendarDemo,
    LightChaserDemo,
    CalendarWithBlockingDemo,
  ],
  selector: 'prb-controls',
  styleUrl: './controls.scss',
  templateUrl: './controls.html',
})
export class Controls {}
