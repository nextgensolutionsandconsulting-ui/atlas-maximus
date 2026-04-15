import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { getCurrentUserAccess } from '@/lib/access';

export default async function SubscriberHomePage() {
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
        .atlas-app-shell * { box-sizing: border-box; }
        .atlas-app-shell a { text-decoration: none; color: inherit; }

        .atlas-app-header{
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

        .atlas-btn:hover{
          transform:translateY(-1px);
        }

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
          padding:42px 0 70px;
        }

        .atlas-hero{
          display:grid;
          grid-template-columns: 1.1fr .9fr;
          gap:28px;
          align-items:center;
          margin-bottom:26px;
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

        .atlas-title{
          font-size:clamp(2.35rem, 5vw, 4.65rem);
          line-height:1.01;
          letter-spacing:-.045em;
          font-weight:900;
          color:#102a57;
          margin:0 0 12px;
        }

        .atlas-copy{
          font-size:1.08rem;
          color:#495671;
          max-width:760px;
          margin:0 0 22px;
        }

        .atlas-proof{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-top:12px;
        }

        .atlas-pill{
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

        .atlas-visual-card{
          border-radius:28px;
          background:linear-gradient(180deg, rgba(243,239,229,.95), rgba(255,255,255,.96));
          border:1px solid rgba(21,37,67,.08);
          box-shadow:0 18px 50px rgba(17,36,70,.11);
          padding:26px;
          min-height:360px;
          display:grid;
          place-items:center;
          position:relative;
          overflow:hidden;
        }

        .atlas-wrap{
          position:relative;
          width:min(100%, 520px);
          height:320px;
          display:grid;
          place-items:center;
          isolation:isolate;
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
        .ring-1{ width:220px; height:220px; animation:spinA 16s linear infinite; }
        .ring-2{ width:250px; height:110px; transform:rotateX(72deg) rotateZ(12deg); animation:spinB 10s linear infinite reverse; }
        .ring-3{ width:118px; height:280px; transform:rotateY(72deg) rotateZ(18deg); animation:spinC 14s linear infinite; }
        .ring-4{ width:278px; height:132px; transform:rotateX(18deg) rotateZ(-28deg); animation:spinD 12s linear infinite reverse; }
        .ring-5{ width:142px; height:300px; transform:rotateY(20deg) rotateZ(52deg); animation:spinE 18s linear infinite; }
        .ring-6{ width:300px; height:300px; border-width:1.5px; opacity:.45; animation:spinF 22s linear infinite reverse; }

        @keyframes spinA{from{transform:rotateZ(0deg)}to{transform:rotateZ(360deg)}}
        @keyframes spinB{from{transform:rotateX(72deg) rotateZ(12deg)}to{transform:rotateX(72deg) rotateZ(372deg)}}
        @keyframes spinC{from{transform:rotateY(72deg) rotateZ(18deg)}to{transform:rotateY(72deg) rotateZ(378deg)}}
        @keyframes spinD{from{transform:rotateX(18deg) rotateZ(-28deg)}to{transform:rotateX(18deg) rotateZ(332deg)}}
        @keyframes spinE{from{transform:rotateY(20deg) rotateZ(52deg)}to{transform:rotateY(20deg) rotateZ(412deg)}}
        @keyframes spinF{from{transform:rotateZ(0deg)}to{transform:rotateZ(-360deg)}}

        .atlas-stat-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:14px;
          margin: 0 0 24px;
        }

        .atlas-stat{
          padding:18px;
          border-radius:18px;
          border:1px solid rgba(21,37,67,.10);
          background:rgba(255,255,255,.78);
          box-shadow:0 10px 26px rgba(17,36,70,.07);
        }

        .atlas-stat-label{
          font-size:.78rem;
          letter-spacing:.12em;
          text-transform:uppercase;
          color:#b68a35;
          font-weight:900;
          margin-bottom:8px;
        }

        .atlas-stat-value{
          font-size:1.7rem;
          line-height:1;
          font-weight:900;
          color:#102a57;
          margin-bottom:8px;
        }

        .atlas-stat-copy{
          color:#495671;
          font-size:.95rem;
        }

        .atlas-module-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:18px;
          margin-bottom:22px;
        }

        .atlas-module{
          padding:24px;
          border-radius:24px;
          background:#fff;
          border:1px solid rgba(21,37,67,.10);
          box-shadow:0 10px 26px rgba(17,36,70,.07);
          display:flex;
          flex-direction:column;
          min-height:280px;
        }

        .atlas-module-kicker{
          font-size:.76rem;
          letter-spacing:.14em;
          text-transform:uppercase;
          color:#b68a35;
          font-weight:900;
          margin-bottom:10px;
        }

        .atlas-module-title{
          font-size:1.3rem;
          line-height:1.12;
          font-weight:900;
          color:#102a57;
          margin-bottom:10px;
        }

        .atlas-module-copy{
          color:#495671;
          margin-bottom:18px;
        }

        .atlas-module-list{
          list-style:none;
          padding:0;
          margin:0 0 24px;
          display:grid;
          gap:10px;
          flex:1;
        }

        .atlas-module-list li{
          position:relative;
          padding-left:18px;
          color:#495671;
        }

        .atlas-module-list li::before{
          content:"";
          position:absolute;
          left:0;
          top:10px;
          width:7px;
          height:7px;
          border-radius:50%;
          background:#1f4a8c;
        }

        .atlas-module-actions{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-top:auto;
        }

        .atlas-panel-grid{
          display:grid;
          grid-template-columns:1.1fr .9fr;
          gap:18px;
        }

        .atlas-panel{
          padding:24px;
          border-radius:24px;
          background:#fff;
          border:1px solid rgba(21,37,67,.10);
          box-shadow:0 10px 26px rgba(17,36,70,.07);
        }

        .atlas-panel h3{
          font-size:1.18rem;
          line-height:1.18;
          font-weight:800;
          color:#102a57;
          margin:0 0 10px;
        }

        .atlas-panel p{
          color:#495671;
          margin:0 0 16px;
        }

        .atlas-list{
          list-style:none;
          padding:0;
          margin:0;
          display:grid;
          gap:12px;
        }

        .atlas-list li{
          display:flex;
          justify-content:space-between;
          gap:12px;
          padding:12px 14px;
          border-radius:14px;
          background:linear-gradient(180deg, #f8f5ed, #fff);
          border:1px solid rgba(21,37,67,.08);
        }

        .atlas-list strong{
          color:#102a57;
        }

        .atlas-list span{
          color:#6d778b;
          font-size:.94rem;
        }

        .atlas-badge{
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

        @media (max-width: 1100px){
          .atlas-hero,
          .atlas-stat-grid,
          .atlas-module-grid,
          .atlas-panel-grid{
            grid-template-columns:1fr;
          }
        }

        @media (max-width: 900px){
          .atlas-nav-links{
            display:none;
          }
        }

        @media (max-width: 640px){
          .atlas-container{
            width:min(1220px, calc(100% - 20px));
          }

          .atlas-brand-sub{
            display:none;
          }

          .atlas-main{
            padding-top:28px;
          }

          .atlas-title{
            font-size:clamp(2.1rem, 10vw, 3.6rem);
          }
        }
      `}</style>

      <div className="atlas-app-shell">
        <header className="atlas-app-header">
          <div className="atlas-container">
            <nav className="atlas-nav" aria-label="Primary">
              <Link className="atlas-brand" href="/app">
                <div className="atlas-brand-mark">AM</div>
                <div>
                  <div className="atlas-brand-name">Atlas Maximus</div>
                  <div className="atlas-brand-sub">Subscriber workspace</div>
                </div>
              </Link>

              <div className="atlas-nav-links">
                <Link className="atlas-nav-link" href="/app">
                  Dashboard
                </Link>
                <Link className="atlas-nav-link" href="/app/atlas/pi">
                  PI Dashboard
                </Link>
                <Link className="atlas-nav-link" href="/app/atlas/flow">
                  Flow Console
                </Link>
                <Link className="atlas-nav-link" href="/app/atlas/sprint">
                  Sprint Console
                </Link>
              </div>

              <div className="atlas-nav-actions">
                <Link className="atlas-btn atlas-btn-secondary" href="/">
                  Public site
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </nav>
          </div>
        </header>

        <main className="atlas-main">
          <div className="atlas-container">
            <section className="atlas-hero">
              <div>
                <div className="atlas-eyebrow">Atlas Maximus AI</div>
                <h1 className="atlas-title">
                  Executive visibility and AI intelligence for scaled Agile delivery
                </h1>
                <p className="atlas-copy">
                  Welcome to your subscriber workspace. Launch the PI Operating Dashboard,
                  Flow Intelligence Console, and Sprint Planning Console from one branded
                  operating center built to match the Atlas Maximus experience.
                </p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link className="atlas-btn atlas-btn-primary" href="/app/atlas/pi">
                    Open PI Dashboard
                  </Link>
                  <Link className="atlas-btn atlas-btn-secondary" href="/app/atlas/flow">
                    Open Flow Console
                  </Link>
                </div>

                <div className="atlas-proof">
                  <span className="atlas-pill">Access status: {access.status}</span>
                  <span className="atlas-pill">3 operating consoles</span>
                  <span className="atlas-pill">Subscriber workspace active</span>
                </div>
              </div>

              <div className="atlas-visual-card">
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
              </div>
            </section>

            <section className="atlas-stat-grid">
              <div className="atlas-stat">
                <div className="atlas-stat-label">Workspace</div>
                <div className="atlas-stat-value">Live</div>
                <div className="atlas-stat-copy">
                  Your protected Atlas Maximus environment is active and ready.
                </div>
              </div>

              <div className="atlas-stat">
                <div className="atlas-stat-label">Modules</div>
                <div className="atlas-stat-value">3</div>
                <div className="atlas-stat-copy">
                  PI, Flow, and Sprint workspaces are structured for fast access.
                </div>
              </div>

              <div className="atlas-stat">
                <div className="atlas-stat-label">Access Mode</div>
                <div className="atlas-stat-value">{access.status}</div>
                <div className="atlas-stat-copy">
                  Current user access is being resolved through your access service.
                </div>
              </div>

              <div className="atlas-stat">
                <div className="atlas-stat-label">Next Step</div>
                <div className="atlas-stat-value">Build</div>
                <div className="atlas-stat-copy">
                  Expand each console into a polished executive-grade product view.
                </div>
              </div>
            </section>

            <section className="atlas-module-grid">
              <article className="atlas-module">
                <div className="atlas-module-kicker">PI Operating Dashboard</div>
                <h2 className="atlas-module-title">Lead the PI with confidence, risk, drift, and execution signal</h2>
                <p className="atlas-module-copy">
                  Give leaders one operating view across confidence, progress, risk exposure,
                  and overall PI movement.
                </p>
                <ul className="atlas-module-list">
                  <li>Executive visibility across the PI</li>
                  <li>Risk and drift operating signal</li>
                  <li>Portfolio-ready leadership framing</li>
                </ul>
                <div className="atlas-module-actions">
                  <Link className="atlas-btn atlas-btn-primary" href="/app/atlas/pi">
                    Launch PI Dashboard
                  </Link>
                </div>
              </article>

              <article className="atlas-module">
                <div className="atlas-module-kicker">Flow Intelligence Console</div>
                <h2 className="atlas-module-title">Improve daily standups with blocker, stale work, and flow intelligence</h2>
                <p className="atlas-module-copy">
                  Surface work stalls, blocker patterns, and aging flow signals while teams can still act.
                </p>
                <ul className="atlas-module-list">
                  <li>Spot stale work and blockers quickly</li>
                  <li>Improve standup focus and coaching insight</li>
                  <li>Drive better flow conversations daily</li>
                </ul>
                <div className="atlas-module-actions">
                  <Link className="atlas-btn atlas-btn-primary" href="/app/atlas/flow">
                    Launch Flow Console
                  </Link>
                </div>
              </article>

              <article className="atlas-module">
                <div className="atlas-module-kicker">Sprint Planning Console</div>
                <h2 className="atlas-module-title">Make stronger capacity and commitment decisions before the sprint begins</h2>
                <p className="atlas-module-copy">
                  Use sprint planning intelligence to improve balance, availability, and commitment quality.
                </p>
                <ul className="atlas-module-list">
                  <li>Capacity-aware planning decisions</li>
                  <li>Team workload and commitment signal</li>
                  <li>Sharper sprint readiness conversations</li>
                </ul>
                <div className="atlas-module-actions">
                  <Link className="atlas-btn atlas-btn-primary" href="/app/atlas/sprint">
                    Launch Sprint Console
                  </Link>
                </div>
              </article>
            </section>

            <section className="atlas-panel-grid">
              <div className="atlas-panel">
                <h3>Recommended launch sequence</h3>
                <p>Use the dashboard as the subscriber landing point, then move into the most relevant module.</p>
                <ul className="atlas-list">
                  <li>
                    <div>
                      <strong>Start with PI visibility</strong>
                      <span>Open the executive-level PI Dashboard first</span>
                    </div>
                    <span className="atlas-badge">Priority</span>
                  </li>
                  <li>
                    <div>
                      <strong>Move into team flow</strong>
                      <span>Inspect blockers, stale work, and coaching signals</span>
                    </div>
                    <span className="atlas-badge">Flow</span>
                  </li>
                  <li>
                    <div>
                      <strong>Finish in sprint readiness</strong>
                      <span>Validate capacity and commitment before execution</span>
                    </div>
                    <span className="atlas-badge">Planning</span>
                  </li>
                </ul>
              </div>

              <div className="atlas-panel">
                <h3>Workspace notes</h3>
                <p>This page is now your branded Atlas Maximus subscriber home and can be expanded next with live data.</p>
                <ul className="atlas-list">
                  <li>
                    <div>
                      <strong>Protected access</strong>
                      <span>Users must authenticate before entering this workspace</span>
                    </div>
                    <span className="atlas-badge">Secure</span>
                  </li>
                  <li>
                    <div>
                      <strong>Homepage-aligned design</strong>
                      <span>Shared visual language with the public marketing site</span>
                    </div>
                    <span className="atlas-badge">Brand</span>
                  </li>
                  <li>
                    <div>
                      <strong>Ready for module expansion</strong>
                      <span>PI, Flow, and Sprint can now be designed to match</span>
                    </div>
                    <span className="atlas-badge">Next</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
