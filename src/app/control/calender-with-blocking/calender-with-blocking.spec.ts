import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalenderWithBlocking, CalendarDate } from './calender-with-blocking';

describe('CalenderWithBlocking', () => {
  let component: CalenderWithBlocking;
  let fixture: ComponentFixture<CalenderWithBlocking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderWithBlocking],
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderWithBlocking);
    component = fixture.componentInstance;

    // Fix the view date to a predictable month for testing (e.g., October 2026)
    // Accessing protected viewDate signal via component instance or reflection if needed,
    // or we can test relative behavior. Let's set a base view date by calling navigation or setup.
    // Since viewDate is protected, we can instantiate a specific date if we expose a setter,
    // or test relative to `new Date()`. For stability, we use component methods or standard Date logic.
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default input values', () => {
    expect(component.mode()).toBe('single');
    expect(component.disableWeekends()).toBe(false);
    expect(component.holidays()).toEqual([]);
  });

  describe('Month Navigation', () => {
    it('should change the month and update the label', () => {
      // Set viewDate to a known month/year via internal method side-effects or direct inspection
      const initialLabel = (component as any).currentMonthYearLabel();

      // Move to next month
      (component as any).nextMonth();
      fixture.detectChanges();

      const nextLabel = (component as any).currentMonthYearLabel();
      expect(nextLabel).not.toEqual(initialLabel);

      // Move back to previous month
      (component as any).prevMonth();
      fixture.detectChanges();

      expect((component as any).currentMonthYearLabel()).toEqual(initialLabel);
    });
  });

  describe('Grid Generation & Blocking Rules', () => {
    it('should generate a grid containing calendar date objects', () => {
      const grid: CalendarDate[] = (component as any).calendarGrid();
      // Standard calendar grid uses 35 or 42 cells (6 weeks)
      expect(grid.length).toBeGreaterThanOrEqual(35);
      expect(grid[0]).toHaveProperty('date');
      expect(grid[0]).toHaveProperty('dayNum');
      expect(grid[0]).toHaveProperty('isDisabled');
    });

    it('should disable weekends when disableWeekends input is true', async () => {
      fixture.componentRef.setInput('disableWeekends', true);
      fixture.detectChanges();

      const grid: CalendarDate[] = (component as any).calendarGrid();

      // Find a Saturday (6) or Sunday (0) in the grid and verify it is disabled
      const weekendCell = grid.find((cell) => {
        const day = cell.date.getDay();
        return (day === 0 || day === 6) && cell.isCurrentMonth;
      });

      if (weekendCell) {
        expect(weekendCell.isDisabled).toBe(true);
      }
    });

    it('should disable specified holidays', async () => {
      const grid: CalendarDate[] = (component as any).calendarGrid();
      // Pick a current month date from the grid to turn into a mock holiday
      const targetCell = grid.find((cell) => cell.isCurrentMonth);

      if (targetCell) {
        const year = targetCell.date.getFullYear();
        const month = String(targetCell.date.getMonth() + 1).padStart(2, '0');
        const day = String(targetCell.date.getDate()).padStart(2, '0');
        const holidayStr = `${year}-${month}-${day}`;

        fixture.componentRef.setInput('holidays', [holidayStr]);
        fixture.detectChanges();

        const updatedGrid: CalendarDate[] = (component as any).calendarGrid();
        const matchingCell = updatedGrid.find(
          (cell) =>
            cell.date.getFullYear() === targetCell.date.getFullYear() &&
            cell.date.getMonth() === targetCell.date.getMonth() &&
            cell.date.getDate() === targetCell.date.getDate(),
        );

        expect(matchingCell?.isDisabled).toBe(true);
      }
    });
  });

  describe('Single Mode Selection', () => {
    it('should update selectedDate model when clicking an enabled date', () => {
      fixture.componentRef.setInput('mode', 'single');
      fixture.detectChanges();

      const grid: CalendarDate[] = (component as any).calendarGrid();
      const enabledCell = grid.find((cell) => cell.isCurrentMonth && !cell.isDisabled);

      if (enabledCell) {
        (component as any).selectDate(enabledCell);
        fixture.detectChanges();

        expect(component.selectedDate()).toEqual(enabledCell.date);
        expect(enabledCell.isSelected).toBe(false); // Note: isSelected is computed during creation, but model updates state
      }
    });

    it('should not update selectedDate model if the clicked date is disabled', () => {
      fixture.componentRef.setInput('mode', 'single');
      fixture.componentRef.setInput('disableWeekends', true);
      fixture.detectChanges();

      const grid: CalendarDate[] = (component as any).calendarGrid();
      const disabledCell = grid.find((cell) => cell.isDisabled);

      if (disabledCell) {
        const initialSelection = component.selectedDate();
        (component as any).selectDate(disabledCell);
        fixture.detectChanges();

        expect(component.selectedDate()).toEqual(initialSelection);
      }
    });
  });

  describe('Range Mode Selection', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('mode', 'range');
      fixture.detectChanges();
    });

    it('should set range start on first click and complete on second click', () => {
      const grid: CalendarDate[] = (component as any).calendarGrid();
      const enabledCells = grid.filter((cell) => cell.isCurrentMonth && !cell.isDisabled);

      if (enabledCells.length >= 2) {
        const firstClickCell = enabledCells[0];
        const secondClickCell = enabledCells[5]; // Pick a later date

        // First click (sets start)
        (component as any).selectDate(firstClickCell);
        fixture.detectChanges();
        expect(component.selectedRange()).toEqual([firstClickCell.date, null]);

        // Second click (completes range)
        (component as any).selectDate(secondClickCell);
        fixture.detectChanges();
        expect(component.selectedRange()).toEqual([firstClickCell.date, secondClickCell.date]);
      }
    });

    it('should reset range if a date before start is clicked on the second selection step', () => {
      const grid: CalendarDate[] = (component as any).calendarGrid();
      const enabledCells = grid.filter((cell) => cell.isCurrentMonth && !cell.isDisabled);

      if (enabledCells.length >= 3) {
        const date1 = enabledCells[5];
        const date2 = enabledCells[2]; // Earlier date

        // Select initial start
        (component as any).selectDate(date1);
        fixture.detectChanges();

        // Click a date *before* the start date
        (component as any).selectDate(date2);
        fixture.detectChanges();

        // Should reset start to the newly clicked earlier date
        expect(component.selectedRange()).toEqual([date2.date, null]);
      }
    });
  });
});
