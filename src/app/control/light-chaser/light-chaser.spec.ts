import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightChaser } from './light-chaser';

describe('LightChaser', () => {
  let component: LightChaser;
  let fixture: ComponentFixture<LightChaser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightChaser],
    }).compileComponents();

    fixture = TestBed.createComponent(LightChaser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
