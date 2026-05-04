// APPLICATIONS artboard — business card, letterhead, deck title, email sig, social
const { cnTokens: AT, cnFonts: AF } = window;

function CnApplications() {
  return (
    <div style={{
      width: 1200, height: 1000, background: AT.bone, color: AT.ink,
      fontFamily: AF.ui, padding: 48, display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <window.CnEyebrow style={{ marginBottom: 12 }}>Section 06 — Applications</window.CnEyebrow>
          <h2 style={{ fontFamily: AF.display, fontSize: 56, lineHeight: 1, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
            The system, in the world.
          </h2>
        </div>
        <window.CnMeta items={['CODENAIM', 'BRAND', 'PG. 07']} />
      </div>

      {/* Row 1: Business cards (front + back) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: 16 }}>
        {/* Card front */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <window.CnMeta items={['Business Card', 'Front']} color={AT.slateDim} />
          <div style={{
            background: AT.bone, border: `1px solid ${AT.rule}`,
            aspectRatio: '85/55', padding: 22,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <window.CnLockup size={28} />
            <div>
              <div style={{ fontFamily: AF.display, fontSize: 22, lineHeight: 1.05, letterSpacing: '-0.01em' }}>Anson Sowby</div>
              <div style={{ fontFamily: AF.mono, fontSize: 9.5, letterSpacing: '0.18em', color: AT.slateDim, marginTop: 4, textTransform: 'uppercase' }}>CEO · Co-Founder</div>
              <div style={{ display: 'flex', gap: 12, marginTop: 12, fontFamily: AF.mono, fontSize: 10, color: AT.slate }}>
                <span>anson@codenaim.com</span>
                <span style={{ color: AT.rule }}>/</span>
                <span>+1.310.555.0142</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card back */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <window.CnMeta items={['Business Card', 'Back']} color={AT.slateDim} />
          <div style={{
            background: AT.ink, color: AT.bone, aspectRatio: '85/55', padding: 22,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <window.CnMeta items={['◉', 'CODENAIM']} color={AT.bone2} />
            <div style={{ fontFamily: AF.display, fontSize: 26, lineHeight: 1.1, color: AT.bone, letterSpacing: '-0.01em' }}>
              Workflow first.<br />
              <span style={{ fontStyle: 'italic', color: '#7B9CE0' }}>Software follows.</span>
            </div>
            <window.CnMeta items={['CODENAIM.COM', 'LOS ANGELES']} color={AT.bone2} />
          </div>
        </div>

        {/* Email signature */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <window.CnMeta items={['Email Signature']} color={AT.slateDim} />
          <div style={{ background: '#fff', border: `1px solid ${AT.rule}`, padding: 18, fontFamily: AF.ui, fontSize: 12, color: AT.ink, lineHeight: 1.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <window.CnMark size={28} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 13 }}>Anson Sowby</div>
                <div style={{ color: AT.slate, fontSize: 11 }}>CEO · Codenaim</div>
              </div>
            </div>
            <div style={{ height: 1, background: AT.rule, margin: '8px 0' }} />
            <div style={{ fontFamily: AF.mono, fontSize: 10, letterSpacing: '0.08em', color: AT.slateDim, textTransform: 'uppercase' }}>
              anson@codenaim.com · codenaim.com
            </div>
            <div style={{ marginTop: 6, fontFamily: AF.display, fontSize: 13, fontStyle: 'italic', color: AT.blue }}>
              Workflow first. Software follows.
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Deck title + Letterhead */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
        {/* Deck title slide (16:9) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <window.CnMeta items={['Deck Title Slide', '16:9']} color={AT.slateDim} />
          <div style={{
            background: AT.bone, border: `1px solid ${AT.rule}`,
            aspectRatio: '16/9', position: 'relative', overflow: 'hidden',
            padding: '28px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <window.CnMeta items={[{ text: 'CODENAIM', bold: true }, 'THE PITCH', '02 / 04']} />
              <window.CnMeta items={['● V 2']} color={AT.blue} />
            </div>
            <div>
              <window.CnMeta items={['What We Sell']} color={AT.slateDim} style={{ marginBottom: 14 }} />
              <div style={{ fontFamily: AF.display, fontSize: 56, lineHeight: 0.96, letterSpacing: '-0.025em', maxWidth: 580 }}>
                Most agencies sell hours.<br />
                Most AI vendors sell software.<br />
                <span style={{ fontStyle: 'italic', color: AT.blue }}>We sell outcomes.</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <window.CnVia name="ANSON" />
                <window.CnVia name="KURT" />
              </div>
              <window.CnLockup size={20} />
            </div>
          </div>
        </div>

        {/* Letterhead */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <window.CnMeta items={['Letterhead', 'A4']} color={AT.slateDim} />
          <div style={{
            background: '#fff', border: `1px solid ${AT.rule}`,
            aspectRatio: '210/297', padding: '24px 24px 18px',
            display: 'flex', flexDirection: 'column',
            fontSize: 9,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${AT.rule}`, paddingBottom: 10 }}>
              <window.CnLockup size={20} />
              <window.CnMeta items={['LOS ANGELES', '2026']} style={{ fontSize: 8 }} />
            </div>
            <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              <div style={{ fontFamily: AF.mono, fontSize: 8, letterSpacing: '0.18em', color: AT.slateDim, textTransform: 'uppercase' }}>14 NOV 2026 · TO: ACME PHARMA</div>
              <div style={{ fontFamily: AF.display, fontSize: 16, lineHeight: 1.15, letterSpacing: '-0.01em', marginTop: 4 }}>
                Pilot scope &amp; outcome model.
              </div>
              <div style={{ fontFamily: AF.ui, fontSize: 8.5, lineHeight: 1.5, color: AT.slate, columnGap: 10 }}>
                Codenaim is a marketing operating system. We don't sell a single tool — we stand up a brand-governed, regulatory-safe production layer across the five capabilities that decide whether a marketing org can move at AI speed.
                <br /><br />
                The proposal below assumes a six-week prototype window. Within five days of kickoff, you'll be reacting to creative output made with your brand, your claims, your compliance constraints — not a deck.
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${AT.rule}`, paddingTop: 8, fontSize: 7.5, color: AT.slateDim, fontFamily: AF.mono, letterSpacing: '0.12em' }}>
              <span>CODENAIM.COM</span>
              <span>PG. 1 / 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Social avatar + favicon set */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        <div style={{ padding: 22, border: `1px solid ${AT.rule}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <window.CnMeta items={['Avatar · Square']} color={AT.slateDim} />
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <window.CnMark size={88} />
            <window.CnMark size={56} bg={AT.blue} />
            <window.CnMarkC size={56} />
          </div>
        </div>
        <div style={{ padding: 22, border: `1px solid ${AT.rule}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <window.CnMeta items={['Favicon · 16/24/32']} color={AT.slateDim} />
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
            <window.CnMarkC size={16} />
            <window.CnMarkC size={24} />
            <window.CnMarkC size={32} />
            <window.CnMarkC size={48} />
          </div>
        </div>
        <div style={{ padding: 22, border: `1px solid ${AT.rule}`, background: AT.ink, color: AT.bone, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <window.CnMeta items={['Social Banner · 1500×500']} color={AT.bone2} />
          <div style={{ fontFamily: AF.display, fontSize: 20, lineHeight: 1.15, color: AT.bone, letterSpacing: '-0.01em' }}>
            A marketing operating<br />system. <span style={{ fontStyle: 'italic', color: '#7B9CE0' }}>Not a tool.</span>
          </div>
          <window.CnMeta items={['CODENAIM.COM']} color={AT.bone2} />
        </div>
      </div>
    </div>
  );
}

window.CnApplications = CnApplications;
