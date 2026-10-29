import { Component, model } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { Calendar, DateRange } from '@control/calendar/calendar';
import { DatePipe } from '@angular/common';
import { RadioGroup, RadioOption } from '@control/radio-group/radio-group';
import { FormsModule } from '@angular/forms';
import { CodeColoring } from '@core/code-coloring';
import { Indent } from '@core/indent';

@Component({
  imports: [
    JellyContainer,
    CardContainer,
    CardHeader,
    CardBody,
    Calendar,
    DatePipe,
    RadioGroup,
    FormsModule,
    CodeColoring,
    Indent,
  ],
  selector: 'prb-calendar-demo',
  styleUrl: './calendar-demo.scss',
  templateUrl: './calendar-demo.html',
})
export class CalendarDemo {
  protected calendarMode = model<'single' | 'range'>('single');
  protected singleDate = model<Date | null>(null);
  protected dateRange = model<DateRange>({ startDate: null, endDate: null });

  modeOptions: RadioOption[] = [
    { label: 'Single', value: 'single' },
    { label: 'Range', value: 'range' },
  ];
}
