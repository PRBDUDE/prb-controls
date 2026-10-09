import { Component } from '@angular/core';
import { Section } from '@core/section';
import { SlideSwitchDemo } from './slide-switch-demo/slide-switch-demo';

@Component({
  imports: [Section, SlideSwitchDemo],
  selector: 'prb-slide',
  styleUrl: './slide.scss',
  templateUrl: './slide.html',
})
export class Slide {}
