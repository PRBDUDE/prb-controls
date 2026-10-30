import { Component, computed, input, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CalendarMode = 'single' | 'range';

export interface CalendarDate {
  date: Date;
  dayNum: number;
  isCurrentMonth: boolean;
  isDisabled: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
}

@Component({
  selector: 'prb-calender-with-blocking',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './calender-with-blocking.scss',
  templateUrl: './calender-with-blocking.html',
})
export class CalenderWithBlocking {
  // --- Inputs & Two-Way Models ---
  readonly mode = input<CalendarMode>('single');

  // Two-way binding for single date selection (Date or null)
  readonly selectedDate = model<Date | null>(null);

  // Two-way binding for date range selection ([start, end] or [null, null])
  readonly selectedRange = model<[Date | null, Date | null]>([null, null]);

  // Flags & Configuration
  readonly disableWeekends = input<boolean>(false);
  readonly holidays = input<string[]>([]); // Format: 'YYYY-MM-DD'

  // --- Internal State ---
  protected viewDate = signal<Date>(new Date());

  protected weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  protected currentMonthYearLabel = computed(() => {
    const d = this.viewDate();
    return d.toLocaleString('default', { month: 'long', year: 'numeric' });
  });

  // --- Computed Grid Generation ---
  protected calendarGrid = computed<CalendarDate[]>(() => {
    const year = this.viewDate().getFullYear();
    const month = this.viewDate().getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDayDate = new Date(year, month + 1, 0).getDate();
    const prevLastDayDate = new Date(year, month, 0).getDate();

    const grid: CalendarDate[] = [];
    const holidaySet = new Set(this.holidays());

    // 1. Previous month trailing days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevLastDayDate - i);
      grid.push(this.createCalendarDateObj(date, false, holidaySet));
    }

    // 2. Current month days
    for (let i = 1; i <= lastDayDate; i++) {
      const date = new Date(year, month, i);
      grid.push(this.createCalendarDateObj(date, true, holidaySet));
    }

    // 3. Next month leading days to complete 42-cell grid (6 weeks)
    const totalCellsSoFar = grid.length;
    const remainingCells = totalCellsSoFar <= 35 ? 35 - totalCellsSoFar : 42 - totalCellsSoFar;
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(year, month + 1, i);
      grid.push(this.createCalendarDateObj(date, false, holidaySet));
    }

    return grid;
  });

  private createCalendarDateObj(
    date: Date,
    isCurrentMonth: boolean,
    holidaySet: Set<string>,
  ): CalendarDate {
    const dateString = this.formatDateKey(date);
    const dayOfWeek = date.getDay();

    // Check if weekend
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isHoliday = holidaySet.has(dateString);
    const isDisabled = (this.disableWeekends() && isWeekend) || isHoliday;

    const singleSel = this.selectedDate();
    const [rangeStart, rangeEnd] = this.selectedRange();

    let isSelected = false;
    let isInRange = false;
    let isRangeStart = false;
    let isRangeEnd = false;

    if (this.mode() === 'single' && singleSel) {
      isSelected = this.isSameDay(date, singleSel);
    } else if (this.mode() === 'range') {
      if (rangeStart) isRangeStart = this.isSameDay(date, rangeStart);
      if (rangeEnd) isRangeEnd = this.isSameDay(date, rangeEnd);

      if (rangeStart && rangeEnd) {
        isInRange = date > rangeStart && date < rangeEnd;
      }
    }

    return {
      date,
      dayNum: date.getDate(),
      isCurrentMonth,
      isDisabled,
      isSelected,
      isInRange,
      isRangeStart,
      isRangeEnd,
    };
  }

  // --- Navigation Handlers ---
  protected prevMonth(): void {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }

  protected nextMonth(): void {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }

  // --- Selection Actions ---
  protected selectDate(cell: CalendarDate): void {
    if (cell.isDisabled) return;

    if (this.mode() === 'single') {
      this.selectedDate.set(cell.date);
    } else {
      const [start, end] = this.selectedRange();

      if (!start || (start && end)) {
        // Start a fresh range selection
        this.selectedRange.set([cell.date, null]);
      } else if (start && !end) {
        if (cell.date < start) {
          // If clicked date is before start, reset start
          this.selectedRange.set([cell.date, null]);
        } else {
          // Complete the range
          this.selectedRange.set([start, cell.date]);
        }
      }
    }
  }

  isStartRange(date: Date): boolean {
    if (this.mode() !== 'range') return false;
    const [startDate, endDate] = this.selectedRange();
    if (startDate && endDate && startDate.getUTCDate() != endDate.getUTCDate()) {
      return date.getUTCDate() === startDate.getUTCDate();
    }
    return false;
  }

  isEndRange(date: Date): boolean {
    if (this.mode() !== 'range') return false;
    const [startDate, endDate] = this.selectedRange();
    if (startDate && endDate && startDate.getUTCDate() != endDate.getUTCDate()) {
      return date.getUTCDate() === endDate.getUTCDate();
    }
    return false;
  }

  // --- Utility Helpers ---
  private isSameDay(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  private formatDateKey(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
}
