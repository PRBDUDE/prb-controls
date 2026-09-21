import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarRatingDemo } from './star-rating-demo';

describe('StarRatingDemo', () => {
  let component: StarRatingDemo;
  let fixture: ComponentFixture<StarRatingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(StarRatingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
