import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurfacePalette } from './surface-palette';

describe('SurfacePalette', () => {
  let component: SurfacePalette;
  let fixture: ComponentFixture<SurfacePalette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurfacePalette],
    }).compileComponents();

    fixture = TestBed.createComponent(SurfacePalette);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
