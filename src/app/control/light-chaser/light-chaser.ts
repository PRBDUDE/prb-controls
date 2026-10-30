import {
  Component,
  input,
  signal,
  OnDestroy,
  ChangeDetectionStrategy,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'prb-light-chaser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './light-chaser.html',
  styleUrl: './light-chaser.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightChaser implements OnDestroy {
  // --- Signal Inputs ---
  isActive = input<boolean>(false);
  numLights = input<number>(10);
  cycleDuration = input<number>(1500);

  // --- Internal State ---
  activeLightIndex = signal<number>(-1);
  private lightTimerSubscription?: Subscription;

  constructor() {
    // Effect automatically runs whenever any signal read inside it changes (like isActive, cycleDuration, or numLights)
    effect(() => {
      const active = this.isActive();

      if (active) {
        this.startChaser();
      } else {
        this.stopChaser();
      }
    });
  }

  ngOnDestroy(): void {
    this.stopChaser();
  }

  private startChaser(): void {
    this.stopChaser(); // Clear any existing timer
    this.activeLightIndex.set(-1);

    // Call signal getters () to get their current numerical values
    const duration = this.cycleDuration();
    const count = this.numLights();

    if (count <= 0) return;

    const intervalTime = duration / count;

    this.lightTimerSubscription = timer(0, intervalTime).subscribe(() => {
      this.activeLightIndex.update((index) => (index + 1) % count);
    });
  }

  private stopChaser(): void {
    this.lightTimerSubscription?.unsubscribe();
    this.activeLightIndex.set(-1);
  }

  // Helper for template iteration
  get numLightsArray(): number[] {
    return Array.from({ length: this.numLights() }, (_, index) => index);
  }
}
