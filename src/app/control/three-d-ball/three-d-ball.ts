import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  input,
  effect,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'three-d-ball',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="canvas-container">
      <canvas #ballCanvas [width]="size()" [height]="size()"></canvas>
    </div>
  `,
  styles: [
    `
      .canvas-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
      }
      canvas {
        display: block;
      }
    `,
  ],
})
export class ThreeDBall {
  // Define inputs using modern Angular signals
  readonly baseColor = input<string>('#3b82f6');
  readonly size = input<number>(300);

  @ViewChild('ballCanvas') private canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor() {
    // 1. Watches for any changes to baseColor or size signals and redraws
    effect(() => {
      const color = this.baseColor();
      const currentSize = this.size();

      // Trigger redraw in a microtask so it handles DOM re-creations cleanly
      queueMicrotask(() => {
        this.drawBall(currentSize, color);
      });
    });

    // 2. Guarantees a draw happens immediately after initial page load / refresh once DOM is ready
    afterNextRender(() => {
      this.drawBall(this.size(), this.baseColor());
    });
  }

  private drawBall(size: number, baseColor: string): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = Math.min(size, size) / 2 - 20;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // 3D Lighting offset coordinates
    const lightX = centerX - radius * 0.3;
    const lightY = centerY - radius * 0.3;
    const focalRadius = radius * 0.1;

    // Create 3D radial gradient for a spherical lighting effect
    const gradient = ctx.createRadialGradient(
      lightX,
      lightY,
      focalRadius,
      centerX,
      centerY,
      radius,
    );

    gradient.addColorStop(0, '#ffffff'); // Specular highlight
    gradient.addColorStop(0.3, baseColor); // Dynamic base color
    gradient.addColorStop(0.8, this.adjustBrightness(baseColor, -40)); // Shading edge
    gradient.addColorStop(1, '#000000'); // Deep shadow boundary

    // Draw the sphere
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();
  }

  private adjustBrightness(hex: string, percent: number): string {
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
      cleanHex = cleanHex
        .split('')
        .map((c) => c + c)
        .join('');
    }
    const num = parseInt(cleanHex, 16);
    let r = (num >> 16) + percent;
    let g = ((num >> 8) & 0x00ff) + percent;
    let b = (num & 0x0000ff) + percent;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }
}
