import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { HtmlTag } from '@core/html-tag';
import { HtmlAttribute } from '@core/html-attribute';
import { Button } from '@control/button/button';

@Component({
  imports: [JellyContainer, CardContainer, CardHeader, CardBody, HtmlTag, HtmlAttribute, Button],
  selector: 'prb-about-button-demo',
  styleUrl: './about-button-demo.scss',
  templateUrl: './about-button-demo.html',
})
export class AboutButtonDemo {
  protected onClickPrimary($event: MouseEvent) {
    console.log('onClickPrimary', $event);
  }

  protected onClickSecondary($event: MouseEvent) {
    console.log('onClickSecondary', $event);
  }

  protected onClickTertiary($event: MouseEvent) {
    console.log('onClickTertiary', $event);
  }
}
