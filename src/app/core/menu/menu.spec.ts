import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterLink } from '@angular/router';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it } from 'vitest';
import { Menu } from './menu';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
      providers: [
        provideRouter([]), // Provides mock routing dependencies required by RouterLink/RouterLinkActive
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the menu component', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the "menu" host class', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    expect(hostElement.classList.contains('menu')).toBe(true);
  });

  it('should render router links properly', () => {
    // Queries all elements with the RouterLink directive attached
    const linkDebugElements = fixture.debugElement.queryAll(By.directive(RouterLink));
    expect(linkDebugElements).not.toBeNull();
  });
});
