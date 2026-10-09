import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideSwitch } from './slide-switch';

describe('SlideSwitch', () => {
  let component: SlideSwitch;
  let fixture: ComponentFixture<SlideSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
