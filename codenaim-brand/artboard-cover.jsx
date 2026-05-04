// COVER artboard — opens the brand book
const { cnTokens: CT, cnFonts: CF } = window;

function CnCover() {
  return (
    <div style={{
      width: 1200, height: 760, background: CT.bone, color: CT.ink,
      fontFamily: CF.ui, position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* top meta bar */}
      <div style={{
        padding: '20px 48px', borderBottom: `1px solid ${CT.rule}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <window.CnMeta items={[
          { text: 'CODENAIM', bold: true },
          'BRAND IDENTITY',
          'V 1.0',
        ]} />
        <window.CnMeta items={['INTERNAL', '2026']} />
      </div>

      {/* center stage */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 0 }}>
        {/* left — vertical lockup */}
        <div style={{
          borderRight: `1px solid ${CT.rule}`, padding: 56,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <window.CnEyebrow>The Mark</window.CnEyebrow>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <window.CnLockupVertical size={140} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontFamily: CF.mono, fontSize: 10, letterSpacing: '0.22em', color: CT.slateDim, textTransform: 'uppercase' }}>Founders</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['ANSON SOWBY', 'KURT KRATCHMAN', 'DAVID ROSSELLAT', 'CHRIS MOLLO'].map(n => (
                <span key={n} style={{
                  fontFamily: CF.mono, fontSize: 9, letterSpacing: '0.16em',
                  padding: '4px 7px', border: `1px solid ${CT.rule}`, color: CT.slate,
                }}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* right — title */}
        <div style={{ padding: '56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <window.CnEyebrow color={CT.slateDim}>The Operating Manual</window.CnEyebrow>
          <div>
            <h1 style={{
              fontFamily: CF.display, fontSize: 92, lineHeight: 0.95, fontWeight: 400,
              letterSpacing: '-0.025em', margin: 0, color: CT.ink,
            }}>
              Workflow<br />
              first.<br />
              <span style={{ fontStyle: 'italic', color: CT.blue }}>Software</span><br />
              follows.
            </h1>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            paddingTop: 24, borderTop: `1px solid ${CT.rule}`,
          }}>
            <p style={{
              fontFamily: CF.ui, fontSize: 13, lineHeight: 1.55, color: CT.slate,
              margin: 0, maxWidth: 380, textWrap: 'pretty',
            }}>
              The brand operating system for Codenaim — a marketing
              operating system run by a small, senior team operating
              proprietary tooling against your brand, channel, and
              compliance reality.
            </p>
            <window.CnNum n={1} color={CT.slateDim} style={{ fontSize: 13, letterSpacing: '0.2em' }} />
          </div>
        </div>
      </div>

      {/* bottom meta bar */}
      <div style={{
        padding: '14px 48px', borderTop: `1px solid ${CT.rule}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <window.CnMeta items={['MARK', 'COLOR', 'TYPE', 'VOICE', 'SYSTEM', 'APPLICATIONS']} />
        <window.CnMeta items={['PG.', '01']} />
      </div>
    </div>
  );
}

window.CnCover = CnCover;
