// SIBLING relationship — Codenaim ↔ Take One
const { cnTokens: RT, cnFonts: RF } = window;

function CnSiblings() {
  return (
    <div style={{
      width: 1200, height: 880, background: RT.bone, color: RT.ink,
      fontFamily: RF.ui, padding: 48, display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <window.CnEyebrow style={{ marginBottom: 12 }}>Section 07 — Sibling Brands</window.CnEyebrow>
          <h2 style={{ fontFamily: RF.display, fontSize: 56, lineHeight: 1, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
            Codenaim runs the pipeline. <span style={{ fontStyle: 'italic', color: RT.blue }}>Take One</span> is one output.
          </h2>
        </div>
        <window.CnMeta items={['CODENAIM', 'BRAND', 'PG. 08']} />
      </div>

      {/* Two-side comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>
        {/* Codenaim — parent */}
        <div style={{ background: RT.bone, border: `1px solid ${RT.rule}`, padding: 32, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <window.CnMeta items={['Parent · Operator']} color={RT.slateDim} />
          <window.CnLockup size={48} />
          <div style={{ fontFamily: RF.display, fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.015em', marginTop: 8 }}>
            The <span style={{ fontStyle: 'italic', color: RT.blue }}>operating system.</span>
          </div>
          <div style={{ fontFamily: RF.ui, fontSize: 13, lineHeight: 1.55, color: RT.slate }}>
            Quiet. Editorial. Senior. The voice that talks to studios and CMOs.
            Bone &amp; ink &amp; one good blue.
          </div>
          <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ['Surface', 'Bone #F7F5F1'],
              ['Voice', 'Plainspoken · Declarative'],
              ['Type', 'Tiempos · Söhne · JetBrains Mono'],
              ['Audience', 'Studios · CMOs · Investors'],
              ['Volume', 'Quiet — gravitas'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 12, alignItems: 'baseline', borderBottom: `1px solid ${RT.rule}`, paddingBottom: 5 }}>
                <span style={{ fontFamily: RF.mono, fontSize: 9.5, letterSpacing: '0.18em', color: RT.slateDim, textTransform: 'uppercase' }}>{k}</span>
                <span style={{ fontFamily: RF.ui, fontSize: 12, color: RT.ink, textAlign: 'right', overflowWrap: 'break-word', minWidth: 0 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Take One — sibling */}
        <div style={{ background: '#0A0A0A', color: '#FFFFFF', padding: 32, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontFamily: RF.mono, fontSize: 10, letterSpacing: '0.22em', color: '#FF3B2F', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 6, height: 6, background: '#FF3B2F', display: 'inline-block', borderRadius: '50%' }} /> Sibling · Output
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, background: '#FF3B2F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#0A0A0A' }}>T</span>
            </div>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 28, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Take One</span>
          </div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 32, lineHeight: 1.05, letterSpacing: '-0.01em', textTransform: 'uppercase', marginTop: 8 }}>
            Roll the goddamn camera.
          </div>
          <div style={{ fontFamily: RF.ui, fontSize: 13, lineHeight: 1.55, color: 'rgba(255,255,255,0.72)' }}>
            Loud. Filmic. Working-set energy. The voice that talks to filmmakers
            on the production floor. Black, cream, ember red.
          </div>
          <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ['Surface', 'Black #0A0A0A'],
              ['Voice', 'Punchy · Filmic'],
              ['Type', 'Slab serif · Mono'],
              ['Audience', 'Filmmakers · Directors'],
              ['Volume', 'Loud — energy'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 12, alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: 5 }}>
                <span style={{ fontFamily: RF.mono, fontSize: 9.5, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>{k}</span>
                <span style={{ fontFamily: RF.ui, fontSize: 12, color: '#fff', textAlign: 'right', overflowWrap: 'break-word', minWidth: 0 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer rule — relationship */}
      <div style={{
        padding: 22, background: RT.ink, color: RT.bone, display: 'grid',
        gridTemplateColumns: '180px 1fr 200px', gap: 24, alignItems: 'center',
      }}>
        <window.CnMeta items={['Relationship Rule']} color={RT.bone2} />
        <div style={{ fontFamily: RF.display, fontSize: 17, lineHeight: 1.4, color: RT.bone }}>
          A Codenaim product locks the wordmark <span style={{ fontStyle: 'italic', color: '#7B9CE0' }}>"a Codenaim system"</span> in mono caps at the footer.
          Take One gets to be itself everywhere else.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <span style={{ fontFamily: RF.mono, fontSize: 9, letterSpacing: '0.22em', color: RT.bone2 }}>FOOTER LOCKUP</span>
          <span style={{ fontFamily: RF.mono, fontSize: 11, letterSpacing: '0.24em', color: RT.bone, textTransform: 'uppercase' }}>
            ◉ A Codenaim System
          </span>
        </div>
      </div>
    </div>
  );
}

window.CnSiblings = CnSiblings;
