import { Component, input, signal, effect, OnDestroy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'prb-light-chaser',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="prb-chaser-container" [style.background-color]="backgroundColor()">
      <div class="prb-lights-row">
        @for (lit of lightStates(); track $index) {
          <div
            class="prb-light"
            [class.active]="lit"
            [style.width.px]="size()"
            [style.height.px]="size()"
            [style.box-shadow]="lit ? '0 0 12px ' + activeColor() : 'none'"
            [style.background-color]="lit ? activeColor() : inactiveColor()"
          ></div>
        }
      </div>
      @if (displayActivity()) {
        <div class="prb-status-text">
          <span>Activity: <span class="prb-speed-badge">{{ active() ? 'Running' : 'Paused' }}</span></span>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .prb-chaser-container {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        font-family: monospace;
      }
      .prb-lights-row {
        display: flex;
        gap: 8px;
      }
      .prb-light {
        border-radius: 50%;
        transition:
          background-color 0.15s ease,
          box-shadow 0.15s ease;
      }
      .prb-status-text {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 11px;
        color: #888;
      }
      .prb-speed-badge {
        background: rgba(255, 255, 255, 0.1);
        padding: 2px 6px;
        border-radius: 4px;
      }
    `,
  ],
})
export class LightChaser implements OnDestroy {
  // Input Signals with defaults
  readonly count = input<number>(6);
  readonly speed = input<number>(120); // Interval speed in ms
  readonly active = input<boolean>(true);
  readonly activeColor = input<string>('#00ffcc');
  readonly inactiveColor = input<string>('#222222');
  readonly backgroundColor = input<string>('#111111');
  readonly size = input<number>(20); // Pixel size of each light
  readonly displayActivity = input<boolean>(false);

  // Internal state tracking the lit index position
  private currentIndex = signal<number>(0);
  private timerId: any = null;

  // Computed boolean array mapping out which light is currently active
  readonly lightStates = computed(() => {
    const total = this.count();
    const current = this.currentIndex();
    return Array.from({ length: total }, (_, i) => i === current);
  });

  constructor() {
    // Effect reacts automatically to input signal changes (active state or speed)
    effect(() => {
      this.clearTicker();

      if (this.active()) {
        this.startTicker(this.speed());
      }
    });
  }

  private startTicker(intervalMs: number) {
    this.timerId = setInterval(() => {
      this.currentIndex.update((curr) => (curr + 1) % this.count());
    }, intervalMs);
  }

  private clearTicker() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  ngOnDestroy(): void {
    this.clearTicker();
  }
}
