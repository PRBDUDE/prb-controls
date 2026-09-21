import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiGeneratedDemo } from './ai-generated-demo';

describe('AiGeneratedDemo', () => {
  let component: AiGeneratedDemo;
  let fixture: ComponentFixture<AiGeneratedDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiGeneratedDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(AiGeneratedDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
