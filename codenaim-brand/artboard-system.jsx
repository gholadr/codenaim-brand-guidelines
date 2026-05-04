// SYSTEM artboard — recurring patterns: meta bars, numbering, attribution
const { cnTokens: ST, cnFonts: SF } = window;

function CnSystemSpec() {
  const Box = ({ label, children, height = 160, dark }) => (
    <div style={{
      padding: 22,
      background: dark ? ST.ink : ST.bone,
      border: `1px solid ${dark ? ST.ruleDark : ST.rule}`,
      color: dark ? ST.bone : ST.ink,
      display: 'flex', flexDirection: 'column', gap: 14,
      minHeight: height,
    }}>
      <window.CnMeta items={[label]} color={dark ? ST.bone2 : ST.slateDim} />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{
      width: 1200, height: 920, background: ST.bone, color: ST.ink,
      fontFamily: SF.ui, padding: 48, display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <window.CnEyebrow style={{ marginBottom: 12 }}>Section 05 — System Patterns</window.CnEyebrow>
          <h2 style={{ fontFamily: SF.display, fontSize: 56, lineHeight: 1, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
            The grammar of the brand.
          </h2>
        </div>
        <window.CnMeta items={['CODENAIM', 'BRAND', 'PG. 06']} />
      </div>
      <window.CnRule />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Box label="Slash-meta · The page tag">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <window.CnMeta items={[{ text: 'CODENAIM', bold: true }, 'THE OPERATING SYSTEM', '03 / 04']} />
            <window.CnMeta items={[{ text: 'CODENAIM', bold: true }, 'FOUNDING TEAM', '01 / 04']} />
            <window.CnMeta items={['◉', 'INTERNAL', 'V 1.0']} />
          </div>
        </Box>

        <Box label="Numbered list · 01 — 05">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            {[
              ['01', 'Brand-Safe Creative at AI Speed'],
              ['02', 'Channel-Native Personalization'],
              ['03', 'Brand & Regulatory Governance'],
            ].map(([n, t]) => (
              <div key={n} style={{ display: 'flex', gap: 14, alignItems: 'baseline', borderBottom: `1px solid ${ST.rule}`, paddingBottom: 6 }}>
                <span style={{ fontFamily: SF.mono, fontSize: 11, color: ST.slateDim, letterSpacing: '0.12em' }}>{n}</span>
                <span style={{ fontFamily: SF.display, fontSize: 16, color: ST.ink, letterSpacing: '-0.005em' }}>{t}</span>
              </div>
            ))}
          </div>
        </Box>

        <Box label="VIA stamps · Founder attribution">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <window.CnVia name="ANSON" />
            <window.CnVia name="KURT" />
            <window.CnVia name="DAVID" />
            <window.CnVia name="CHRIS" />
            <window.CnVia name="CODELINK" color={ST.blue} />
          </div>
        </Box>

        <Box label="Section eyebrow · The dot + caps">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <window.CnEyebrow>Section 03 — The Operating System</window.CnEyebrow>
            <window.CnEyebrow dot={ST.ember}>Edit Mode · Unsaved</window.CnEyebrow>
            <window.CnEyebrow dot={ST.moss}>Approved · MLR Cleared</window.CnEyebrow>
          </div>
        </Box>

        <Box label="Step model · Engagement" height={220}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, width: '100%', borderTop: `1px solid ${ST.rule}`, borderLeft: `1px solid ${ST.rule}` }}>
            {[
              ['STEP 01', 'Workflow'],
              ['STEP 02', 'Bottleneck'],
              ['STEP 03', 'Prototype'],
              ['STEP 04', 'Operate'],
              ['STEP 05', 'Graduate'],
            ].map(([s, t], i) => (
              <div key={s} style={{
                padding: 14, borderRight: `1px solid ${ST.rule}`, borderBottom: `1px solid ${ST.rule}`,
                display: 'flex', flexDirection: 'column', gap: 8,
                background: i === 2 ? ST.cream : 'transparent',
              }}>
                <span style={{ fontFamily: SF.mono, fontSize: 9.5, letterSpacing: '0.16em', color: ST.slateDim }}>{s}</span>
                <span style={{ fontFamily: SF.display, fontSize: 18, lineHeight: 1, color: ST.ink }}>{t}</span>
              </div>
            ))}
          </div>
        </Box>

        <Box label="Pull quote · Italic + blue" height={220} dark>
          <blockquote style={{
            margin: 0, fontFamily: SF.display, fontSize: 26, lineHeight: 1.25,
            color: ST.bone, fontStyle: 'italic', maxWidth: 480,
          }}>
            "When a client says <span style={{ fontStyle: 'normal', color: '#7B9CE0' }}>'we want to run this ourselves,'</span> the tool graduates into a product."
          </blockquote>
        </Box>
      </div>
    </div>
  );
}

window.CnSystemSpec = CnSystemSpec;
