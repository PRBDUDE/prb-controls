import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorCard } from './color-card';
import { describe, beforeEach, it, expect } from 'vitest';

describe('ColorCard Component', () => {
  let component: ColorCard;
  let fixture: ComponentFixture<ColorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Set required input to prevent errors during change detection
    fixture.componentRef.setInput('name', 'blue');
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  describe('toProperCase', () => {
    it('should capitalize the first letter of a string', () => {
      expect(component.toProperCase('primary')).toBe('Primary');
      expect(component.toProperCase('red')).toBe('Red');
    });
  });

  describe('getCssVarString', () => {
    it('should format the CSS variable string correctly based on input name and shade', () => {
      fixture.componentRef.setInput('name', 'primary');
      fixture.detectChanges();

      const cssVar = component.getCssVarString(500);

      expect(cssVar).toBe('var(--prb-color-primary-500)');
    });
  });

  describe('shades', () => {
    it('should contain the expected array of shades', () => {
      expect(component.shades).toEqual([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);
    });
  });
});
