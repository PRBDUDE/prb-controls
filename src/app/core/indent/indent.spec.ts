import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { Indent } from './indent';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

// Wrapper component to test input changes dynamically
@Component({
  standalone: true,
  imports: [Indent],
  template: `
    <prb-indent [level]="testLevel()">
      <span data-testid="content">Test Content</span>
    </prb-indent>
  `,
})
class TestHostComponent {
  testLevel = signal<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>(1);
}

describe('Indent Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        Indent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render content via ng-content', () => {
    const projectedContent = fixture.nativeElement.querySelector('[data-testid="content"]');
    expect(projectedContent).not.toBeNull();
    expect(projectedContent?.textContent).toBe('Test Content');
  });

  it('should apply the default class "indent-1"', () => {
    const divElement = fixture.nativeElement.querySelector('div');
    console.log('classList: ',divElement.classList);
    expect(divElement.classList.contains('indent-1')).toBe(true);
  });

  it('should update the class when the input level=2', () => {
    hostComponent.testLevel.set(2);
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.classList.contains('indent-2')).toBe(true);
    expect(divElement.classList.contains('indent-1')).toBe(false);
  });

  it('should update the class when the input level=3', () => {
    hostComponent.testLevel.set(3);
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.classList.contains('indent-3')).toBe(true);
    expect(divElement.classList.contains('indent-1')).toBe(false);
  });

  it('should update the class when the input level=4', () => {
    hostComponent.testLevel.set(4);
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.classList.contains('indent-4')).toBe(true);
    expect(divElement.classList.contains('indent-1')).toBe(false);
  });

  it('should update the class when the input level=5', () => {
    hostComponent.testLevel.set(5);
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.classList.contains('indent-5')).toBe(true);
    expect(divElement.classList.contains('indent-1')).toBe(false);
  });

  it('should update the class when the input level=6', () => {
    hostComponent.testLevel.set(6);
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.classList.contains('indent-6')).toBe(true);
    expect(divElement.classList.contains('indent-1')).toBe(false);
  });

  it('should update the class when the input level=7', () => {
    hostComponent.testLevel.set(7);
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.classList.contains('indent-7')).toBe(true);
    expect(divElement.classList.contains('indent-1')).toBe(false);
  });

  it('should update the class when the input level=8', () => {
    hostComponent.testLevel.set(8);
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.classList.contains('indent-8')).toBe(true);
    expect(divElement.classList.contains('indent-1')).toBe(false);
  });

  it('should update the class when the input level=9', () => {
    hostComponent.testLevel.set(9);
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.classList.contains('indent-9')).toBe(true);
    expect(divElement.classList.contains('indent-1')).toBe(false);
  });
});
