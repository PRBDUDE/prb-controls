import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeColoring } from './code-coloring';

describe('CodeColoring', () => {
  let component: CodeColoring;
  let fixture: ComponentFixture<CodeColoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeColoring],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeColoring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
