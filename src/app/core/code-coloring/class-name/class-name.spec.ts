import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassName } from './class-name';

describe('ClassName', () => {
  let component: ClassName;
  let fixture: ComponentFixture<ClassName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassName],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
