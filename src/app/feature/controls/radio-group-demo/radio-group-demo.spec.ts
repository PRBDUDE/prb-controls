import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioGroupDemo } from './radio-group-demo';

describe('RadioGroupDemo', () => {
  let component: RadioGroupDemo;
  let fixture: ComponentFixture<RadioGroupDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioGroupDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
