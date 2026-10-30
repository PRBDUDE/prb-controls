import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalenderWithBlocking } from './calender-with-blocking';

describe('CalenderWithBlocking', () => {
  let component: CalenderWithBlocking;
  let fixture: ComponentFixture<CalenderWithBlocking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderWithBlocking],
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderWithBlocking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
