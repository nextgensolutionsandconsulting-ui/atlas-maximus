import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { getCurrentUserAccess } from '@/lib/access';

export default async function GettingStartedPage() {
  const access = await getCurrentUserAccess();

  if (!access.hasAccess) {
    redirect('/pricing');
  }

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
        .atlas-start-shell * { box-sizing: border-box; }
        .atlas-start-shell a { text-decoration: none; color: inherit; }

        .atlas-header{
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(247,245,239,.84);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(17,36,70,.08);
        }

        .atlas-container{
          width: min(1220px, calc(100% - 32px));
          margin: 0 auto;
        }

        .atlas-nav{
          min-height: 78px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:22px;
        }

        .atlas-brand{
          display:flex;
          align-items:center;
          gap:14px;
          min-width:0;
        }

        .atlas-brand-mark{
          width:50px;
          height:50px;
          border-radius:16px;
          display:grid;
          place-items:center;
          background:linear-gradient(135deg, rgba(182,138,53,.15), rgba(31,74,140,.12)), #fff;
          border:1px solid rgba(21,37,67,.18);
          font-weight:900;
          color:#102a57;
          box-shadow:0 10px 26px rgba(17,36,70,.07);
          flex:0 0 auto;
        }

        .atlas-brand-name{
          font-size:1rem;
          font-weight:850;
          color:#102a57;
          line-height:1.1;
        }

        .atlas-brand-sub{
          font-size:.7rem;
          letter-spacing:.14em;
          text-transform:uppercase;
          color:#b68a35;
          font-weight:800;
          margin-top:2px;
        }

        .atlas-nav-links{
          display:flex;
          align-items:center;
          gap:22px;
        }

        .atlas-nav-link{
          font-weight:700;
          color:#495671;
          font-size:.95rem;
        }

        .atlas-nav-link:hover{
          color:#102a57;
        }

        .atlas-nav-actions{
          display:flex;
          align-items:center;
          gap:14px;
        }

        .atlas-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          min-height:48px;
          padding:0 18px;
          border-radius:12px;
          border:1px solid transparent;
          font-weight:800;
          cursor:pointer;
          transition:transform .18s ease, box-shadow .18s ease;
        }

        .atlas-btn:hover{ transform:translateY(-1px); }

        .atlas-btn-primary{
          background:linear-gradient(135deg,#1f4a8c,#102a57);
          color:#fff;
          box-shadow:0 10px 26px rgba(17,36,70,.07);
        }

        .atlas-btn-secondary{
          background:#fff;
          color:#102a57;
          border-color:rgba(21,37,67,.18);
        }

        .atlas-main{
          padding:42px 0 72px;
        }

        .atlas-eyebrow{
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
          margin-bottom:20px;
        }

        .atlas-eyebrow::before{
          content:"";
          width:8px;
          height:8px;
          border-radius:50%;
          background:#b68a35;
          box-shadow:0 0 0 6px rgba(182,138,53,.13);
        }

        .hero{
          display:grid;
          grid-template-columns:1.05fr .95fr;
          gap:24px;
          align-items:center;
          margin-bottom:24px;
        }

        .hero-title{
          font-size:clamp(2.3rem, 5vw, 4.3rem);
          line-height:1.02;
          letter-spacing:-.045em;
          font-weight:900;
          color:#102a57;
          margin:0 0 12px;
        }

        .hero-copy{
          font-size:1.08rem;
          color:#495671;
          margin:0 0 22px;
          max-width:760px;
        }

        .hero-proof{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-top:12px;
        }

        .pill{
          display:inline-flex;
          align-items:center;
          min-height:38px;
          padding:0 14px;
          border-radius:999px;
          border:1px solid rgba(21,37,67,.10);
          background:rgba(255,255,255,.74);
          color:#495671;
          font-weight:700;
          font-size:.92rem;
        }

        .hero-card{
          padding:26px;
          border-radius:28px;
          background:linear-gradient(180deg, rgba(243,239,229,.95), rgba(255,255,255,.96));
          border:1px solid rgba(21,37,67,.08);
          box-shadow:0 18px 50px rgba(17,36,70,.11);
        }

        .hero-card h3{
          margin:0 0 10px;
          font-size:1.25rem;
          font-weight:900;
          color:#102a57;
        }

        .hero-card p{
          margin:0 0 14px;
          color:#495671;
        }

        .hero-list{
          list-style:none;
          padding:0;
          margin:0;
          display:grid;
          gap:10px;
        }

        .hero-list li{
          position:relative;
          padding-left:18px;
          color:#495671;
        }

        .hero-list li::before{
          content:"";
          position:absolute;
          left:0;
          top:10px;
          width:7px;
          height:7px;
          border-radius:50%;
          background:#1f4a8c;
        }

        .step-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:14px;
          margin-bottom:24px;
        }

        .step-card{
          padding:20px;
          border-radius:20px;
          border:1px solid rgba(21,37,67,.10);
          background:rgba(255,255,255,.78);
          box-shadow:0 10px 26px rgba(17,36,70,.07);
        }

        .step-number{
          width:36px;
          height:36px;
          border-radius:12px;
          display:grid;
          place-items:center;
          background:rgba(31,74,140,.10);
          color:#102a57;
          font-weight:900;
          margin-bottom:12px;
        }

        .step-card h3{
          margin:0 0 8px;
          color:#102a57;
          font-size:1.05rem;
          font-weight:900;
        }

        .step-card p{
          margin:0;
          color:#495671;
          font-size:.95rem;
        }

        .panel-grid{
          display:grid;
          grid-template-columns:1.08fr .92fr;
          gap:18px;
          margin-bottom:22px;
        }

        .panel{
          padding:24px;
          border-radius:24px;
          background:#fff;
          border:1px solid rgba(21,37,67,.10);
          box-shadow:0 10px 26px rgba(17,36,70,.07);
        }

        .panel h3{
          margin:0 0 10px;
          font-size:1.2rem;
          font-weight:900;
          color:#102a57;
        }

        .panel p{
          margin:0 0 16px;
          color:#495671;
        }

        .task-list{
          list-style:none;
          padding:0;
          margin:0;
          display:grid;
          gap:12px;
        }

        .task-list li{
          display:flex;
          justify-content:space-between;
          gap:12px;
          padding:12px 14px;
          border-radius:14px;
          background:linear-gradient(180deg, #f8f5ed, #fff);
          border:1px solid rgba(21,37,67,.08);
        }

        .task-list strong{
          display:block;
          color:#102a57;
        }

        .task-list span{
          color:#6d778b;
          font-size:.94rem;
        }

        .badge{
          display:inline-flex;
          align-items:center;
          min-height:30px;
          padding:0 10px;
          border-radius:999px;
          background:rgba(31,74,140,.10);
          color:#102a57;
          font-size:.74rem;
          font-weight:900;
          letter-spacing:.08em;
          text-transform:uppercase;
          white-space:nowrap;
        }

        .resource-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:18px;
        }

        .resource-card{
          padding:24px;
          border-radius:24px;
          background:#fff;
          border:1px solid rgba(21,37,67,.10);
          box-shadow:0 10px 26px rgba(17,36,70,.07);
          display:flex;
          flex-direction:column;
          min-height:220px;
        }

        .resource-kicker{
          font-size:.76rem;
          letter-spacing:.14em;
          text-transform:uppercase;
          color:#b68a35;
          font-weight:900;
          margin-bottom:10px;
        }

        .resource-card h3{
          margin:0 0 10px;
          font-size:1.2rem;
          color:#102a57;
          font-weight:900;
        }

        .resource-card p{
          color:#495671;
          margin:0 0 18px;
          flex:1;
        }

        @media (max-width:1100px){
          .hero,
          .step-grid,
          .panel-grid,
          .resource-grid{
            grid-template-columns:1fr;
          }
        }

        @media (max-width:900px){
          .atlas-nav-links{ display:none; }
        }

        @media (max-width:640px){
          .atlas-container{
            width:min(1220px, calc(100% - 20px));
          }
          .atlas-brand-sub{ display:none; }
          .atlas-main{ padding-top:28px; }
          .hero-title{
            font-size:clamp(2.05rem, 10vw, 3.5rem);
          }
        }
      `}</style>

      <div className="atlas-start-shell">
        <header className="atlas-header">
          <div className="atlas-container">
            <nav className="atlas-nav" aria-label="Primary">
              <Link className="atlas-brand" href="/app">
                <div className="atlas-brand-mark">AM</div>
                <div>
                  <div className="atlas-brand-name">Atlas Maximus</div>
                  <div className="atlas-brand-sub">Getting started</div>
                </div>
              </Link>

              <div className="atlas-nav-links">
                <Link className="atlas-nav-link" href="/app">Portal</Link>
                <Link className="atlas-nav-link" href="/app/get-started">Get Started</Link>
                <Link className="atlas-nav-link" href="/app/onboarding">Onboarding</Link>
                <Link className="atlas-nav-link" href="/app/account">Account</Link>
                <Link className="atlas-nav-link" href="/app/docs">Docs</Link>
                <Link className="atlas-nav-link" href="/app/support">Support</Link>
              </div>

              <div className="atlas-nav-actions">
                <Link className="atlas-btn atlas-btn-secondary" href="/app">
                  Back to portal
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </nav>
          </div>
        </header>

        <main className="atlas-main">
          <div className="atlas-container">
            <section className="hero">
              <div>
                <div className="atlas-eyebrow">Atlas Maximus AI</div>
                <h1 className="hero-title">
                  Getting started with your subscriber portal and Jira rollout path
                </h1>
                <p className="hero-copy">
                  Use this page as the first-stop checklist for new subscribers. It gives
                  customers a simple path from protected access to onboarding, installation
                  preparation, documentation, and support.
                </p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link className="atlas-btn atlas-btn-primary" href="/app/onboarding">
                    Start onboarding
                  </Link>
                  <Link className="atlas-btn atlas-btn-secondary" href="/app/docs">
                    Open install docs
                  </Link>
                </div>

                <div className="hero-proof">
                  <span className="pill">Access status: {access.status}</span>
                  <span className="pill">First-stop checklist</span>
                  <span className="pill">Subscriber journey active</span>
                </div>
              </div>

              <div className="hero-card">
                <h3>What this page is for</h3>
                <p>
                  This page gives new subscribers a simple, branded starting point inside the
                  protected Atlas Maximus portal.
                </p>
                <ul className="hero-list">
                  <li>Confirm protected access is working</li>
                  <li>Guide admins into onboarding and rollout</li>
                  <li>Point customers to docs and support quickly</li>
                  <li>Create a cleaner first-time subscriber experience</li>
                </ul>
              </div>
            </section>

            <section className="step-grid">
              <article className="step-card">
                <div className="step-number">1</div>
                <h3>Enter the portal</h3>
                <p>Sign in and confirm your protected subscriber access is active.</p>
              </article>

              <article className="step-card">
                <div className="step-number">2</div>
                <h3>Review onboarding</h3>
                <p>Align install owners, prerequisites, and Marketplace rollout readiness.</p>
              </article>

              <article className="step-card">
                <div className="step-number">3</div>
                <h3>Read the docs</h3>
                <p>Use the protected docs hub for setup, installation, and support notes.</p>
              </article>

              <article className="step-card">
                <div className="step-number">4</div>
                <h3>Use support when needed</h3>
                <p>Move into support for help, follow-up, and customer assistance paths.</p>
              </article>
            </section>

            <section className="panel-grid">
              <div className="panel">
                <h3>Recommended first-time subscriber workflow</h3>
                <p>This gives customers a clear first path after logging in.</p>
                <ul className="task-list">
                  <li>
                    <div>
                      <strong>Step 1: Confirm access</strong>
                      <span>Make sure the subscriber can enter the protected portal successfully</span>
                    </div>
                    <span className="badge">Access</span>
                  </li>
                  <li>
                    <div>
                      <strong>Step 2: Open onboarding</strong>
                      <span>Review rollout readiness, install ownership, and Jira environment prep</span>
                    </div>
                    <span className="badge">Onboarding</span>
                  </li>
                  <li>
                    <div>
                      <strong>Step 3: Review docs</strong>
                      <span>Use protected documentation for install steps and prerequisites</span>
                    </div>
                    <span className="badge">Docs</span>
                  </li>
                  <li>
                    <div>
                      <strong>Step 4: Keep support nearby</strong>
                      <span>Use the support center if installation or rollout help is needed</span>
                    </div>
                    <span className="badge">Support</span>
                  </li>
                </ul>
              </div>

              <div className="panel">
                <h3>Why this page matters</h3>
                <p>
                  It turns the portal into a guided customer journey instead of only a set of
                  disconnected pages.
                </p>
                <ul className="task-list">
                  <li>
                    <div>
                      <strong>Cleaner first impression</strong>
                      <span>Subscribers get a guided path instead of guessing where to start</span>
                    </div>
                    <span className="badge">Experience</span>
                  </li>
                  <li>
                    <div>
                      <strong>Better admin readiness</strong>
                      <span>Jira admins know where to go next for rollout and docs</span>
                    </div>
                    <span className="badge">Admin</span>
                  </li>
                  <li>
                    <div>
                      <strong>Future-friendly structure</strong>
                      <span>Billing and provisioning can slot in later without redesigning the flow</span>
                    </div>
                    <span className="badge">Future</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="resource-grid">
              <article className="resource-card">
                <div className="resource-kicker">Onboarding</div>
                <h3>Go straight into rollout readiness</h3>
                <p>
                  Use the onboarding hub to prepare install owners, prerequisites, and Jira setup.
                </p>
                <Link className="atlas-btn atlas-btn-primary" href="/app/onboarding">
                  Open onboarding
                </Link>
              </article>

              <article className="resource-card">
                <div className="resource-kicker">Documentation</div>
                <h3>Use the protected install guide</h3>
                <p>
                  Open the docs hub for prerequisites, installation flow, permissions, and rollout notes.
                </p>
                <Link className="atlas-btn atlas-btn-secondary" href="/app/docs">
                  Open docs
                </Link>
              </article>

              <article className="resource-card">
                <div className="resource-kicker">Support</div>
                <h3>Keep help close by</h3>
                <p>
                  Use the support center for customer help, follow-up, and subscriber assistance.
                </p>
                <Link className="atlas-btn atlas-btn-secondary" href="/app/support">
                  Open support
                </Link>
              </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
