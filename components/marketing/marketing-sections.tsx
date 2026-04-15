import { atlasModules, atlasPlan } from '@/lib/plans';

export function MarketingSections() {
  return (
    <>
      <section className="section" id="platform">
        <div className="container panel" style={{ padding: 28 }}>
          <div style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <div className="kicker">How the shell works</div>
              <h2 style={{ fontSize: '2.3rem', margin: '12px 0 0', letterSpacing: '-0.04em' }}>One website shell with two states</h2>
              <p className="hero-copy" style={{ maxWidth: 560 }}>
                Public visitors get your full product story. Signed-in subscribers unlock Atlas Maximus inside the same branded environment.
              </p>
            </div>
            <div className="marketing-grid">
              <div className="detail-card">
                <div style={{ fontWeight: 800 }}>Public state</div>
                <ul className="list">
                  <li>Homepage</li>
                  <li>Solutions</li>
                  <li>Screenshots</li>
                  <li>Pricing and checkout</li>
                </ul>
              </div>
              <div className="detail-card">
                <div style={{ fontWeight: 800 }}>Subscriber state</div>
                <ul className="list">
                  <li>Overview</li>
                  <li>PI Operating Dashboard</li>
                  <li>Flow Intelligence Console</li>
                  <li>Sprint Planning Console</li>
                </ul>
              </div>
              <div className="detail-card">
                <div style={{ fontWeight: 800 }}>Access logic</div>
                <ul className="list">
                  <li>User signs in</li>
                  <li>Stripe webhook updates entitlement</li>
                  <li>Protected routes render only for active subscribers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container">
          <div className="kicker">Protected product area</div>
          <h2 style={{ fontSize: '2.4rem', margin: '12px 0 10px', letterSpacing: '-0.04em' }}>Subscriber application shell</h2>
          <div className="module-grid" style={{ marginTop: 20 }}>
            {atlasModules.map((module) => (
              <div className="module-card" key={module.slug}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ fontWeight: 800 }}>{module.title}</div>
                  <span className="status-pill live">Module</span>
                </div>
                <div className="muted" style={{ marginTop: 10, lineHeight: 1.7 }}>{module.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1.2fr .8fr' }}>
          <div className="panel" style={{ padding: 28 }}>
            <div className="kicker">Implementation notes</div>
            <h2 style={{ fontSize: '2rem', margin: '12px 0', letterSpacing: '-0.04em' }}>How this is wired in Next.js</h2>
            <div className="module-grid">
              {[
                ['Auth', 'Use Clerk to manage sign in, sessions, and route protection.'],
                ['Payments', 'Use Stripe Checkout and subscription webhooks to grant access.'],
                ['Access control', 'Store subscriber status in Supabase and check it server-side.'],
                ['Modules', 'Keep each Atlas tool on its own protected route under /app/atlas.'],
              ].map(([title, body]) => (
                <div className="detail-card" key={title}>
                  <div style={{ fontWeight: 800 }}>{title}</div>
                  <div className="muted" style={{ marginTop: 8, lineHeight: 1.7 }}>{body}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="price-card">
            <div className="kicker">Atlas plan</div>
            <h3 style={{ fontSize: '1.8rem', margin: '12px 0 4px' }}>{atlasPlan.name}</h3>
            <div style={{ fontSize: '2.2rem', fontWeight: 900 }}>{atlasPlan.priceLabel}</div>
            <div className="muted" style={{ marginTop: 8 }}>{atlasPlan.summary}</div>
            <ul className="list" style={{ marginTop: 18 }}>
              {atlasPlan.included.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
