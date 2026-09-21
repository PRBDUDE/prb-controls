import { Component, DOCUMENT, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'prb-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  isDarkMode = false;
  private readonly className = 'prb-dark-theme';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    // Check saved preference or system preference on load
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.enableDarkMode();
    }
  }

  toggleTheme(): void {
    if (this.isDarkMode) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  private enableDarkMode(): void {
    this.isDarkMode = true;
    this.renderer.addClass(this.document.documentElement, this.className);
    localStorage.setItem('theme', 'dark');
  }

  private disableDarkMode(): void {
    this.isDarkMode = false;
    this.renderer.removeClass(this.document.documentElement, this.className);
    localStorage.setItem('theme', 'light');
  }
}
