import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { getCurrentUserAccess } from '@/lib/access';

export default async function DocsPage() {
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
        .atlas-docs-shell * { box-sizing: border-box; }
        .atlas-docs-shell a { text-decoration: none; color: inherit; }

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

        .section-grid{
          display:grid;
          grid-template-columns:280px minmax(0,1fr);
          gap:18px;
          margin-bottom:24px;
        }

        .sidebar{
          padding:20px;
          border-radius:24px;
          background:#fff;
          border:1px solid rgba(21,37,67,.10);
          box-shadow:0 10px 26px rgba(17,36,70,.07);
          align-self:start;
          position:sticky;
          top:98px;
        }

        .sidebar h3{
          margin:0 0 12px;
          font-size:1rem;
          color:#102a57;
          font-weight:900;
        }

        .sidebar-nav{
          display:grid;
          gap:10px;
        }

        .sidebar-nav a{
          padding:12px 14px;
          border-radius:14px;
          background:linear-gradient(180deg, #f8f5ed, #fff);
          border:1px solid rgba(21,37,67,.08);
          color:#495671;
          font-weight:700;
        }

        .sidebar-nav a:hover{
          color:#102a57;
          border-color:rgba(31,74,140,.18);
        }

        .content{
          display:grid;
          gap:18px;
        }

        .doc-panel{
          padding:24px;
          border-radius:24px;
          background:#fff;
          border:1px solid rgba(21,37,67,.10);
          box-shadow:0 10px 26px rgba(17,36,70,.07);
        }

        .doc-panel h2{
          margin:0 0 10px;
          font-size:1.35rem;
          font-weight:900;
          color:#102a57;
        }

        .doc-panel p{
          margin:0 0 16px;
          color:#495671;
        }

        .check-list{
          list-style:none;
          padding:0;
          margin:0;
          display:grid;
          gap:12px;
        }

        .check-list li{
          display:flex;
          justify-content:space-between;
          gap:12px;
          padding:12px 14px;
          border-radius:14px;
          background:linear-gradient(180deg, #f8f5ed, #fff);
          border:1px solid rgba(21,37,67,.08);
        }

        .check-list strong{
          display:block;
          color:#102a57;
        }

        .check-list span{
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

        .two-up{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:18px;
        }

        .callout{
          padding:18px;
          border-radius:18px;
          border:1px solid rgba(21,37,67,.10);
          background:rgba(255,255,255,.78);
        }

        .callout h3{
          margin:0 0 8px;
          color:#102a57;
          font-size:1rem;
          font-weight:900;
        }

        .callout p{
          margin:0;
          color:#495671;
        }

        @media (max-width:1100px){
          .hero,
          .section-grid,
          .two-up{
            grid-template-columns:1fr;
          }

          .sidebar{
            position:static;
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

      <div className="atlas-docs-shell">
        <header className="atlas-header">
          <div className="atlas-container">
            <nav className="atlas-nav" aria-label="Primary">
              <Link className="atlas-brand" href="/app">
                <div className="atlas-brand-mark">AM</div>
                <div>
                  <div className="atlas-brand-name">Atlas Maximus</div>
                  <div className="atlas-brand-sub">Documentation and install guide</div>
                </div>
              </Link>

              <div className="atlas-nav-links">
                <Link className="atlas-nav-link" href="/app">Portal</Link>
                <Link className="atlas-nav-link" href="/app/onboarding">Onboarding</Link>
                <Link className="atlas-nav-link" href="/app/account">Account</Link>
                <Link className="atlas-nav-link" href="/app/docs">Docs</Link>
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
                  Documentation, prerequisites, and Jira installation guidance
                </h1>
                <p className="hero-copy">
                  Use this protected docs hub to centralize installation guidance, readiness
                  checkpoints, prerequisite expectations, and future customer-facing help content
                  for your Atlassian Marketplace rollout.
                </p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link className="atlas-btn atlas-btn-primary" href="/app/onboarding">
                    Back to onboarding
                  </Link>
                  <Link className="atlas-btn atlas-btn-secondary" href="/#contact">
                    Contact support
                  </Link>
                </div>

                <div className="hero-proof">
                  <span className="pill">Access status: {access.status}</span>
                  <span className="pill">Install guide hub</span>
                  <span className="pill">Jira-first delivery</span>
                </div>
              </div>

              <div className="hero-card">
                <h3>How to use this page</h3>
                <p>
                  Keep this page focused on helping admins and subscribers prepare for installation
                  and successful adoption inside Jira.
                </p>
                <ul className="hero-list">
                  <li>Document prerequisites before installation begins</li>
                  <li>Clarify admin responsibilities and rollout ownership</li>
                  <li>Provide setup expectations for customers and teams</li>
                  <li>Grow this into your protected customer docs center over time</li>
                </ul>
              </div>
            </section>

            <section className="section-grid">
              <aside className="sidebar">
                <h3>Documentation sections</h3>
                <div className="sidebar-nav">
                  <a href="#prerequisites">Prerequisites</a>
                  <a href="#installation">Installation flow</a>
                  <a href="#permissions">Permissions</a>
                  <a href="#rollout">Rollout guidance</a>
                  <a href="#support">Support</a>
                </div>
              </aside>

              <div className="content">
                <section className="doc-panel" id="prerequisites">
                  <h2>Prerequisites</h2>
                  <p>
                    Before installation, make sure the subscriber and Jira admin are aligned on
                    ownership, environment, permissions, and rollout timing.
                  </p>
                  <ul className="check-list">
                    <li>
                      <div>
                        <strong>Identify the target Jira site</strong>
                        <span>Document the instance where Atlas Maximus will be installed</span>
                      </div>
                      <span className="badge">Site</span>
                    </li>
                    <li>
                      <div>
                        <strong>Confirm the Jira admin owner</strong>
                        <span>Know who can approve and complete Marketplace installation</span>
                      </div>
                      <span className="badge">Admin</span>
                    </li>
                    <li>
                      <div>
                        <strong>Clarify the subscriber contact</strong>
                        <span>Define the person who owns the customer relationship and rollout path</span>
                      </div>
                      <span className="badge">Owner</span>
                    </li>
                    <li>
                      <div>
                        <strong>Align on expected use case</strong>
                        <span>Document the intended team, program, or leadership audience</span>
                      </div>
                      <span className="badge">Scope</span>
                    </li>
                  </ul>
                </section>

                <section className="doc-panel" id="installation">
                  <h2>Installation flow</h2>
                  <p>
                    This section should guide the customer through a clean admin flow from readiness
                    to installation and activation.
                  </p>
                  <ul className="check-list">
                    <li>
                      <div>
                        <strong>Step 1: Review install readiness</strong>
                        <span>Validate prerequisites before opening the Marketplace install flow</span>
                      </div>
                      <span className="badge">Ready</span>
                    </li>
                    <li>
                      <div>
                        <strong>Step 2: Complete Jira-side installation</strong>
                        <span>Install Atlas Maximus into the intended customer environment</span>
                      </div>
                      <span className="badge">Install</span>
                    </li>
                    <li>
                      <div>
                        <strong>Step 3: Confirm access and enablement</strong>
                        <span>Make sure the right admins and users can begin adoption</span>
                      </div>
                      <span className="badge">Enable</span>
                    </li>
                    <li>
                      <div>
                        <strong>Step 4: Support initial rollout</strong>
                        <span>Provide next-step guidance after activation is complete</span>
                      </div>
                      <span className="badge">Launch</span>
                    </li>
                  </ul>
                </section>

                <section className="doc-panel" id="permissions">
                  <h2>Permissions and access</h2>
                  <p>
                    Keep this section focused on the access expectations that should be reviewed
                    before rollout inside Jira.
                  </p>
                  <div className="two-up">
                    <div className="callout">
                      <h3>Admin expectations</h3>
                      <p>
                        Clarify what level of Jira admin participation is needed for installation,
                        access review, and environment-level setup.
                      </p>
                    </div>
                    <div className="callout">
                      <h3>User enablement</h3>
                      <p>
                        Define who should be able to use the delivered capabilities once the app is
                        installed and configured.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="doc-panel" id="rollout">
                  <h2>Rollout guidance</h2>
                  <p>
                    Use this section to describe how Atlas Maximus should be introduced to customer
                    stakeholders, admins, and teams after installation.
                  </p>
                  <ul className="check-list">
                    <li>
                      <div>
                        <strong>Start with a small admin-led rollout</strong>
                        <span>Validate setup with the right owners before broader enablement</span>
                      </div>
                      <span className="badge">Pilot</span>
                    </li>
                    <li>
                      <div>
                        <strong>Provide onboarding guidance early</strong>
                        <span>Share install notes, usage expectations, and support paths</span>
                      </div>
                      <span className="badge">Guide</span>
                    </li>
                    <li>
                      <div>
                        <strong>Capture customer questions centrally</strong>
                        <span>Use the protected portal to keep support and admin guidance organized</span>
                      </div>
                      <span className="badge">Support</span>
                    </li>
                  </ul>
                </section>

                <section className="doc-panel" id="support">
                  <h2>Support and next steps</h2>
                  <p>
                    This docs page can become the protected support center for onboarding, setup,
                    FAQs, and installation follow-up.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link className="atlas-btn atlas-btn-primary" href="/#contact">
                      Contact support
                    </Link>
                    <Link className="atlas-btn atlas-btn-secondary" href="/app/account">
                      Open account center
                    </Link>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
