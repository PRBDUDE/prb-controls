import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreeDBall } from './three-d-ball';

describe('ThreeDBall Component', () => {
  let component: ThreeDBall;
  let fixture: ComponentFixture<ThreeDBall>;
  let canvasEl: HTMLCanvasElement;
  let mockCtx: any;

  beforeEach(async () => {
    // Create a mock canvas context to prevent errors in headless testing environments (jsdom / happy-dom)
    mockCtx = {
      clearRect: vi.fn(),
      createRadialGradient: vi.fn().mockReturnValue({
        addColorStop: vi.fn(),
      }),
      beginPath: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      closePath: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [ThreeDBall],
    }).compileComponents();

    fixture = TestBed.createComponent(ThreeDBall);
    component = fixture.componentInstance;

    // Grab the canvas element from the DOM fixture
    canvasEl = fixture.nativeElement.querySelector('canvas');

    // Spy on and mock getContext('2d') on the canvas element
    vi.spyOn(canvasEl, 'getContext').mockReturnValue(mockCtx as CanvasRenderingContext2D);

    // Trigger initial change detection and afterNextRender hooks
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render canvas with default size dimensions', async () => {
    // Default size is 300
    expect(canvasEl.getAttribute('width')).toBe('300');
    expect(canvasEl.getAttribute('height')).toBe('300');
  });

  it('should trigger drawing after initial render via afterNextRender', () => {
    // Verify clearRect and fill were called during initialization/drawing
    expect(mockCtx.clearRect).toHaveBeenCalled();
    expect(mockCtx.fill).toHaveBeenCalled();
  });

  it('should update canvas dimensions and redraw when size input changes', async () => {
    // Update the size input signal
    fixture.componentRef.setInput('size', 400);
    fixture.detectChanges();

    // Wait for the microtask triggered inside the effect
    await vi.waitFor(() => {
      expect(canvasEl.getAttribute('width')).toBe('400');
      expect(canvasEl.getAttribute('height')).toBe('400');
    });
  });

  it('should adjust brightness correctly for hex colors', () => {
    // Accessing private method via bracket notation for testing utility logic
    const adjustBrightness = (component as any).adjustBrightness.bind(component);

    // Test lightening/darkening valid 6-char hex
    const darkened = adjustBrightness('#3b82f6', -40);
    expect(darkened).toBeDefined();
    expect(darkened.startsWith('#')).toBe(true);

    // Test handling of shorthand 3-char hex strings
    const shortHexResult = adjustBrightness('#0ff', -10);
    expect(shortHexResult).toBeDefined();
  });

  it('should safely handle missing canvas context without crashing', () => {
    // Force getContext to return null
    vi.spyOn(canvasEl, 'getContext').mockReturnValue(null);

    // Should run without throwing errors
    expect(() => {
      (component as any).drawBall(300, '#ff0000');
    }).not.toThrow();
  });
});
