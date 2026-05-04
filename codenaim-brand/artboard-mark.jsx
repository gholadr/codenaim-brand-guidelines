// MARK artboard — logo system spec
const { cnTokens: MT, cnFonts: MF } = window;

function CnMarkSpec() {
  const Pad = ({ children, label, bg, border }) => (
    <div style={{
      padding: 32, background: bg, border: `1px solid ${border || MT.rule}`,
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      <window.CnMeta items={[label]} color={bg === MT.ink ? MT.bone2 : MT.slateDim} />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{
      width: 1200, height: 900, background: MT.bone, color: MT.ink,
      fontFamily: MF.ui, padding: 48, display: 'flex', flexDirection: 'column', gap: 28,
    }}>
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <window.CnEyebrow style={{ marginBottom: 12 }}>Section 01 — The Mark</window.CnEyebrow>
          <h2 style={{
            fontFamily: MF.display, fontSize: 56, lineHeight: 1, fontWeight: 400,
            margin: 0, letterSpacing: '-0.02em',
          }}>
            One mark, three voices.
          </h2>
        </div>
        <window.CnMeta items={['CODENAIM', 'BRAND', 'PG. 02']} />
      </div>
      <window.CnRule />

      {/* main grid: primary mark + three uses */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: 16 }}>
        <Pad label="Primary · C/N Monogram" bg={MT.ink} border={MT.ruleDark}>
          <window.CnMark size={180} />
        </Pad>
        <Pad label="Inverse" bg={MT.bone}>
          <window.CnMark size={120} fg={MT.ink} bg={MT.bone} square={false} />
        </Pad>
        <Pad label="Knockout · Cream" bg={MT.cream}>
          <window.CnMark size={120} fg={MT.ink} bg={MT.cream} square={false} />
        </Pad>
        <Pad label="Accent · Deep Blue" bg={MT.bone}>
          <window.CnMark size={120} bg={MT.blue} />
        </Pad>
      </div>

      {/* lockups */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Pad label="Horizontal Lockup · Default" bg={MT.bone}>
          <window.CnLockup size={56} />
        </Pad>
        <Pad label="Horizontal Lockup · Inverse" bg={MT.ink} border={MT.ruleDark}>
          <window.CnLockup size={56} inverse />
        </Pad>
      </div>

      {/* construction + sizing */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
        <div style={{ padding: 28, border: `1px solid ${MT.rule}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <window.CnMeta items={['Construction', 'Grid 48']} color={MT.slateDim} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {/* grid behind mark */}
            <div style={{ position: 'relative', width: 200, height: 200 }}>
              <svg width="200" height="200" viewBox="0 0 48 48" style={{ position: 'absolute', inset: 0 }}>
                {[...Array(13)].map((_, i) => (
                  <line key={'h' + i} x1="0" y1={i * 4} x2="48" y2={i * 4} stroke={MT.rule} strokeWidth="0.15" />
                ))}
                {[...Array(13)].map((_, i) => (
                  <line key={'v' + i} x1={i * 4} y1="0" x2={i * 4} y2="48" stroke={MT.rule} strokeWidth="0.15" />
                ))}
                <rect x="3" y="3" width="42" height="42" fill="none" stroke={MT.blue} strokeWidth="0.2" strokeDasharray="0.5,0.5" />
                <path d="M 22 11 L 11 11 L 11 37 L 22 37" fill="none" stroke={MT.ink} strokeWidth="3.2" />
                <path d="M 27 37 L 27 11 L 37 37 L 37 11" fill="none" stroke={MT.ink} strokeWidth="3.2" />
              </svg>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['Grid', '48 × 48 unit'],
                ['Stroke', '3.2u — full optical weight'],
                ['Padding', '3u clearspace — measured to glyph'],
                ['Stems', 'C: open bracket · N: two stems + diagonal'],
                ['Cap', 'Square — no rounding, no taper'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${MT.rule}`, paddingBottom: 6 }}>
                  <span style={{ fontFamily: MF.mono, fontSize: 10.5, letterSpacing: '0.16em', color: MT.slateDim, textTransform: 'uppercase' }}>{k}</span>
                  <span style={{ fontFamily: MF.ui, fontSize: 12, color: MT.ink }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: 28, border: `1px solid ${MT.rule}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <window.CnMeta items={['Sizing', 'Min/Max']} color={MT.slateDim} />
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 22, padding: '12px 0' }}>
            {[16, 24, 40, 64, 96].map(s => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <window.CnMark size={s} />
                <span style={{ fontFamily: MF.mono, fontSize: 9.5, color: MT.slateDim, letterSpacing: '0.1em' }}>{s}px</span>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: MF.ui, fontSize: 12, color: MT.slate, lineHeight: 1.6 }}>
            <strong style={{ color: MT.ink }}>Minimum:</strong> 16px (favicon, app dock).{' '}
            <strong style={{ color: MT.ink }}>Below 24px:</strong> use the solid C variant — strokes collapse.
          </div>
        </div>
      </div>
    </div>
  );
}

window.CnMarkSpec = CnMarkSpec;
