import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeToggle } from './theme-toggle';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ThemeToggle', () => {
  let component: ThemeToggle;
  let fixture: ComponentFixture<ThemeToggle>;
  let mockDocument: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ThemeToggle
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggle);
    component = fixture.componentInstance;
    mockDocument = TestBed.inject(DOCUMENT);

    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should enable dark mode if saved theme in localStorage is "dark"', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('dark');
      vi.spyOn(window, 'matchMedia').mockReturnValue({
        matches: false,
      } as MediaQueryList);

      fixture.detectChanges(); // Calls ngOnInit

      expect(component.isDarkMode).toBe(true);
      expect(mockDocument.documentElement.classList.contains('prb-dark-theme')).toBe(true);
    });

    it('should enable dark mode if no saved theme but system prefers dark mode', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
      vi.spyOn(window, 'matchMedia').mockReturnValue({
        matches: true,
      } as MediaQueryList);

      fixture.detectChanges(); // Calls ngOnInit

      expect(component.isDarkMode).toBe(true);
      expect(mockDocument.documentElement.classList.contains('prb-dark-theme')).toBe(true);
    });
  });

  describe('toggleTheme', () => {
    it('should enable dark mode when currently in light mode', () => {
      component.isDarkMode = false;

      component.toggleTheme();

      expect(component.isDarkMode).toBe(true);
      expect(mockDocument.documentElement.classList.contains('prb-dark-theme')).toBe(true);
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('should disable dark mode when currently in dark mode', () => {
      // First enable dark mode
      component.isDarkMode = true;
      mockDocument.documentElement.classList.add('prb-dark-theme');

      component.toggleTheme();

      expect(component.isDarkMode).toBe(false);
      expect(mockDocument.documentElement.classList.contains('prb-dark-theme')).toBe(false);
      expect(localStorage.getItem('theme')).toBe('light');
    });
  });
});
