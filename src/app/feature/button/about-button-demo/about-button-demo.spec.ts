import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutButtonDemo } from './about-button-demo';

describe('AboutButtonDemo', () => {
  let component: AboutButtonDemo;
  let fixture: ComponentFixture<AboutButtonDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutButtonDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutButtonDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
