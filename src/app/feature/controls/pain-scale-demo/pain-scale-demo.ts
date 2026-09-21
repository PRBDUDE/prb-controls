import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { PainScaleSelector } from '@control/pain-scale-selector';
import { CardBody } from '@core/card-body';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { HtmlAttribute } from '@core/html-attribute';
import { HtmlTag } from '@core/html-tag';
import { UserTag } from '@core/user-tag';

@Component({
  imports: [
    JellyContainer,
    PainScaleSelector,
    CardBody,
    CardContainer,
    CardHeader,
    HtmlAttribute,
    HtmlTag,
    UserTag,
  ],
  selector: 'prb-pain-scale-demo',
  styleUrl: './pain-scale-demo.scss',
  templateUrl: './pain-scale-demo.html',
})
export class PainScaleDemo {
  protected selectedPainLevel = 0;
}
