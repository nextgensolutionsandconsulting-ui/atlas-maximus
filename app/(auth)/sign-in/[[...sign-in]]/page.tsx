import Link from 'next/link';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, rgba(182,138,53,.08), transparent 26%), linear-gradient(180deg, #faf8f2 0%, #f7f5ef 100%)',
        color: '#152543',
      }}
    >
      <style>{`
        .am-auth-shell * { box-sizing: border-box; }
        .am-auth-shell a { text-decoration: none; color: inherit; }

        .am-auth-header{
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(247,245,239,.84);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(17,36,70,.08);
        }

        .am-auth-container{
          width: min(1220px, calc(100% - 32px));
          margin: 0 auto;
        }

        .am-auth-nav{
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }

        .am-auth-brand{
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .am-auth-brand-mark{
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, rgba(182,138,53,.15), rgba(31,74,140,.12)), #fff;
          border: 1px solid rgba(21,37,67,.18);
          font-weight: 900;
          color: #102a57;
          box-shadow: 0 10px 26px rgba(17,36,70,.07);
          flex: 0 0 auto;
        }

        .am-auth-brand-name{
          font-size: 1rem;
          font-weight: 850;
          color: #102a57;
          line-height: 1.1;
        }

        .am-auth-brand-sub{
          font-size: .7rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #b68a35;
          font-weight: 800;
          margin-top: 2px;
        }

        .am-auth-nav-links{
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .am-auth-nav-link{
          font-weight: 700;
          color: #495671;
          font-size: .95rem;
        }

        .am-auth-nav-link:hover{
          color: #102a57;
        }

        .am-auth-nav-actions{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .am-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          min-height:50px;
          padding:0 18px;
          border-radius:12px;
          border:1px solid transparent;
          font-weight:800;
          cursor:pointer;
          transition:transform .18s ease, box-shadow .18s ease;
        }

        .am-btn:hover{
          transform: translateY(-1px);
        }

        .am-btn-primary{
          background: linear-gradient(135deg,#1f4a8c,#102a57);
          color:#fff;
          box-shadow:0 10px 26px rgba(17,36,70,.07);
        }

        .am-btn-secondary{
          background:#fff;
          color:#102a57;
          border-color:rgba(21,37,67,.18);
        }

        .am-auth-main{
          padding: 40px 0 56px;
        }

        .am-auth-hero{
          display:grid;
          grid-template-columns: 1fr;
          justify-items:center;
          text-align:center;
        }

        .am-eyebrow{
          display:inline-flex;
          align-items:center;
          gap:10px;
          min-height:42px;
          padding:0 16px;
          border-radius:999px;
          border:1px solid rgba(21,37,67,.18);
          background:rgba(182,138,53,.07);
          color:#b68a35;
          font-weight:800;
          font-size:.82rem;
          letter-spacing:.14em;
          text-transform:uppercase;
          margin-bottom:22px;
        }

        .am-eyebrow::before{
          content:"";
          width:8px;
          height:8px;
          border-radius:50%;
          background:#b68a35;
          box-shadow:0 0 0 6px rgba(182,138,53,.13);
        }

        .atlas-wrap{
          position:relative;
          width:min(100%, 540px);
          height:250px;
          display:grid;
          place-items:center;
          isolation:isolate;
          margin: 0 auto 14px;
        }

        .atlas-halo{
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

        .ring{
          position:absolute;
          border:2.5px solid rgba(18,31,56,.88);
          border-radius:50%;
          background:transparent;
          z-index:2;
          box-shadow:0 0 0 1px rgba(182,138,53,.18) inset;
          transform-style:preserve-3d;
        }

        .ring.gold{ border-color:rgba(182,138,53,.88); }
        .ring-1{ width:210px; height:210px; animation:spinA 16s linear infinite; }
        .ring-2{ width:238px; height:108px; transform:rotateX(72deg) rotateZ(12deg); animation:spinB 10s linear infinite reverse; }
        .ring-3{ width:112px; height:262px; transform:rotateY(72deg) rotateZ(18deg); animation:spinC 14s linear infinite; }
        .ring-4{ width:266px; height:124px; transform:rotateX(18deg) rotateZ(-28deg); animation:spinD 12s linear infinite reverse; }
        .ring-5{ width:132px; height:282px; transform:rotateY(20deg) rotateZ(52deg); animation:spinE 18s linear infinite; }
        .ring-6{ width:288px; height:288px; border-width:1.5px; opacity:.45; animation:spinF 22s linear infinite reverse; }

        @keyframes spinA{from{transform:rotateZ(0deg)}to{transform:rotateZ(360deg)}}
        @keyframes spinB{from{transform:rotateX(72deg) rotateZ(12deg)}to{transform:rotateX(72deg) rotateZ(372deg)}}
        @keyframes spinC{from{transform:rotateY(72deg) rotateZ(18deg)}to{transform:rotateY(72deg) rotateZ(378deg)}}
        @keyframes spinD{from{transform:rotateX(18deg) rotateZ(-28deg)}to{transform:rotateX(18deg) rotateZ(332deg)}}
        @keyframes spinE{from{transform:rotateY(20deg) rotateZ(52deg)}to{transform:rotateY(20deg) rotateZ(412deg)}}
        @keyframes spinF{from{transform:rotateZ(0deg)}to{transform:rotateZ(-360deg)}}

        .am-auth-title{
          max-width: 980px;
          margin: 0 auto 12px;
          font-size: clamp(2.6rem, 5vw, 4.8rem);
          line-height: 1.02;
          letter-spacing: -.045em;
          font-weight: 900;
          color:#102a57;
        }

        .am-auth-copy{
          font-size:1.08rem;
          color:#495671;
          max-width:760px;
          margin:0 auto 28px;
        }

        .am-auth-card-wrap{
          width:100%;
          display:grid;
          place-items:center;
          margin-top: 4px;
        }

        .am-auth-form-shell{
          width:100%;
          max-width:520px;
          padding: 18px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(243,239,229,.95), rgba(255,255,255,.96));
          border: 1px solid rgba(21,37,67,.08);
          box-shadow: 0 18px 50px rgba(17,36,70,.11);
        }

        @media (max-width: 960px){
          .am-auth-nav-links{ display:none; }
          .am-auth-main{ padding-top: 24px; }
          .am-auth-title{
            font-size: clamp(2.1rem, 10vw, 3.7rem);
          }
        }

        @media (max-width: 640px){
          .am-auth-container{
            width:min(1220px, calc(100% - 20px));
          }
          .am-auth-brand-sub{ display:none; }
          .atlas-wrap{ height:220px; }
          .am-auth-form-shell{ padding:12px; }
        }
      `}</style>

      <div className="am-auth-shell">
        <header className="am-auth-header">
          <div className="am-auth-container">
            <nav className="am-auth-nav" aria-label="Primary">
              <Link className="am-auth-brand" href="/">
                <div className="am-auth-brand-mark">AM</div>
                <div>
                  <div className="am-auth-brand-name">Atlas Maximus</div>
                  <div className="am-auth-brand-sub">AI-powered agile operating system</div>
                </div>
              </Link>

              <div className="am-auth-nav-links">
                <Link className="am-auth-nav-link" href="/#platform">Platform</Link>
                <Link className="am-auth-nav-link" href="/#solutions">Solutions</Link>
                <Link className="am-auth-nav-link" href="/pricing">Pricing</Link>
                <Link className="am-auth-nav-link" href="/#contact">Contact</Link>
              </div>

              <div className="am-auth-nav-actions">
                <Link className="am-btn am-btn-secondary" href="/">
                  Back to site
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="am-auth-main">
          <div className="am-auth-container">
            <section className="am-auth-hero">
              <div className="am-eyebrow">Atlas Maximus AI</div>

              <div className="atlas-wrap" aria-label="Atlas Maximus rotating visual">
                <div className="atlas-halo" />
                <div className="ring ring-6 gold" />
                <div className="ring ring-1" />
                <div className="ring ring-2 gold" />
                <div className="ring ring-3" />
                <div className="ring ring-4 gold" />
                <div className="ring ring-5" />
                <div className="atlas-core" />
              </div>

              <h1 className="am-auth-title">Welcome back to Atlas Maximus</h1>

              <p className="am-auth-copy">
                Sign in to access your Atlas Maximus subscriber workspace, operating dashboards, and AI-powered delivery intelligence.
              </p>

              <div className="am-auth-card-wrap">
                <div className="am-auth-form-shell">
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
                          boxShadow: '0 12px 28px rgba(17,36,70,.08)',
                          borderRadius: '24px',
                          padding: '24px',
                        },
                        headerTitle: {
                          color: '#102a57',
                          fontWeight: '900',
                          fontSize: '1.9rem',
                        },
                        headerSubtitle: {
                          color: '#6d778b',
                        },
                        socialButtonsBlockButton: {
                          borderRadius: '12px',
                          border: '1px solid rgba(21,37,67,.14)',
                          boxShadow: 'none',
                        },
                        socialButtonsBlockButtonText: {
                          color: '#152543',
                          fontWeight: '700',
                        },
                        formFieldInput: {
                          borderRadius: '12px',
                          border: '1px solid rgba(21,37,67,.18)',
                          boxShadow: 'none',
                        },
                        formFieldLabel: {
                          color: '#152543',
                          fontWeight: '700',
                        },
                        formButtonPrimary: {
                          background: 'linear-gradient(135deg,#1f4a8c,#102a57)',
                          borderRadius: '12px',
                          boxShadow: '0 10px 26px rgba(17,36,70,.07)',
                          fontWeight: '800',
                        },
                        dividerText: {
                          color: '#6d778b',
                        },
                        footerAction: {
                          display: 'none',
                        },
                        footer: {
                          display: 'none',
                        },
                        identityPreviewText: {
                          color: '#495671',
                        },
                        formResendCodeLink: {
                          color: '#1f4a8c',
                          fontWeight: '700',
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
