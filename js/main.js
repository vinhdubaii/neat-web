// NEAT gradient background.
// Pinned to an exact version so a future release can't break the deployed site.
// The package is self-contained (no extra three.js import), so a CDN ES module works with no build step.
import { NeatGradient } from "https://esm.sh/@firecms/neat@1.1.0";

// Palette and motion are fully editable here.
// Tip: design a look in the NEAT editor, copy its config, and paste it over this object.
const config = {
  colors: [
    { color: "#FFC600", enabled: true }, // yellow
    { color: "#FF9A3C", enabled: true }, // orange
    { color: "#FF5772", enabled: true }, // pink-red
    { color: "#FF9A9E", enabled: true }, // soft pink
    { color: "#8B6AE6", enabled: true }, // violet
    { color: "#2E0EC7", enabled: true }, // deep blue
  ],
  backgroundColor: "#FF8A3D",
  backgroundAlpha: 1,

  speed: 2.5,
  horizontalPressure: 3,
  verticalPressure: 4,
  waveFrequencyX: 2,
  waveFrequencyY: 3,
  waveAmplitude: 5,

  shadows: 1,
  highlights: 5,
  colorBrightness: 1,
  colorSaturation: 7,
  colorBlending: 8,

  grainIntensity: 0,
  resolution: 1,
  flowEnabled: true,
  wireframe: false,
  antialias: false,
};

const canvas = document.getElementById("gradient");

// Respect users who prefer less motion: slow the animation right down.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  config.speed = 0.3;
}

try {
  // The NEAT watermark is intentionally left in place (no licence purchased yet).
  new NeatGradient({ ref: canvas, ...config });
} catch (err) {
  // If WebGL is unavailable, the CSS background colour on <body> is used instead.
  console.warn("NEAT gradient could not start:", err);
  canvas.style.display = "none";
}
