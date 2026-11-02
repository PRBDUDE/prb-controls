/**
 * Converts an HSL color value to RGB.
 * @param h - Hue (0 to 360)
 * @param s - Saturation (0 to 100)
 * @param l - Lightness (0 to 100)
 * @returns An array representing [R, G, B] in the range [0, 255]
 */
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  // Normalize s and l to fractions of 1
  const normalizedS = s / 100;
  const normalizedL = l / 100;

  const c = (1 - Math.abs(2 * normalizedL - 1)) * normalizedS;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = normalizedL - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h <= 360) {
    r = c;
    g = 0;
    b = x;
  }

  // Convert to 0-255 range and round
  const red = Math.round((r + m) * 255);
  const green = Math.round((g + m) * 255);
  const blue = Math.round((b + m) * 255);

  return [red, green, blue];
}

/**
 * Converts an HSL color value to a HEX string.
 * @param h - Hue (0 to 360)
 * @param s - Saturation (0 to 100)
 * @param l - Lightness (0 to 100)
 * @returns A HEX color string (e.g., "#ff0000")
 */
export function hslToHex(h: number, s: number, l: number): string {
  const [r, g, b] = hslToRgb(h, s, l);

  // Convert each RGB component to a 2-character hex string
  const toHex = (n: number) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
