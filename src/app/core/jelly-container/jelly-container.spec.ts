import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JellyContainer } from './jelly-container';

describe('JellyContainer', () => {
  let component: JellyContainer;
  let fixture: ComponentFixture<JellyContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(JellyContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
