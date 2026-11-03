import { Component, model } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { CalenderWithBlocking } from '@control/calender-with-blocking/calender-with-blocking';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { SlideSwitch } from '@control/slide-switch';
import { CodeColoring } from '@core/code-coloring';
import { Indent } from '@core/indent';
import { Button } from '@control/button/button';

@Component({
  imports: [
    JellyContainer,
    CalenderWithBlocking,
    FormsModule,
    DatePipe,
    CardContainer,
    CardHeader,
    CardBody,
    RadioGroup,
    SlideSwitch,
    CodeColoring,
    Indent,
    Button,
  ],
  selector: 'prb-calendar-with-blocking-demo',
  styleUrl: './calendar-with-blocking-demo.scss',
  templateUrl: './calendar-with-blocking-demo.html',
})
export class CalendarWithBlockingDemo {
  protected calendarMode = model<'single' | 'range'>('single');
  protected selectedDate = model<Date | null>(null);
  protected selectedDateRange = model<[Date | null, Date | null]>([null, null]);
  protected disableWeekends = model<boolean>(true);
  protected holidays: string[] = []

  modeOptions: RadioOption[] = [
    { label: 'Single', value: 'single' },
    { label: 'Range', value: 'range' },
  ];

  protected clearDate() {
    if (this.calendarMode() === 'single') {
      return this.selectedDate.set(null);
    }
    if (this.calendarMode() === 'range') {
      return this.selectedDateRange.set([null, null]);
    }
  }

  protected isDisabled() {
    if (this.calendarMode() === 'single') {
      return this.selectedDate() === null;
    }
    if (this.calendarMode() === 'range') {
      return this.selectedDateRange()[0] === null;
    }
    return false;
  }
}
