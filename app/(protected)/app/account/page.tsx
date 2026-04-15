import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { getCurrentUserAccess } from '@/lib/access';

export default async function AccountPage() {
  const access = await getCurrentUserAccess();

  if (!access.hasAccess) {
    redirect('/pricing');
  }

  const user = await currentUser();
  const primaryEmail = user?.emailAddresses?.[0]?.emailAddress ?? 'No email found';
  const fullName =
    [user?.firstName, user?.lastName].filter(Boolean).join(' ') || 'Atlas Maximus Subscriber';

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
        .atlas-account-shell * { box-sizing: border-box; }
        .atlas-account-shell a { text-decoration: none; color: inherit; }

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

        .meta-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:14px;
          margin-bottom:24px;
        }

        .meta-card{
          padding:20px;
          border-radius:20px;
          border:1px solid rgba(21,37,67,.10);
          background:rgba(255,255,255,.78);
          box-shadow:0 10px 26px rgba(17,36,70,.07);
        }

        .meta-kicker{
          font-size:.78rem;
          letter-spacing:.12em;
          text-transform:uppercase;
          color:#b68a35;
          font-weight:900;
          margin-bottom:8px;
        }

        .meta-value{
          font-size:1.2rem;
          font-weight:900;
          color:#102a57;
          margin-bottom:8px;
          word-break:break-word;
        }

        .meta-copy{
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
          .meta-grid,
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

      <div className="atlas-account-shell">
        <header className="atlas-header">
          <div className="atlas-container">
            <nav className="atlas-nav" aria-label="Primary">
              <Link className="atlas-brand" href="/app">
                <div className="atlas-brand-mark">AM</div>
                <div>
                  <div className="atlas-brand-name">Atlas Maximus</div>
                  <div className="atlas-brand-sub">Subscriber account</div>
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
                  Subscriber account, support, and rollout readiness
                </h1>
                <p className="hero-copy">
                  Use this page to review your current account context, protected access status,
                  onboarding path, and the support actions that will later sit alongside billing,
                  licensing, and Marketplace provisioning.
                </p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link className="atlas-btn atlas-btn-primary" href="/app/onboarding">
                    Open onboarding hub
                  </Link>
                  <Link className="atlas-btn atlas-btn-secondary" href="/pricing">
                    View plan details
                  </Link>
                </div>

                <div className="hero-proof">
                  <span className="pill">Access status: {access.status}</span>
                  <span className="pill">Protected subscriber account</span>
                  <span className="pill">Ready for future billing flows</span>
                </div>
              </div>

              <div className="hero-card">
                <h3>Account purpose</h3>
                <p>
                  This page acts as the subscriber-facing account center for Atlas Maximus while
                  Jira remains the runtime environment for the Marketplace-delivered product.
                </p>
                <ul className="task-list">
                  <li>
                    <div>
                      <strong>Review account context</strong>
                      <span>Confirm who owns the subscription and rollout journey</span>
                    </div>
                    <span className="badge">Owner</span>
                  </li>
                  <li>
                    <div>
                      <strong>Track access readiness</strong>
                      <span>Keep protected portal access aligned with subscriber status</span>
                    </div>
                    <span className="badge">Access</span>
                  </li>
                  <li>
                    <div>
                      <strong>Prepare for future provisioning</strong>
                      <span>Billing, licensing, and support can expand here later</span>
                    </div>
                    <span className="badge">Future</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="meta-grid">
              <div className="meta-card">
                <div className="meta-kicker">Subscriber</div>
                <div className="meta-value">{fullName}</div>
                <div className="meta-copy">
                  Current authenticated Clerk user for this protected Atlas Maximus portal.
                </div>
              </div>

              <div className="meta-card">
                <div className="meta-kicker">Primary email</div>
                <div className="meta-value">{primaryEmail}</div>
                <div className="meta-copy">
                  This email can be used for support coordination and future account mapping.
                </div>
              </div>

              <div className="meta-card">
                <div className="meta-kicker">Access mode</div>
                <div className="meta-value">{access.status}</div>
                <div className="meta-copy">
                  Current access resolution returned by your protected access service.
                </div>
              </div>

              <div className="meta-card">
                <div className="meta-kicker">Current period end</div>
                <div className="meta-value">{access.currentPeriodEnd ?? 'Not set'}</div>
                <div className="meta-copy">
                  Placeholder for future subscription or billing lifecycle details.
                </div>
              </div>
            </section>

            <section className="panel-grid">
              <div className="panel">
                <h3>Recommended account actions</h3>
                <p>These actions keep the subscriber experience aligned with onboarding and Jira rollout.</p>
                <ul className="task-list">
                  <li>
                    <div>
                      <strong>Review onboarding readiness</strong>
                      <span>Confirm install owners, Jira admin contacts, and rollout expectations</span>
                    </div>
                    <span className="badge">Onboarding</span>
                  </li>
                  <li>
                    <div>
                      <strong>Coordinate support path</strong>
                      <span>Use your protected portal as the customer admin handoff point</span>
                    </div>
                    <span className="badge">Support</span>
                  </li>
                  <li>
                    <div>
                      <strong>Prepare for billing integration</strong>
                      <span>Stripe and provisioning can later surface here without redesigning the flow</span>
                    </div>
                    <span className="badge">Billing</span>
                  </li>
                  <li>
                    <div>
                      <strong>Keep subscriber records clean</strong>
                      <span>Align authenticated user identity with your future account model</span>
                    </div>
                    <span className="badge">Account</span>
                  </li>
                </ul>
              </div>

              <div className="panel">
                <h3>Portal notes</h3>
                <p>
                  This account page is intentionally positioned as an admin and subscriber control
                  center rather than a place where the Jira gadgets themselves are rendered.
                </p>
                <ul className="task-list">
                  <li>
                    <div>
                      <strong>Protected by login</strong>
                      <span>Only approved users should reach this account center</span>
                    </div>
                    <span className="badge">Secure</span>
                  </li>
                  <li>
                    <div>
                      <strong>Aligned with portal flow</strong>
                      <span>Connects cleanly to onboarding, support, and future subscription actions</span>
                    </div>
                    <span className="badge">Flow</span>
                  </li>
                  <li>
                    <div>
                      <strong>Ready for expansion</strong>
                      <span>Ideal future home for invoices, license info, and usage admin</span>
                    </div>
                    <span className="badge">Expand</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="resource-grid">
              <article className="resource-card">
                <div className="resource-kicker">Onboarding</div>
                <h3>Move into the Jira rollout flow</h3>
                <p>
                  Continue into the onboarding hub to manage installation preparation, prerequisite checks,
                  and subscriber guidance.
                </p>
                <Link className="atlas-btn atlas-btn-primary" href="/app/onboarding">
                  Open onboarding hub
                </Link>
              </article>

              <article className="resource-card">
                <div className="resource-kicker">Support</div>
                <h3>Keep customer support close to the account view</h3>
                <p>
                  This card can later connect to support channels, admin FAQs, and account assistance paths.
                </p>
                <Link className="atlas-btn atlas-btn-secondary" href="/#contact">
                  Contact support
                </Link>
              </article>

              <article className="resource-card">
                <div className="resource-kicker">Subscription</div>
                <h3>Prepare for future billing and provisioning</h3>
                <p>
                  Once Stripe is ready, this page can surface plan, billing, renewal, and provisioning details.
                </p>
                <Link className="atlas-btn atlas-btn-secondary" href="/pricing">
                  View plan details
                </Link>
              </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
