import { Component } from '@angular/core';
import { Button } from '@control/button/button';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';

@Component({
  imports: [Button, JellyContainer, CardContainer, CardHeader, CardBody],
  selector: 'prb-button-secondary-demo',
  styleUrl: './button-secondary-demo.scss',
  templateUrl: './button-secondary-demo.html',
})
export class ButtonSecondaryDemo {
  protected onSecondaryLargeClick($event: MouseEvent) {
    console.log('Secondary Large Click');
  }

  protected onSecondaryMediumClick($event: MouseEvent) {
    console.log('Secondary Medium Click');
  }

  protected onSecondarySmallClick($event: MouseEvent) {
    console.log('Secondary Small Click');
  }
}
