import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Indent } from './indent';
import { describe, it, expect, beforeEach } from 'vitest';
import { Component } from '@angular/core';

describe('Indent Component', () => {
  let fixture: ComponentFixture<Indent>;
  let component: Indent;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indent],
    }).compileComponents();

    fixture = TestBed.createComponent(Indent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render content projected via ng-content', async () => {
    // Test with projected content
    @Component({
      template: `<indent-3>Indented Text Content</indent-3>`,
      imports: [Indent],
    })
    class TestHostComponent {}

    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const indentElement = hostFixture.nativeElement.querySelector('indent-3');
    expect(indentElement).toBeTruthy();
    expect(indentElement.textContent.trim()).toBe('Indented Text Content');
  });

  it(`should apply correct margin-left for indent-1`, () => {
    @Component({
      template: `<indent-1></indent-1>`,
      imports: [Indent],
    })
    class DynamicTestHost {}

    const hostFixture = TestBed.createComponent(DynamicTestHost);
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`indent-1`);
    const computedStyle = window.getComputedStyle(element);

    expect(computedStyle.marginLeft).toBe(`1rem`);
  });

  it(`should apply correct margin-left for indent-2`, () => {
    @Component({
      template: `<indent-2></indent-2>`,
      imports: [Indent],
    })
    class DynamicTestHost {}

    const hostFixture = TestBed.createComponent(DynamicTestHost);
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`indent-2`);
    const computedStyle = window.getComputedStyle(element);

    expect(computedStyle.marginLeft).toBe(`2rem`);
  });

  it(`should apply correct margin-left for indent-3`, () => {
    @Component({
      template: `<indent-3></indent-3>`,
      imports: [Indent],
    })
    class DynamicTestHost {}

    const hostFixture = TestBed.createComponent(DynamicTestHost);
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`indent-3`);
    const computedStyle = window.getComputedStyle(element);

    expect(computedStyle.marginLeft).toBe(`3rem`);
  });

  it(`should apply correct margin-left for indent-4`, () => {
    @Component({
      template: `<indent-4></indent-4>`,
      imports: [Indent],
    })
    class DynamicTestHost {}

    const hostFixture = TestBed.createComponent(DynamicTestHost);
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`indent-4`);
    const computedStyle = window.getComputedStyle(element);

    expect(computedStyle.marginLeft).toBe(`4rem`);
  });

  it(`should apply correct margin-left for indent-5`, () => {
    @Component({
      template: `<indent-5></indent-5>`,
      imports: [Indent],
    })
    class DynamicTestHost {}

    const hostFixture = TestBed.createComponent(DynamicTestHost);
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`indent-5`);
    const computedStyle = window.getComputedStyle(element);

    expect(computedStyle.marginLeft).toBe(`5rem`);
  });

  it(`should apply correct margin-left for indent-6`, () => {
    @Component({
      template: `<indent-6></indent-6>`,
      imports: [Indent],
    })
    class DynamicTestHost {}

    const hostFixture = TestBed.createComponent(DynamicTestHost);
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`indent-6`);
    const computedStyle = window.getComputedStyle(element);

    expect(computedStyle.marginLeft).toBe(`6rem`);
  });

  it(`should apply correct margin-left for indent-7`, () => {
    @Component({
      template: `<indent-7></indent-7>`,
      imports: [Indent],
    })
    class DynamicTestHost {}

    const hostFixture = TestBed.createComponent(DynamicTestHost);
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`indent-7`);
    const computedStyle = window.getComputedStyle(element);

    expect(computedStyle.marginLeft).toBe(`7rem`);
  });

  it(`should apply correct margin-left for indent-8`, () => {
    @Component({
      template: `<indent-8></indent-8>`,
      imports: [Indent],
    })
    class DynamicTestHost {}

    const hostFixture = TestBed.createComponent(DynamicTestHost);
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`indent-8`);
    const computedStyle = window.getComputedStyle(element);

    expect(computedStyle.marginLeft).toBe(`8rem`);
  });

  it(`should apply correct margin-left for indent-9`, () => {
    @Component({
      template: `<indent-9></indent-9>`,
      imports: [Indent],
    })
    class DynamicTestHost {}

    const hostFixture = TestBed.createComponent(DynamicTestHost);
    hostFixture.detectChanges();

    const element = hostFixture.nativeElement.querySelector(`indent-9`);
    const computedStyle = window.getComputedStyle(element);

    expect(computedStyle.marginLeft).toBe(`9rem`);
  });
});
