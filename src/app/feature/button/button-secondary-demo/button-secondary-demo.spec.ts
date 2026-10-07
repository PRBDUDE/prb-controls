import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonSecondaryDemo } from './button-secondary-demo';

describe('ButtonSecondaryDemo', () => {
  let component: ButtonSecondaryDemo;
  let fixture: ComponentFixture<ButtonSecondaryDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSecondaryDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonSecondaryDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
