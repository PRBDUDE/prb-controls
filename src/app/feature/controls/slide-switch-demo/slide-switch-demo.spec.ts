import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideSwitchDemo } from './slide-switch-demo';

describe('SlideSwitchDemo', () => {
  let component: SlideSwitchDemo;
  let fixture: ComponentFixture<SlideSwitchDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideSwitchDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideSwitchDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
