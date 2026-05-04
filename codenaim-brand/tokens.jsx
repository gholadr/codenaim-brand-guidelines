// Codenaim brand tokens — single source of truth
const cnTokens = {
  // Surfaces
  bone: '#F7F5F1',      // primary paper
  cream: '#ECE8DF',     // secondary surface, dividers
  bone2: '#EFEBE3',     // hover/inset
  // Ink
  ink: '#0E1A2B',       // primary text, primary brand
  inkSoft: '#1A2438',
  slate: '#33405A',     // secondary text
  slateDim: '#5A6680',  // tertiary, meta
  rule: '#D5CFC2',      // hairline rules on bone
  ruleDark: '#1F2940',  // hairline rules on ink
  // Accent — used sparingly, like a stamp
  blue: '#1F3A7A',      // signature deep blue
  blueDeep: '#142657',
  blueLight: '#3957A8',
  // System signals (rare, for state)
  ember: '#B7472A',     // alert/edit/red-pencil
  moss:  '#3C5A3C',     // approved
};

const cnFonts = {
  // Display serif — gravitas, editorial
  display: '"Tiempos Headline", "GT Sectra", "Canela", "Romana", Georgia, serif',
  // Body grotesque — utility
  ui: '"Söhne", "Inter", "Helvetica Neue", system-ui, sans-serif',
  // Monospace — system tags, metadata, code
  mono: '"JetBrains Mono", "Berkeley Mono", "IBM Plex Mono", ui-monospace, monospace',
  // Wordmark — geometric grotesque, slightly condensed
  mark: '"GT America Condensed", "Söhne Breit", "Inter", sans-serif',
};

window.cnTokens = cnTokens;
window.cnFonts = cnFonts;
