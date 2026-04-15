import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, rgba(182,138,53,.08), transparent 26%), linear-gradient(180deg, #faf8f2 0%, #f7f5ef 100%)',
        color: '#152543',
        display: 'grid',
        placeItems: 'center',
        padding: '32px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at center, rgba(182,138,53,.08) 0%, rgba(182,138,53,.03) 28%, transparent 64%)',
          filter: 'blur(12px)',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: 1180,
          display: 'grid',
          gridTemplateColumns: '1fr',
          justifyItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            minHeight: 42,
            padding: '0 16px',
            borderRadius: 999,
            border: '1px solid rgba(21,37,67,.18)',
            background: 'rgba(182,138,53,.07)',
            color: '#b68a35',
            fontWeight: 800,
            fontSize: '.82rem',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            marginBottom: 22,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#b68a35',
              boxShadow: '0 0 0 6px rgba(182,138,53,.13)',
              display: 'inline-block',
            }}
          />
          Atlas Maximus AI
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 540,
            height: 240,
            display: 'grid',
            placeItems: 'center',
            marginBottom: 18,
          }}
        >
          <style>{`
            .atlas-ring-wrap{
              position:relative;
              width:260px;
              height:260px;
              display:grid;
              place-items:center;
              isolation:isolate;
            }
            .atlas-ring-halo{
              position:absolute;
              inset:0;
              background:radial-gradient(circle at center, rgba(182,138,53,.18) 0%, rgba(182,138,53,.08) 28%, transparent 64%);
              filter:blur(14px);
              z-index:0;
            }
            .atlas-core{
              position:relative;
              width:18px;
              height:18px;
              border-radius:50%;
              background:radial-gradient(circle at 35% 35%, #f4dd9f, #8c6a1f 72%);
              box-shadow:0 0 0 10px rgba(182,138,53,.10),0 0 0 28px rgba(182,138,53,.06),0 12px 30px rgba(0,0,0,.12);
              z-index:4;
            }
            .atlas-ring{
              position:absolute;
              border:2.5px solid rgba(18,31,56,.88);
              border-radius:50%;
              background:transparent;
              z-index:2;
              box-shadow:0 0 0 1px rgba(182,138,53,.18) inset;
              transform-style:preserve-3d;
            }
            .atlas-ring.gold{border-color:rgba(182,138,53,.88)}
            .atlas-ring-1{width:160px;height:160px;animation:spinA 16s linear infinite}
            .atlas-ring-2{width:190px;height:90px;transform:rotateX(72deg) rotateZ(12deg);animation:spinB 10s linear infinite reverse}
            .atlas-ring-3{width:96px;height:210px;transform:rotateY(72deg) rotateZ(18deg);animation:spinC 14s linear infinite}
            .atlas-ring-4{width:220px;height:110px;transform:rotateX(18deg) rotateZ(-28deg);animation:spinD 12s linear infinite reverse}
            .atlas-ring-5{width:112px;height:224px;transform:rotateY(20deg) rotateZ(52deg);animation:spinE 18s linear infinite}
            .atlas-ring-6{width:238px;height:238px;border-width:1.5px;opacity:.45;animation:spinF 22s linear infinite reverse}

            @keyframes spinA{from{transform:rotateZ(0deg)}to{transform:rotateZ(360deg)}}
            @keyframes spinB{from{transform:rotateX(72deg) rotateZ(12deg)}to{transform:rotateX(72deg) rotateZ(372deg)}}
            @keyframes spinC{from{transform:rotateY(72deg) rotateZ(18deg)}to{transform:rotateY(72deg) rotateZ(378deg)}}
            @keyframes spinD{from{transform:rotateX(18deg) rotateZ(-28deg)}to{transform:rotateX(18deg) rotateZ(332deg)}}
            @keyframes spinE{from{transform:rotateY(20deg) rotateZ(52deg)}to{transform:rotateY(20deg) rotateZ(412deg)}}
            @keyframes spinF{from{transform:rotateZ(0deg)}to{transform:rotateZ(-360deg)}}
          `}</style>

          <div className="atlas-ring-wrap" aria-label="Atlas Maximus rotating visual">
            <div className="atlas-ring-halo" />
            <div className="atlas-ring atlas-ring-6 gold" />
            <div className="atlas-ring atlas-ring-1" />
            <div className="atlas-ring atlas-ring-2 gold" />
            <div className="atlas-ring atlas-ring-3" />
            <div className="atlas-ring atlas-ring-4 gold" />
            <div className="atlas-ring atlas-ring-5" />
            <div className="atlas-core" />
          </div>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.35rem, 5vw, 4.65rem)',
            lineHeight: 1.01,
            letterSpacing: '-.045em',
            fontWeight: 900,
            color: '#102a57',
            textAlign: 'center',
            maxWidth: 980,
            margin: '0 auto 14px',
          }}
        >
          Welcome back to Atlas Maximus
        </h1>

        <p
          style={{
            fontSize: '1.08rem',
            color: '#495671',
            textAlign: 'center',
            maxWidth: 760,
            margin: '0 auto 28px',
          }}
        >
          Sign in to access your Atlas Maximus subscriber workspace, operating dashboards, and AI-powered delivery intelligence.
        </p>

        <div
          style={{
            width: '100%',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <SignIn
            path="/sign-in"
            forceRedirectUrl="/app"
            appearance={{
              elements: {
                rootBox: {
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                },
                cardBox: {
                  width: '100%',
                  maxWidth: '460px',
                },
                card: {
                  background: '#ffffff',
                  border: '1px solid rgba(21,37,67,.10)',
                  boxShadow: '0 18px 50px rgba(17,36,70,.11)',
                  borderRadius: '24px',
                  padding: '24px',
                },
                headerTitle: {
                  color: '#102a57',
                  fontWeight: '900',
                  fontSize: '1.7rem',
                },
                headerSubtitle: {
                  color: '#6d778b',
                },
                socialButtonsBlockButton: {
                  borderRadius: '12px',
                  border: '1px solid rgba(21,37,67,.18)',
                },
                formButtonPrimary: {
                  background: 'linear-gradient(135deg,#1f4a8c,#102a57)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 26px rgba(17,36,70,.07)',
                  fontWeight: '800',
                },
                formFieldInput: {
                  borderRadius: '12px',
                  border: '1px solid rgba(21,37,67,.18)',
                  boxShadow: 'none',
                },
                footerAction: {
                  display: 'none',
                },
                identityPreviewText: {
                  color: '#495671',
                },
                formFieldLabel: {
                  color: '#152543',
                  fontWeight: '700',
                },
                dividerText: {
                  color: '#6d778b',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
