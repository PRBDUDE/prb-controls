import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';

import { App } from './app'; // Adjust relative path if needed
import { Footer } from '@core/footer';
import { Header } from '@core/header';
import { Layout } from '@core/layout';
import { Content } from '@core/content/content';
import { Menu } from '@core/menu';
import { MockFooter } from '@mock/mock-footer';
import { MockHeader } from '@mock/mock-header';
import { MockLayout } from '@mock/mock-layout';
import { MockContent } from '@mock/mock-content';
import { MockMenu } from '@mock/mock-menu';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]), // Provides RouterOutlet dependencies
      ],
    })
      // Override child components with mocks so sub-dependencies don't break the test
      .overrideComponent(App, {
        remove: { imports: [Footer, Header, Layout, Content, Menu] },
        add: { imports: [MockFooter, MockHeader, MockLayout, MockContent, MockMenu] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the component DOM', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeDefined();
  });
});
