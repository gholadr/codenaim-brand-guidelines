// Shared primitives for spec artboards
const { cnTokens: T, cnFonts: F } = window;

// Slash-separated metadata bar — recurring brand pattern
function CnMeta({ items, color, accent, style }) {
  const c = color || T.slate;
  const a = accent || T.ink;
  return (
    <div style={{
      fontFamily: F.mono, fontSize: 10, letterSpacing: '0.18em',
      color: c, textTransform: 'uppercase',
      display: 'flex', alignItems: 'center', gap: 8, ...style,
    }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ color: c, opacity: 0.5 }}>/</span>}
          <span style={{ color: it.bold ? a : c, fontWeight: it.bold ? 600 : 400 }}>{it.text || it}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

// Section eyebrow — small, capitalized, with leading bullet
function CnEyebrow({ children, color, dot, style }) {
  const c = color || T.slate;
  const d = dot ?? T.blue;
  return (
    <div style={{
      fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
      color: c, textTransform: 'uppercase',
      display: 'flex', alignItems: 'center', gap: 10, ...style,
    }}>
      <span style={{ width: 6, height: 6, background: d, borderRadius: '50%', display: 'inline-block' }} />
      {children}
    </div>
  );
}

// Spec card — bone surface, hairline rule, label/value
function CnSpec({ label, children, style, on = 'bone' }) {
  const isInk = on === 'ink';
  return (
    <div style={{
      background: isInk ? T.ink : T.bone,
      border: `1px solid ${isInk ? T.ruleDark : T.rule}`,
      padding: 24,
      display: 'flex', flexDirection: 'column', gap: 12,
      color: isInk ? T.bone : T.ink,
      ...style,
    }}>
      <div style={{
        fontFamily: F.mono, fontSize: 9.5, letterSpacing: '0.22em',
        color: isInk ? T.bone2 : T.slateDim, textTransform: 'uppercase',
      }}>{label}</div>
      {children}
    </div>
  );
}

// Numbered token (01, 02 ...) — recurring deck pattern
function CnNum({ n, color, style }) {
  return (
    <span style={{
      fontFamily: F.mono, fontSize: 10, letterSpacing: '0.1em',
      color: color || T.slate, ...style,
    }}>
      {String(n).padStart(2, '0')}
    </span>
  );
}

// Hairline divider with optional label
function CnRule({ label, color, on = 'bone', style }) {
  const c = color || (on === 'ink' ? T.ruleDark : T.rule);
  const txt = on === 'ink' ? T.bone2 : T.slateDim;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, ...style }}>
      <div style={{ height: 1, background: c, flex: 1 }} />
      {label && (
        <span style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: '0.22em', color: txt, textTransform: 'uppercase' }}>
          {label}
        </span>
      )}
      {label && <div style={{ height: 1, background: c, flex: 1 }} />}
    </div>
  );
}

// Attribution stamp — VIA ANSON, etc.
function CnVia({ name, color, bg }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 4,
      fontFamily: F.mono, fontSize: 9.5, letterSpacing: '0.18em',
      padding: '3px 6px',
      background: bg || 'transparent',
      color: color || T.slateDim,
      textTransform: 'uppercase',
      border: `1px solid ${T.rule}`,
    }}>
      <span style={{ opacity: 0.6 }}>via</span>
      <span style={{ fontWeight: 600, color: color || T.ink, letterSpacing: '0.14em' }}>{name}</span>
    </span>
  );
}

Object.assign(window, { CnMeta, CnEyebrow, CnSpec, CnNum, CnRule, CnVia });
