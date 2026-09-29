import { Component } from '@angular/core';
import { Section } from '@core/section';
import { Primary } from './primary/primary';
import { Secondary } from './secondary/secondary';
import { Tertiary } from './tertiary/tertiary';

@Component({
  imports: [Section, Primary, Secondary, Tertiary],
  selector: 'prb-color',
  styleUrl: './color.scss',
  templateUrl: './color.html',
})
export class Color {}
