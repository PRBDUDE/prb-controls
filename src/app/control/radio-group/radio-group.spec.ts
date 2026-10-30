import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RadioGroup, RadioOption } from './radio-group';
import { beforeEach, describe, expect, it } from 'vitest';

describe('RadioGroup', () => {
  const mockOptions: RadioOption[] = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroup, ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(RadioGroup);
    const component = fixture.componentInstance;

    // Provide required inputs
    fixture.componentRef.setInput('options', mockOptions);
    fixture.componentRef.setInput('name', 'test-group');
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should render all options correctly', () => {
    const fixture = TestBed.createComponent(RadioGroup);
    fixture.componentRef.setInput('options', mockOptions);
    fixture.componentRef.setInput('name', 'test-group');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const radioInputs = compiled.querySelectorAll('input[type="radio"]');
    const labels = compiled.querySelectorAll('.radio-label span:not(.radio-color)');

    expect(radioInputs.length).toBe(3);
    expect(labels[0].textContent?.trim()).toBe('Option 1');
    expect(labels[1].textContent?.trim()).toBe('Option 2');
    expect(labels[2].textContent?.trim()).toBe('Option 3');
  });

  it('should apply vertical orientation by default and horizontal when specified', () => {
    const fixture = TestBed.createComponent(RadioGroup);
    fixture.componentRef.setInput('options', mockOptions);
    fixture.componentRef.setInput('name', 'test-group');
    fixture.detectChanges();

    const groupDiv = fixture.nativeElement.querySelector('.radio-group');
    expect(groupDiv.classList.contains('vertical')).toBe(true);
    expect(groupDiv.classList.contains('horizontal')).toBe(false);

    // Switch to horizontal
    fixture.componentRef.setInput('orientation', 'horizontal');
    fixture.detectChanges();

    expect(groupDiv.classList.contains('vertical')).toBe(false);
    expect(groupDiv.classList.contains('horizontal')).toBe(true);
  });

  it('should update value and trigger selection when a radio option is clicked', () => {
    const fixture = TestBed.createComponent(RadioGroup);
    const component = fixture.componentInstance;
    fixture.componentRef.setInput('options', mockOptions);
    fixture.componentRef.setInput('name', 'test-group');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const radioInputs = compiled.querySelectorAll(
      'input[type="radio"]',
    ) as NodeListOf<HTMLInputElement>;

    // Click the second option
    radioInputs[1].click();
    fixture.detectChanges();

    expect(component.value()).toBe('opt2');
    expect(radioInputs[1].checked).toBe(true);
  });

  it('should disable all inputs when disabled input is true', () => {
    const fixture = TestBed.createComponent(RadioGroup);
    fixture.componentRef.setInput('options', mockOptions);
    fixture.componentRef.setInput('name', 'test-group');
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const radioInputs = compiled.querySelectorAll(
      'input[type="radio"]',
    ) as NodeListOf<HTMLInputElement>;
    const label = compiled.querySelector('.radio-label');

    expect(label?.classList.contains('disabled')).toBe(true);
    radioInputs.forEach((input) => {
      expect(input.disabled).toBe(true);
    });
  });

  describe('ControlValueAccessor Integration', () => {
    @Component({
      imports: [RadioGroup, ReactiveFormsModule],
      template: `
        <radio-group
          [options]="options"
          name="reactive-group"
          [formControl]="control"
        ></radio-group>
      `,
    })
    class TestHostComponent {
      options = mockOptions;
      control = new FormControl('opt1');
    }

    it('should integrate with Reactive Forms (FormControl value changes reflect on UI)', async () => {
      const fixture = TestBed.createComponent(TestHostComponent);
      fixture.detectChanges();
      await fixture.whenStable();

      const compiled = fixture.nativeElement as HTMLElement;
      const radioInputs = compiled.querySelectorAll(
        'input[type="radio"]',
      ) as NodeListOf<HTMLInputElement>;

      // Initial value is 'opt1'
      expect(radioInputs[0].checked).toBe(true);

      // Update control value programmatically
      fixture.componentInstance.control.setValue('opt3');
      fixture.detectChanges();
      await fixture.whenStable();

      expect(radioInputs[2].checked).toBe(true);
    });

    it('should update FormControl value when UI selection changes', async () => {
      const fixture = TestBed.createComponent(TestHostComponent);
      fixture.detectChanges();
      await fixture.whenStable();

      const compiled = fixture.nativeElement as HTMLElement;
      const radioInputs = compiled.querySelectorAll(
        'input[type="radio"]',
      ) as NodeListOf<HTMLInputElement>;

      // Click option 2
      radioInputs[1].click();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(fixture.componentInstance.control.value).toBe('opt2');
    });
  });
});
