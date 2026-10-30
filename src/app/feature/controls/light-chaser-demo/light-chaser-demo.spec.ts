import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightChaserDemo } from './light-chaser-demo';

describe('LightChaserDemo', () => {
  let component: LightChaserDemo;
  let fixture: ComponentFixture<LightChaserDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightChaserDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(LightChaserDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
