import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PainScaleDemo } from './pain-scale-demo';

describe('PainScaleDemo', () => {
  let component: PainScaleDemo;
  let fixture: ComponentFixture<PainScaleDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainScaleDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(PainScaleDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
