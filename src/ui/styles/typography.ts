// 👉 Typography creates trust.
// We define text roles, not components:
// body
// label
// caption
// title
// headline

// Each role has:
// fontSize
// fontWeight
// lineHeight

// Sizes
// 16px body = default comfortable reading
// 14px labels = subtle UI text
// 12px captions = metadata
// 20px titles = cards / sections
// 28px headline = page title

// Weights
// Mostly 400–600
// No visual shouting
// Clean hierarchy

export const typography = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",

  body: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
  },

  label: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.4,
  },

  caption: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.3,
  },

  title: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.4,
  },

  headline: {
    fontSize: 28,
    fontWeight: 600,
    lineHeight: 1.3,
  },
} as const;
