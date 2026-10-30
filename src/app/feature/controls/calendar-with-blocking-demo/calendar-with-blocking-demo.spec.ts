import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarWithBlockingDemo } from './calendar-with-blocking-demo';

describe('CalendarWithBlockingDemo', () => {
  let component: CalendarWithBlockingDemo;
  let fixture: ComponentFixture<CalendarWithBlockingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarWithBlockingDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarWithBlockingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
