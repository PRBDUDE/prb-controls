import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing'; // Adjust path as needed
import { Comment } from '@core/comment';

// Host component to test content projection (<ng-content>)
@Component({
  imports: [Comment],
  template: `<prb-comment><p data-testid="projected-content">Hello World</p></prb-comment>`,
})
class TestHostComponent {}

describe('Comment Component', () => {
  let fixture: ComponentFixture<Comment>;
  let component: Comment;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Comment
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Comment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should render projected content inside ng-content', () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const hostElement: HTMLElement = hostFixture.nativeElement;
    const projectedElement = hostElement.querySelector('[data-testid="projected-content"]');

    expect(projectedElement).not.toBeNull();
    expect(projectedElement?.textContent).toBe('Hello World');
  });
});
