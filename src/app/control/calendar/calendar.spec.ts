import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calendar } from './calendar';

describe('Calendar Component', () => {
  let component: Calendar;
  let fixture: ComponentFixture<Calendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calendar],
    }).compileComponents();

    fixture = TestBed.createComponent(Calendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('Initial State & Computed Properties', () => {
    it('should have default input values', () => {
      expect(component.mode()).toBe('single');
      expect(component.selectedDate()).toBeNull();
      expect(component.selectedRange()).toEqual({ startDate: null, endDate: null });
    });

    it('should compute the correct month name for the viewDate', () => {
      // Force viewDate to a specific known date (e.g., January 2026)
      component.viewDate.set(new Date(2026, 0, 15));

      expect(component.currentMonthName()).toContain('January');
      expect(component.currentMonthName()).toContain('2026');
    });

    it('should generate a 42-item grid (6 weeks) for the calendar view', () => {
      component.viewDate.set(new Date(2026, 0, 15)); // January 2026
      const grid = component.calendarGrid();

      expect(grid.length).toBe(42);
      // Check that at least some items belong to the current month
      const currentMonthDays = grid.filter((d) => d.currentMonth);
      expect(currentMonthDays.length).toBe(31); // January has 31 days
    });
  });

  describe('Navigation Handlers', () => {
    it('should move to the previous month correctly', () => {
      component.viewDate.set(new Date(2026, 5, 10)); // June 2026
      component.prevMonth();

      expect(component.viewDate().getMonth()).toBe(4); // May
      expect(component.viewDate().getFullYear()).toBe(2026);
    });

    it('should move to the next month correctly', () => {
      component.viewDate.set(new Date(2026, 5, 10)); // June 2026
      component.nextMonth();

      expect(component.viewDate().getMonth()).toBe(6); // July
      expect(component.viewDate().getFullYear()).toBe(2026);
    });
  });

  describe('Single Selection Mode', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('mode', 'single');
    });

    it('should update selectedDate when clicking a date', () => {
      const testDate = new Date(2026, 0, 15);
      component.selectDate(testDate);

      expect(component.selectedDate()).toEqual(testDate);
      expect(component.isSelected(testDate)).toBe(true);
    });

    it('should correctly identify the same day for selection UI helper', () => {
      const testDate = new Date(2026, 0, 15);
      const sameDateDifferentTime = new Date(2026, 0, 15, 14, 30);

      component.selectDate(testDate);

      expect(component.isSelected(sameDateDifferentTime)).toBe(true);
    });
  });

  describe('Range Selection Mode', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('mode', 'range');
    });

    it('should start a fresh range selection when no dates are selected', () => {
      const startDate = new Date(2026, 0, 10);
      component.selectDate(startDate);

      expect(component.selectedRange()).toEqual({
        startDate: startDate,
        endDate: null,
      });
      expect(component.isSelected(startDate)).toBe(true);
      expect(component.isInRange(new Date(2026, 0, 12))).toBe(false);
    });

    it('should complete the range when clicking a later end date', () => {
      const startDate = new Date(2026, 0, 10);
      const endDate = new Date(2026, 0, 15);

      component.selectDate(startDate);
      component.selectDate(endDate);

      expect(component.selectedRange()).toEqual({
        startDate,
        endDate,
      });
      expect(component.isSelected(startDate)).toBe(true);
      expect(component.isSelected(endDate)).toBe(true);
      expect(component.isInRange(new Date(2026, 0, 12))).toBe(true);
      expect(component.isInRange(new Date(2026, 0, 16))).toBe(false);
    });

    it('should reset the start date if clicked date is earlier than current start date', () => {
      const initialStart = new Date(2026, 0, 15);
      const earlierStart = new Date(2026, 0, 10);

      component.selectDate(initialStart);
      component.selectDate(earlierStart);

      expect(component.selectedRange()).toEqual({
        startDate: earlierStart,
        endDate: null,
      });
    });

    it('should start a new range if both start and end dates were already chosen', () => {
      const start1 = new Date(2026, 0, 5);
      const end1 = new Date(2026, 0, 10);
      const newStart = new Date(2026, 0, 20);

      component.selectDate(start1);
      component.selectDate(end1);
      // Both are set now, clicking a third time should wipe and start fresh
      component.selectDate(newStart);

      expect(component.selectedRange()).toEqual({
        startDate: newStart,
        endDate: null,
      });
    });
  });
});
