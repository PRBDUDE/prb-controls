import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { Header } from './header';
import { ThemeToggle } from '@core/theme-toggle';
import { MockThemeToggle } from '@mock/mock-theme-toggle';

describe('Header Component', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    })
      // Override ThemeToggle import inside Header with standard Angular TestBed setup
      .overrideComponent(Header, {
        remove: { imports: [ThemeToggle] },
        add: { imports: [MockThemeToggle] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should render the component element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeDefined();
  });
});
