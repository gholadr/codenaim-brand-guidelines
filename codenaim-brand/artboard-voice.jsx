// VOICE artboard
const { cnTokens: VT, cnFonts: VF } = window;

function CnVoiceSpec() {
  const Principle = ({ n, title, body }) => (
    <div style={{ display: 'flex', gap: 16, padding: '18px 0', borderTop: `1px solid ${VT.rule}` }}>
      <window.CnNum n={n} color={VT.slateDim} style={{ fontSize: 12, paddingTop: 4 }} />
      <div>
        <div style={{ fontFamily: VF.display, fontSize: 22, lineHeight: 1.15, marginBottom: 6, letterSpacing: '-0.01em' }}>{title}</div>
        <div style={{ fontFamily: VF.ui, fontSize: 13, color: VT.slate, lineHeight: 1.55, maxWidth: 460 }}>{body}</div>
      </div>
    </div>
  );

  const Compare = ({ no, yes }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `1px solid ${VT.rule}` }}>
      <div style={{ padding: '14px 14px', borderRight: `1px solid ${VT.rule}`, color: VT.slateDim, minWidth: 0 }}>
        <div style={{ fontFamily: VF.mono, fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6, color: VT.ember }}>✕ Don't</div>
        <div style={{ fontFamily: VF.ui, fontSize: 12.5, lineHeight: 1.5, textDecoration: 'line-through', textDecorationColor: VT.ember, textDecorationThickness: 1, overflowWrap: 'break-word' }}>{no}</div>
      </div>
      <div style={{ padding: '14px 14px', minWidth: 0 }}>
        <div style={{ fontFamily: VF.mono, fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6, color: VT.moss }}>✓ Do</div>
        <div style={{ fontFamily: VF.ui, fontSize: 12.5, lineHeight: 1.5, color: VT.ink, overflowWrap: 'break-word' }}>{yes}</div>
      </div>
    </div>
  );

  return (
    <div style={{
      width: 1200, height: 940, background: VT.bone, color: VT.ink,
      fontFamily: VF.ui, padding: 48, display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <window.CnEyebrow style={{ marginBottom: 12 }}>Section 04 — Voice</window.CnEyebrow>
          <h2 style={{ fontFamily: VF.display, fontSize: 56, lineHeight: 1, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
            Plainspoken. Declarative. <span style={{ fontStyle: 'italic', color: VT.blue }}>Operator.</span>
          </h2>
        </div>
        <window.CnMeta items={['CODENAIM', 'BRAND', 'PG. 05']} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 18 }}>
        {/* Principles */}
        <div style={{ minWidth: 0 }}>
          <window.CnMeta items={['Principles']} color={VT.slateDim} style={{ marginBottom: 12 }} />
          <Principle n={1} title="We declare. We don't pitch."
            body="No hype, no superlatives, no manifesto theatrics. The work is the proof. State the position; let it stand." />
          <Principle n={2} title="Short sentences. Then a turn."
            body="Most agencies sell hours. Most AI vendors sell software. We sell outcomes. The rhythm — beat, beat, pivot — does the persuasion." />
          <Principle n={3} title="Numbers earn their place."
            body="≈ $2B in exits. 100-person engineering bench. 10× wins, not 10%. If a number isn't load-bearing, cut it." />
          <Principle n={4} title="Name the bottleneck."
            body="We don't talk about AI in the abstract. We point at the specific bottleneck where AI delivers a 10× win — and tell you when off-the-shelf is good enough." />
          <Principle n={5} title="No emoji. No exclamations."
            body="Italic for emphasis. The em-dash is the only flourish. Cool. Confident. Slightly dry." />
        </div>

        {/* Do/Don't */}
        <div style={{ minWidth: 0 }}>
          <window.CnMeta items={['Do / Don\'t']} color={VT.slateDim} style={{ marginBottom: 12 }} />
          <div style={{ border: `1px solid ${VT.rule}`, borderTop: 'none' }}>
            <Compare no="Codenaim is leveraging cutting-edge AI to revolutionize marketing!"
                     yes="We sell outcomes — produced by a small, senior team operating proprietary tooling." />
            <Compare no="Our innovative platform empowers brands to do more with less."
                     yes="Workflow first. Software follows." />
            <Compare no="Unlock the future of brand-safe creative."
                     yes="Brand-governed and regulatory-safe, by design." />
            <Compare no="Built by a world-class team of industry veterans."
                     yes="Four founders. Roughly $2B in combined exits. Recombined as one team." />
            <Compare no="Let's transform your marketing org!"
                     yes="Within a week of discovery, you're reacting to creative output. Not a deck." />
          </div>
        </div>
      </div>

      {/* Boilerplate */}
      <div style={{
        marginTop: 6, padding: 24, background: VT.ink, color: VT.bone,
        display: 'grid', gridTemplateColumns: '180px 1fr 200px', gap: 24, alignItems: 'flex-start',
      }}>
        <window.CnMeta items={['Boilerplate · 60w']} color={VT.bone2} />
        <p style={{ margin: 0, fontFamily: VF.display, fontSize: 18, lineHeight: 1.4, color: VT.bone, fontWeight: 400 }}>
          Codenaim is a marketing operating system. We don't sell a single tool — we stand up
          a brand-governed, regulatory-safe production layer across the five capabilities that
          decide whether a marketing org can actually move at AI speed. <span style={{ fontStyle: 'italic' }}>Workflow first. Software follows.</span>
        </p>
        <window.CnMeta items={['VIA', 'CODENAIM']} color={VT.bone2} />
      </div>
    </div>
  );
}

window.CnVoiceSpec = CnVoiceSpec;
