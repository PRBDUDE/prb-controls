import { Component } from '@angular/core';
import { Button } from '@control/button/button';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';

@Component({
  imports: [Button, JellyContainer, CardContainer, CardHeader, CardBody],
  selector: 'prb-button-primary-demo',
  styleUrl: './button-primary-demo.scss',
  templateUrl: './button-primary-demo.html',
})
export class ButtonPrimaryDemo {
  protected onPrimaryLargeClick($event: MouseEvent) {
    console.log('Primary Large Click');
  }

  protected onPrimaryMediumClick($event: MouseEvent) {
    console.log('Primary Medium Click');
  }

  protected onPrimarySmallClick($event: MouseEvent) {
    console.log('Primary Small Click');
  }
}
