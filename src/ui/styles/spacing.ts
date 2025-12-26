// Why these values?
// 4 → icon gaps, tiny padding
// 8 → small internal spacing
// 16 → default padding 
// 24–32 → card and section spacing
// 48 → page separation

// This scale will:
// Work on mobile & desktop
// Prevent visual clutter
// Look intentional

// Final spacing scale (locked)
// Defined semantic sizes, not numbers:
// xs → very tight
// sm → small
// md → default
// lg → comfortable
// xl → large
// xxl → page-level spacing

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;
