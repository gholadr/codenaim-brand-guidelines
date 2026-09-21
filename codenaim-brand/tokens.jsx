// Codenaim brand tokens — single source of truth
// Aligned to github.com/gholadr/codenaim-corp-site (styles.css)
const cnTokens = {
  // Surfaces
  bone: '#FFFFFF',       // primary paper
  cream: '#F4F4F4',      // secondary surface, dividers
  bone2: '#EDEDED',      // hover/inset
  // Ink
  ink: '#0A0A0A',        // primary text, primary brand
  inkSoft: '#1A1A1A',
  slate: '#404040',      // secondary text
  slateDim: '#737373',   // tertiary, meta
  rule: '#DEDEDE',       // hairline rules on bone
  ruleDark: '#1F1F1F',   // hairline rules on ink
  // Accent — used sparingly, like a stamp
  accent: '#F5A623',      // signature orange-yellow
  accentDeep: '#C27E10',
  accentLight: '#FFC670', // for use on dark (ink) surfaces
  // System signals (rare, for state)
  ember: '#B7472A',     // alert/edit/red-pencil
  moss:  '#3C5A3C',     // approved
};

const cnFonts = {
  // Display — same family as UI, set at heavier weight for gravitas
  display: '"Manrope", system-ui, -apple-system, "Helvetica Neue", sans-serif',
  // Body grotesque — utility
  ui: '"Manrope", system-ui, -apple-system, "Helvetica Neue", sans-serif',
  // Monospace — system tags, metadata, code
  mono: '"JetBrains Mono", "Berkeley Mono", "IBM Plex Mono", ui-monospace, monospace',
  // Wordmark — same grotesque, bold and tight
  mark: '"Manrope", system-ui, -apple-system, "Helvetica Neue", sans-serif',
};

window.cnTokens = cnTokens;
window.cnFonts = cnFonts;
