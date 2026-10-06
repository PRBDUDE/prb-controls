import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { Copyright } from './copyright';

describe('Copyright Component', () => {
  let fixture: ComponentFixture<Copyright>;
  let component: Copyright;
  let componentRef: ComponentRef<Copyright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Copyright],
    }).compileComponents();

    fixture = TestBed.createComponent(Copyright);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default copyright holder and current year', () => {
    const currentYear = new Date().getFullYear();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(`Programmer Roadblocks © ${currentYear}`);
  });

  it('should update template when copyrightHolder input is changed', () => {
    const currentYear = new Date().getFullYear();
    const compiled = fixture.nativeElement as HTMLElement;

    // Set signal input value via ComponentRef
    componentRef.setInput('copyrightHolder', 'Acme Corp');
    fixture.detectChanges();

    expect(compiled.textContent).toContain(`Acme Corp © ${currentYear}`);
  });
});
