import { Component, computed, input, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CalendarMode = 'single' | 'range';

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

@Component({
  selector: 'prb-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {
  // Inputs & Two-way model bindings using Angular Signals
  mode = input<CalendarMode>('single');

  // For single selection mode
  selectedDate = model<Date | null>(null);

  // For range selection mode
  selectedRange = model<DateRange>({ startDate: null, endDate: null });

  // Viewport navigation state (defaults to current year/month)
  viewDate = signal<Date>(new Date());

  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Month & Year header display
  currentMonthName = computed(() => {
    return this.viewDate().toLocaleString('default', { month: 'long', year: 'numeric' });
  });

  // Dynamically generate the grid days for the active month view
  calendarGrid = computed(() => {
    const year = this.viewDate().getFullYear();
    const month = this.viewDate().getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Padding for previous month's trailing days
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthDays - i);
      days.push({ date, currentMonth: false });
    }

    // Current month's days
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      days.push({ date, currentMonth: true });
    }

    // Trailing padding to complete the last row (up to 35 or 42 grid blocks)
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      days.push({ date, currentMonth: false });
    }

    return days;
  });

  // Navigation handlers
  prevMonth() {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }

  nextMonth() {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }

  // Handle day click based on selection configuration
  selectDate(date: Date) {
    if (this.mode() === 'single') {
      this.selectedDate.set(date);
    } else {
      const range = this.selectedRange();
      const { startDate, endDate } = range;

      if (!startDate || (startDate && endDate)) {
        // Start a fresh range selection
        this.selectedRange.set({ startDate: date, endDate: null });
      } else if (startDate && !endDate) {
        if (date < startDate) {
          // If clicked date is earlier than start date, reset start date
          this.selectedRange.set({ startDate: date, endDate: null });
        } else {
          // Complete the range
          this.selectedRange.set({ startDate, endDate: date });
        }
      }
    }
  }

  // UI Helper checkers
  isSelected(date: Date): boolean {
    if (this.mode() === 'single') {
      const s = this.selectedDate();
      return !!s && this.isSameDay(date, s);
    } else {
      const { startDate, endDate } = this.selectedRange();
      return (
        (!!startDate && this.isSameDay(date, startDate)) ||
        (!!endDate && this.isSameDay(date, endDate))
      );
    }
  }

  isInRange(date: Date): boolean {
    if (this.mode() !== 'range') return false;
    const { startDate, endDate } = this.selectedRange();
    if (startDate && endDate) {
      return date > startDate && date < endDate;
    }
    return false;
  }

  private isSameDay(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }
}
