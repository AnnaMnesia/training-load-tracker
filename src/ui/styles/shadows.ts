// Shadow rules (important)
// No dark black shadows
// No sharp edges
// Use multiple layers (subtle blur)
// Defined 3 levels only.

// What each one is for
// none → flat surfaces
// sm → inputs, subtle separation
// md → cards
// lg → floating elements (rare)
// Mostly used: md.

export const shadows = {
  none: "none",

  sm: "0 1px 2px rgba(0, 0, 0, 0.04)",

  md: "0 4px 12px rgba(0, 0, 0, 0.08)",

  lg: "0 10px 24px rgba(0, 0, 0, 0.12)",
} as const;
