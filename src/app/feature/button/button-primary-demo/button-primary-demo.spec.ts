import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonPrimaryDemo } from './button-primary-demo';

describe('ButtonPrimaryDemo', () => {
  let component: ButtonPrimaryDemo;
  let fixture: ComponentFixture<ButtonPrimaryDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPrimaryDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPrimaryDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
