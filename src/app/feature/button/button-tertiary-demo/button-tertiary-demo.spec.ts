import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonTertiaryDemo } from './button-tertiary-demo';

describe('ButtonTertiaryDemo', () => {
  let component: ButtonTertiaryDemo;
  let fixture: ComponentFixture<ButtonTertiaryDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTertiaryDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonTertiaryDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
