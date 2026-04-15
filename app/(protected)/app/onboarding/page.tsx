import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { getCurrentUserAccess } from '@/lib/access';

export default async function OnboardingPage() {
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
        .atlas-onboarding-shell * { box-sizing: border-box; }
        .atlas-onboarding-shell a { text-decoration: none; color: inherit; }

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

        .checklist{
          list-style:none;
          padding:0;
          margin:0;
          display:grid;
          gap:10px;
        }

        .checklist li{
          position:relative;
          padding-left:18px;
          color:#495671;
        }

        .checklist li::before{
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
          color:#102a57;
          display:block;
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
          min-height:240px;
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

      <div className="atlas-onboarding-shell">
        <header className="atlas-header">
          <div className="atlas-container">
            <nav className="atlas-nav" aria-label="Primary">
              <Link className="atlas-brand" href="/app">
                <div className="atlas-brand-mark">AM</div>
                <div>
                  <div className="atlas-brand-name">Atlas Maximus</div>
                  <div className="atlas-brand-sub">Onboarding and installation</div>
                </div>
              </Link>

              <div className="atlas-nav-links">
              <Link className="atlas-nav-link" href="/app">Portal</Link>
              <Link className="atlas-nav-link" href="/app/onboarding">Onboarding</Link>
              <Link className="atlas-nav-link" href="/app/account">Account</Link>
              <Link className="atlas-nav-link" href="/app/docs">Docs</Link>
              <Link className="atlas-nav-link" href="/app/support">Support</Link>
              <Link className="atlas-nav-link" href="/app/get-started">Get Started</Link>  
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
                  Installation and onboarding for your Jira Marketplace rollout
                </h1>
                <p className="hero-copy">
                  Use this page to guide admins through the rollout process, align setup steps,
                  confirm prerequisites, and prepare Atlas Maximus for activation in the
                  customer Jira environment.
                </p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link className="atlas-btn atlas-btn-primary" href="/#contact">
                    Contact onboarding support
                  </Link>
                  <Link className="atlas-btn atlas-btn-secondary" href="/app">
                    Return to portal
                  </Link>
                </div>

                <div className="hero-proof">
                  <span className="pill">Access status: {access.status}</span>
                  <span className="pill">Jira-first delivery model</span>
                  <span className="pill">Admin onboarding workflow</span>
                </div>
              </div>

              <div className="hero-card">
                <h3>What this page is for</h3>
                <p>
                  Atlas Maximus features are intended to live inside the customer Jira instance.
                  This page supports the rollout, not the gadget runtime itself.
                </p>
                <ul className="checklist">
                  <li>Confirm who owns the Jira admin work</li>
                  <li>Prepare installation prerequisites and access expectations</li>
                  <li>Coordinate Marketplace activation and team rollout</li>
                  <li>Centralize support, setup, and subscriber guidance</li>
                </ul>
              </div>
            </section>

            <section className="step-grid">
              <article className="step-card">
                <div className="step-number">1</div>
                <h3>Confirm ownership</h3>
                <p>Identify the Jira admin, business owner, and subscriber contact for the rollout.</p>
              </article>

              <article className="step-card">
                <div className="step-number">2</div>
                <h3>Validate prerequisites</h3>
                <p>Check instance access, permissions, licensing readiness, and environment details.</p>
              </article>

              <article className="step-card">
                <div className="step-number">3</div>
                <h3>Install and connect</h3>
                <p>Prepare the Marketplace installation path and connection steps for the customer Jira instance.</p>
              </article>

              <article className="step-card">
                <div className="step-number">4</div>
                <h3>Enable adoption</h3>
                <p>Guide teams through setup, documentation, support, and initial usage expectations.</p>
              </article>
            </section>

            <section className="panel-grid">
              <div className="panel">
                <h3>Suggested admin checklist</h3>
                <p>These are strong starter tasks for your admin-facing rollout workflow.</p>
                <ul className="task-list">
                  <li>
                    <div>
                      <strong>Confirm subscriber and Jira admin contacts</strong>
                      <span>Make sure the right owners are aligned before installation begins</span>
                    </div>
                    <span className="badge">Owner</span>
                  </li>
                  <li>
                    <div>
                      <strong>Verify target Jira environment</strong>
                      <span>Identify cloud/site details and admin readiness</span>
                    </div>
                    <span className="badge">Instance</span>
                  </li>
                  <li>
                    <div>
                      <strong>Review permissions and app prerequisites</strong>
                      <span>Capture anything required before enabling Marketplace delivery</span>
                    </div>
                    <span className="badge">Access</span>
                  </li>
                  <li>
                    <div>
                      <strong>Coordinate Marketplace installation timing</strong>
                      <span>Plan the install window and rollout sequence</span>
                    </div>
                    <span className="badge">Install</span>
                  </li>
                  <li>
                    <div>
                      <strong>Provide onboarding support and documentation</strong>
                      <span>Make sure the customer has next-step guidance after activation</span>
                    </div>
                    <span className="badge">Support</span>
                  </li>
                </ul>
              </div>

              <div className="panel">
                <h3>Portal guidance</h3>
                <p>
                  Keep this page focused on Jira rollout and customer enablement rather than trying
                  to simulate the actual gadgets in the web app.
                </p>
                <ul className="task-list">
                  <li>
                    <div>
                      <strong>Protect access</strong>
                      <span>Only approved users should enter the subscriber portal</span>
                    </div>
                    <span className="badge">Secure</span>
                  </li>
                  <li>
                    <div>
                      <strong>Point customers to the right next step</strong>
                      <span>Use clear support and install calls to action</span>
                    </div>
                    <span className="badge">Journey</span>
                  </li>
                  <li>
                    <div>
                      <strong>Centralize documentation later</strong>
                      <span>This page can grow into a richer onboarding hub over time</span>
                    </div>
                    <span className="badge">Docs</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="resource-grid">
  <article className="resource-card">
    <div className="resource-kicker">Installation support</div>
    <h3>Need help preparing the Jira rollout</h3>
    <p>
      Use the protected docs hub for install instructions, admin checklists, and
      rollout notes tailored to customer environments.
    </p>
    <Link className="atlas-btn atlas-btn-primary" href="/app/docs">
      Open docs hub
    </Link>
  </article>

  <article className="resource-card">
    <div className="resource-kicker">Documentation</div>
    <h3>Centralize setup and usage guidance</h3>
    <p>
      This card can now point customers to protected documentation, FAQs, and onboarding
      references for Atlas Maximus in Jira.
    </p>
    <Link className="atlas-btn atlas-btn-secondary" href="/app/docs">
      Open docs hub
    </Link>
  </article>

  <article className="resource-card">
    <div className="resource-kicker">Subscriber admin</div>
    <h3>Keep account and install readiness together</h3>
    <p>
      Use the protected portal for customer-facing account coordination while Jira
      remains the actual runtime environment for the product experience.
    </p>
    <Link className="atlas-btn atlas-btn-secondary" href="/app/account">
      Open account center
    </Link>
  </article>
</section>
          </div>
        </main>
      </div>
    </div>
  );
}
