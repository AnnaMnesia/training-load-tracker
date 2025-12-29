export const typography = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",

  // Hero / screen identity (intentionally breaks the scale)
  largeTitle: {
    fontSize: 48,
    fontWeight: 400,
    emphasizedWeight: 600,
  },

  // Section titles
  title: {
    fontSize: 24,
    fontWeight: 400,
    emphasizedWeight: 600,
  },

  // Emphasis / labels
  headline: {
    fontSize: 18,
    fontWeight: 400,
    emphasizedWeight: 600,
  },

  // Core reading
  body: {
    fontSize: 17,
    fontWeight: 400,
    emphasizedWeight: 600,
  },

  // Metadata
  footnote: {
    fontSize: 13,
    fontWeight: 400,
    emphasizedWeight: 600,
  },
} as const;
