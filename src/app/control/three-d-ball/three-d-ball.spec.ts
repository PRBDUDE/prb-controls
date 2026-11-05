import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreeDBall } from './three-d-ball';

describe('ThreeDBall', () => {
  let component: ThreeDBall;
  let fixture: ComponentFixture<ThreeDBall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDBall],
    }).compileComponents();

    fixture = TestBed.createComponent(ThreeDBall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
