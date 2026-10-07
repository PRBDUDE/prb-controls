import { Component } from '@angular/core';
import { Section } from '@core/section';
import { ButtonPrimaryDemo } from './button-primary-demo/button-primary-demo';
import { ButtonSecondaryDemo } from './button-secondary-demo/button-secondary-demo';
import { ButtonTertiaryDemo } from './button-tertiary-demo/button-tertiary-demo';

@Component({
  imports: [Section, ButtonPrimaryDemo, ButtonSecondaryDemo, ButtonTertiaryDemo],
  selector: 'prb-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {}
