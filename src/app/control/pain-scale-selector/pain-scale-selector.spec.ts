import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PainScaleSelector } from './pain-scale-selector';

describe('PainScaleSelector', () => {
  let component: PainScaleSelector;
  let fixture: ComponentFixture<PainScaleSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainScaleSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(PainScaleSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
