import { Component } from '@angular/core';
import { Button } from '@control/button/button';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';

@Component({
  imports: [Button, JellyContainer, CardContainer, CardHeader, CardBody],
  selector: 'prb-button-tertiary-demo',
  styleUrl: './button-tertiary-demo.scss',
  templateUrl: './button-tertiary-demo.html',
})
export class ButtonTertiaryDemo {
  protected onTertiaryLargeClick($event: MouseEvent) {
    console.log('Tertiary Large Click');
  }

  protected onTertiaryMediumClick($event: MouseEvent) {
    console.log('Tertiary Medium Click');
  }

  protected onTertiarySmallClick($event: MouseEvent) {
    console.log('Tertiary Small Click');
  }
}
