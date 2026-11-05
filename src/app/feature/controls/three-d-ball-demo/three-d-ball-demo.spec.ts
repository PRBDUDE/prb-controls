import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreeDBallDemo } from './three-d-ball-demo';

describe('ThreeDBallDemo', () => {
  let component: ThreeDBallDemo;
  let fixture: ComponentFixture<ThreeDBallDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDBallDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ThreeDBallDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
