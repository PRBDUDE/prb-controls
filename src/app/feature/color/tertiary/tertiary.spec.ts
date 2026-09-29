import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tertiary } from './tertiary';

describe('Tertiary', () => {
  let component: Tertiary;
  let fixture: ComponentFixture<Tertiary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tertiary],
    }).compileComponents();

    fixture = TestBed.createComponent(Tertiary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
