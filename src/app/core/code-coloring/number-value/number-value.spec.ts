import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberValue } from './number-value';

describe('NumberValue', () => {
  let component: NumberValue;
  let fixture: ComponentFixture<NumberValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberValue],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberValue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
