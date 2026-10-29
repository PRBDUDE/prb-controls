import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RadioGroup, RadioOption } from './radio-group';
import { beforeEach, describe, expect, it } from 'vitest';

// 1. Test Host Component for standalone / reactive forms testing
@Component({
  imports: [RadioGroup, ReactiveFormsModule],
  template: ` <radio-group [options]="testOptions" [name]="testName" [formControl]="control" /> `,
})
class TestHostComponent {
  testOptions: RadioOption[] = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ];
  testName = 'test-group';
  control = new FormControl<string | null>(null);
}

describe('RadioGroup Component', () => {
  let fixture: ComponentFixture<RadioGroup>;
  let component: RadioGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioGroup);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all options passed via inputs', () => {
    // Arrange
    const options: RadioOption[] = [
      { label: 'One', value: 1 },
      { label: 'Two', value: 2 },
    ];

    // Act
    fixture.componentRef.setInput('options', options);
    fixture.componentRef.setInput('name', 'numbers');
    fixture.detectChanges();

    // Assert
    const compiled = fixture.nativeElement as HTMLElement;
    const labels = compiled.querySelectorAll('.radio-label');
    const inputs = compiled.querySelectorAll('input[type="radio"]');

    expect(labels.length).toBe(2);
    expect(inputs.length).toBe(2);
    expect(compiled.querySelector('.label-text')?.textContent).toContain('One');
    expect(inputs[0].getAttribute('name')).toBe('numbers');
  });

  it('should update value and trigger selection workflow when an option is selected', () => {
    // Arrange
    const options: RadioOption[] = [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
    ];
    fixture.componentRef.setInput('options', options);
    fixture.componentRef.setInput('name', 'colors');
    fixture.detectChanges();

    let changeValue: any;
    let touchedCalled = false;
    component.registerOnChange((val: any) => (changeValue = val));
    component.registerOnTouched(() => (touchedCalled = true));

    // Act
    const compiled = fixture.nativeElement as HTMLElement;
    const radioInputs = compiled.querySelectorAll(
      'input[type="radio"]',
    ) as NodeListOf<HTMLInputElement>;

    radioInputs[1].click(); // Click 'blue'
    fixture.detectChanges();

    // Assert
    expect(component.value()).toBe('blue');
    expect(changeValue).toBe('blue');
    expect(touchedCalled).toBe(true);
    expect(radioInputs[1].checked).toBe(true);
  });

  // it('should integrate seamlessly with Reactive Forms (ControlValueAccessor)', async () => {
  //   const hostFixture = TestBed.createComponent(TestHostComponent);
  //   hostFixture.detectChanges();
  //   await hostFixture.whenStable();
  //
  //   const hostComponent = hostFixture.componentInstance;
  //   const compiled = hostFixture.nativeElement as HTMLElement;
  //   const radioInputs = compiled.querySelectorAll(
  //     'input[type="radio"]',
  //   ) as NodeListOf<HTMLInputElement>;
  //
  //   // 1. Model -> View change
  //   hostComponent.control.setValue('b');
  //   hostFixture.detectChanges();
  //   await hostFixture.whenStable();
  //
  //   expect(radioInputs[1].checked).toBe(true);
  //
  //   // 2. View -> Model change
  //   radioInputs[2].click(); // Select 'c'
  //   hostFixture.detectChanges();
  //
  //   expect(hostComponent.control.value).toBe('c');
  // });

  it('should respect the disabled state', () => {
    const options: RadioOption[] = [{ label: 'Test', value: 't' }];
    fixture.componentRef.setInput('options', options);
    fixture.componentRef.setInput('name', 'test');
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const radioInput = compiled.querySelector('input[type="radio"]') as HTMLInputElement;

    expect(radioInput.disabled).toBe(true);
    expect(compiled.querySelector('.radio-label')?.classList.contains('disabled')).toBe(true);
  });
});
