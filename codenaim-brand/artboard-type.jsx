// TYPE artboard
const { cnTokens: YT, cnFonts: YF } = window;

function CnTypeSpec() {
  const Row = ({ label, children, height }) => (
    <div style={{
      display: 'grid', gridTemplateColumns: '160px 1fr',
      borderTop: `1px solid ${YT.rule}`, padding: '18px 0', alignItems: 'baseline',
      minHeight: height,
    }}>
      <window.CnMeta items={[label]} color={YT.slateDim} />
      <div>{children}</div>
    </div>
  );

  return (
    <div style={{
      width: 1200, height: 980, background: YT.bone, color: YT.ink,
      fontFamily: YF.ui, padding: 48, display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <window.CnEyebrow style={{ marginBottom: 12 }}>Section 03 — Type</window.CnEyebrow>
          <h2 style={{ fontFamily: YF.display, fontSize: 56, lineHeight: 1, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
            A serif. A grotesque. A monospace.
          </h2>
        </div>
        <window.CnMeta items={['CODENAIM', 'BRAND', 'PG. 04']} />
      </div>

      {/* Three families overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        <div style={{ padding: 22, border: `1px solid ${YT.rule}`, background: YT.bone }}>
          <window.CnMeta items={['Display · Serif', '01']} color={YT.slateDim} style={{ marginBottom: 16 }} />
          <div style={{ fontFamily: YF.display, fontSize: 84, lineHeight: 0.9, letterSpacing: '-0.02em' }}>Aa</div>
          <div style={{ marginTop: 16, fontFamily: YF.ui, fontSize: 12, color: YT.slate, lineHeight: 1.5 }}>
            <strong style={{ color: YT.ink }}>Tiempos Headline</strong> — or GT Sectra, Canela.
            Editorial, considered, quiet authority.
          </div>
          <div style={{ marginTop: 14, fontFamily: YF.mono, fontSize: 10, letterSpacing: '0.16em', color: YT.slateDim, textTransform: 'uppercase' }}>
            Headlines · Section titles · Pull quotes
          </div>
        </div>
        <div style={{ padding: 22, border: `1px solid ${YT.rule}`, background: YT.bone }}>
          <window.CnMeta items={['UI · Grotesque', '02']} color={YT.slateDim} style={{ marginBottom: 16 }} />
          <div style={{ fontFamily: YF.ui, fontSize: 84, lineHeight: 0.9, letterSpacing: '-0.03em', fontWeight: 500 }}>Aa</div>
          <div style={{ marginTop: 16, fontFamily: YF.ui, fontSize: 12, color: YT.slate, lineHeight: 1.5 }}>
            <strong style={{ color: YT.ink }}>Söhne</strong> — or Inter as fallback.
            Workmanlike. The voice of the system.
          </div>
          <div style={{ marginTop: 14, fontFamily: YF.mono, fontSize: 10, letterSpacing: '0.16em', color: YT.slateDim, textTransform: 'uppercase' }}>
            Body · UI · Tables · Forms
          </div>
        </div>
        <div style={{ padding: 22, border: `1px solid ${YT.rule}`, background: YT.bone }}>
          <window.CnMeta items={['Mono · System', '03']} color={YT.slateDim} style={{ marginBottom: 16 }} />
          <div style={{ fontFamily: YF.mono, fontSize: 84, lineHeight: 0.9, letterSpacing: '-0.04em' }}>Aa</div>
          <div style={{ marginTop: 16, fontFamily: YF.ui, fontSize: 12, color: YT.slate, lineHeight: 1.5 }}>
            <strong style={{ color: YT.ink }}>JetBrains Mono</strong> — or Berkeley, IBM Plex Mono.
            Tagging the system layer.
          </div>
          <div style={{ marginTop: 14, fontFamily: YF.mono, fontSize: 10, letterSpacing: '0.16em', color: YT.slateDim, textTransform: 'uppercase' }}>
            Eyebrows · Meta · Numbers · Code
          </div>
        </div>
      </div>

      {/* Scale */}
      <div style={{ marginTop: 6 }}>
        <window.CnMeta items={['Type Scale']} color={YT.slateDim} style={{ marginBottom: 4 }} />
        <Row label="Display · 96/0.95">
          <div style={{ fontFamily: YF.display, fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.025em' }}>Workflow first.</div>
        </Row>
        <Row label="H1 · 56/1">
          <div style={{ fontFamily: YF.display, fontSize: 48, lineHeight: 1, letterSpacing: '-0.02em' }}>The pipeline is the moat.</div>
        </Row>
        <Row label="H2 · 32/1.1 · italic">
          <div style={{ fontFamily: YF.display, fontSize: 28, lineHeight: 1.1, fontStyle: 'italic', color: YT.blue }}>Software earns itself.</div>
        </Row>
        <Row label="Body · 15/1.55">
          <div style={{ fontFamily: YF.ui, fontSize: 15, lineHeight: 1.55, color: YT.slate, maxWidth: 720 }}>
            We sell outcomes — produced by a small, senior team operating proprietary
            tooling against your brand, channel, and compliance reality.
          </div>
        </Row>
        <Row label="Eyebrow · 11/1 · 0.22em">
          <div style={{ fontFamily: YF.mono, fontSize: 11, letterSpacing: '0.22em', color: YT.slateDim, textTransform: 'uppercase' }}>
            ◢ The Operating System · 03 / 04
          </div>
        </Row>
      </div>
    </div>
  );
}

window.CnTypeSpec = CnTypeSpec;
