function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// Utility function to convert an RGB color object to a hex color
function rgbToHex(rgb) {
  return `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b)
    .toString(16)
    .slice(1)}`;
}
export function getBrighterHexColor(hexColor) {
  // Convert the hex color to an RGB color
  const rgbColor = hexToRgb(hexColor);

  // Increase the RGB values to make the color slightly brighter
  const brighterRGB = {
    r: Math.min(rgbColor.r + 50, 255),
    g: Math.min(rgbColor.g + 50, 255),
    b: Math.min(rgbColor.b + 50, 255),
  };

  // Convert the brighter RGB color back to hex format
  const brighterHex = rgbToHex(brighterRGB);

  return brighterHex;
}

// Utility function to convert a hex color to an RGB color object
