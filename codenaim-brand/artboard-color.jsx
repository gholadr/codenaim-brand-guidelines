// COLOR artboard
const { cnTokens: KT, cnFonts: KF } = window;

function CnColorSpec() {
  const Swatch = ({ name, hex, role, on, size = 'lg' }) => {
    const isLight = on === 'ink' ? false : (hex === KT.bone || hex === KT.cream || hex === KT.bone2);
    const fg = isLight ? KT.ink : KT.bone;
    const dim = isLight ? KT.slateDim : 'rgba(247,245,241,0.7)';
    const h = size === 'lg' ? 220 : 130;
    return (
      <div style={{
        background: hex, color: fg, padding: 22, height: h,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        border: hex === KT.bone || hex === KT.cream || hex === KT.bone2 ? `1px solid ${KT.rule}` : 'none',
      }}>
        <div style={{ fontFamily: KF.mono, fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: dim }}>
          {role}
        </div>
        <div>
          <div style={{ fontFamily: KF.display, fontSize: size === 'lg' ? 32 : 22, lineHeight: 1, fontWeight: 400, letterSpacing: '-0.01em' }}>
            {name}
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 8, fontFamily: KF.mono, fontSize: 10, letterSpacing: '0.12em' }}>
            <span>{hex.toUpperCase()}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      width: 1200, height: 900, background: KT.bone, color: KT.ink,
      fontFamily: KF.ui, padding: 48, display: 'flex', flexDirection: 'column', gap: 24,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <window.CnEyebrow style={{ marginBottom: 12 }}>Section 02 — Color</window.CnEyebrow>
          <h2 style={{ fontFamily: KF.display, fontSize: 56, lineHeight: 1, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
            Bone, ink, and one good blue.
          </h2>
        </div>
        <window.CnMeta items={['CODENAIM', 'BRAND', 'PG. 03']} />
      </div>
      <window.CnRule />

      {/* Primary row */}
      <div>
        <window.CnMeta items={['Primary — 90% of every surface']} color={KT.slateDim} style={{ marginBottom: 12 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.4fr 1fr', gap: 14 }}>
          <Swatch name="Bone" hex={KT.bone} role="Paper · default surface" />
          <Swatch name="Ink" hex={KT.ink} role="Primary text · brand" />
          <Swatch name="Deep Blue" hex={KT.blue} role="Accent · the stamp" />
        </div>
      </div>

      {/* Secondary row */}
      <div>
        <window.CnMeta items={['Secondary — surfaces, type, hairlines']} color={KT.slateDim} style={{ marginBottom: 12 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          <Swatch name="Cream" hex={KT.cream} role="Inset surface" size="sm" />
          <Swatch name="Slate" hex={KT.slate} role="Secondary text" size="sm" />
          <Swatch name="Slate Dim" hex={KT.slateDim} role="Meta · tertiary" size="sm" />
          <Swatch name="Rule" hex={KT.rule} role="Hairline on bone" size="sm" />
          <Swatch name="Blue Deep" hex={KT.blueDeep} role="Hover · pressed" size="sm" />
        </div>
      </div>

      {/* Signal row */}
      <div>
        <window.CnMeta items={['Signal — state, never decoration']} color={KT.slateDim} style={{ marginBottom: 12 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr) 2fr', gap: 12 }}>
          <Swatch name="Ember" hex={KT.ember} role="Edit · alert · red pencil" size="sm" />
          <Swatch name="Moss" hex={KT.moss} role="Approved · shipped" size="sm" />
          <div style={{ padding: 22, border: `1px solid ${KT.rule}`, height: 130, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <window.CnMeta items={['Usage Rules']} color={KT.slateDim} />
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 11.5, color: KT.slate, lineHeight: 1.45 }}>
              <li>↳ Bone is the default. Ink is the second default. Everything else earns its place.</li>
              <li>↳ Deep Blue is a stamp, not a fill. One per page, one per slide.</li>
              <li>↳ No gradients. No tints below 80%. No drop shadows.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

window.CnColorSpec = CnColorSpec;
