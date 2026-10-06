import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ThemeToggle } from './theme-toggle';

describe('ThemeToggle', () => {
  let component: ThemeToggle;
  let fixture: ComponentFixture<ThemeToggle>;
  let documentRef: Document;

  const mockMatchMedia = (matches: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  };

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [ThemeToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggle);
    component = fixture.componentInstance;
    documentRef = TestBed.inject(DOCUMENT);

    documentRef.documentElement.classList.remove('prb-dark-theme');
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit Initialization', () => {
    it('should enable dark mode if localStorage has "theme" set to "dark"', () => {
      localStorage.setItem('theme', 'dark');
      mockMatchMedia(false);

      fixture.detectChanges();

      expect(component.isDarkMode).toBe(true);
      expect(documentRef.documentElement.classList.contains('prb-dark-theme')).toBe(true);
    });

    it('should enable dark mode if no saved theme exists and system prefers dark mode', () => {
      mockMatchMedia(true);

      fixture.detectChanges();

      expect(component.isDarkMode).toBe(true);
      expect(documentRef.documentElement.classList.contains('prb-dark-theme')).toBe(true);
    });

    it('should NOT enable dark mode if localStorage has "theme" set to "light"', () => {
      localStorage.setItem('theme', 'light');
      mockMatchMedia(true);

      fixture.detectChanges();

      expect(component.isDarkMode).toBe(false);
      expect(documentRef.documentElement.classList.contains('prb-dark-theme')).toBe(false);
    });

    it('should NOT enable dark mode if no saved theme exists and system prefers light mode', () => {
      mockMatchMedia(false);

      fixture.detectChanges();

      expect(component.isDarkMode).toBe(false);
      expect(documentRef.documentElement.classList.contains('prb-dark-theme')).toBe(false);
    });
  });

  describe('toggleTheme', () => {
    beforeEach(() => {
      mockMatchMedia(false);
      fixture.detectChanges();
    });

    it('should enable dark mode when currently in light mode', () => {
      component.toggleTheme();

      expect(component.isDarkMode).toBe(true);
      expect(documentRef.documentElement.classList.contains('prb-dark-theme')).toBe(true);
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('should disable dark mode when currently in dark mode', () => {
      component.toggleTheme();
      expect(component.isDarkMode).toBe(true);

      component.toggleTheme();

      expect(component.isDarkMode).toBe(false);
      expect(documentRef.documentElement.classList.contains('prb-dark-theme')).toBe(false);
      expect(localStorage.getItem('theme')).toBe('light');
    });
  });
});
