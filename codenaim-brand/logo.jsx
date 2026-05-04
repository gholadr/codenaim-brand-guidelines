// Codenaim logo system
const { cnTokens: LT, cnFonts: LF } = window;

// PRIMARY MARK — "C/N" monogram. The "C" is a serifed bracket, the "N" is two
// upright stems. Reads as "code-naim" — the bracket is code, the stems are
// the foundation. Geometric, sits on a 48×48 grid.
function CnMark({ size = 64, fg, bg, square = true }) {
  const s = size;
  const f = fg || LT.bone;
  const b = bg || LT.ink;
  return (
    <svg width={s} height={s} viewBox="0 0 48 48" style={{ display: 'block' }}>
      {square && <rect x="0" y="0" width="48" height="48" fill={b} />}
      {/* C bracket — open right, square-cut */}
      <path d="M 22 11 L 11 11 L 11 37 L 22 37" fill="none" stroke={f} strokeWidth="3.2" strokeLinecap="square" />
      {/* N — two stems with diagonal */}
      <path d="M 27 37 L 27 11 L 37 37 L 37 11" fill="none" stroke={f} strokeWidth="3.2" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

// SECONDARY MARK — pure C with notch (matches existing public/codenaim.png).
// Used as favicon / app icon for the operator product. Bone on ink.
function CnMarkC({ size = 64, fg, bg, square = true }) {
  const s = size;
  const f = fg || LT.bone;
  const b = bg || LT.ink;
  return (
    <svg width={s} height={s} viewBox="0 0 48 48" style={{ display: 'block' }}>
      {square && <rect x="0" y="0" width="48" height="48" fill={b} />}
      {/* Solid C with right-side notch */}
      <path
        d="M 24 8 A 16 16 0 1 0 24 40 L 24 32 A 8 8 0 1 1 24 16 Z"
        fill={f}
      />
    </svg>
  );
}

// WORDMARK — "CODENAIM" set in condensed grotesque, all caps, tight tracking.
// The 'I' is replaced with a thin vertical bar (an I-beam) — a small wink at
// the operator/engineering identity. Optical centering: the mark sits with
// extra space around 'D' and 'N'.
function CnWordmark({ height = 24, color, style }) {
  const c = color || LT.ink;
  const h = height;
  // Simple text-based wordmark — using letterSpacing & condensed weight
  return (
    <span style={{
      fontFamily: LF.mark,
      fontSize: h,
      lineHeight: 1,
      letterSpacing: '0.04em',
      color: c,
      fontWeight: 600,
      textTransform: 'uppercase',
      display: 'inline-block',
      fontStretch: 'condensed',
      ...style,
    }}>
      CODENAIM
    </span>
  );
}

// LOCKUP — mark + wordmark, horizontal
// LOCKUP — mark + wordmark, horizontal
// `inverse` = on a dark surface: wordmark goes bone, mark stays bone-on-ink (so the
// mark square reads as a small ink chip on the dark surface).
// Pass `monoFg` to render the mark with bone strokes on a transparent bone-tinted
// fill (rare; only when you want a fully knocked-out lockup with no chip).
function CnLockup({ size = 32, color, inverse, gap = 12, style }) {
  const wordColor = color || (inverse ? LT.bone : LT.ink);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap, ...style }}>
      <CnMark size={size} fg={LT.bone} bg={LT.ink} />
      <CnWordmark height={size * 0.62} color={wordColor} />
    </div>
  );
}

// VERTICAL LOCKUP — mark above wordmark, with rule + tagline
function CnLockupVertical({ size = 80, color, tagline = 'A MARKETING OPERATING SYSTEM', style }) {
  const c = color || LT.ink;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 14, ...style }}>
      <CnMark size={size} fg={LT.bone} bg={c} />
      <CnWordmark height={size * 0.42} color={c} />
      <div style={{ height: 1, background: c, width: '80%', opacity: 0.4 }} />
      <span style={{
        fontFamily: LF.mono, fontSize: 9.5, letterSpacing: '0.28em',
        color: c, textTransform: 'uppercase', textAlign: 'center',
      }}>{tagline}</span>
    </div>
  );
}

Object.assign(window, { CnMark, CnMarkC, CnWordmark, CnLockup, CnLockupVertical });
