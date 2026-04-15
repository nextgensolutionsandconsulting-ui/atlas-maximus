import Link from 'next/link';
import { atlasModules } from '@/lib/plans';

export function Hero() {
  return (
    <section className="section">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">One platform. One experience.</span>
          <h1 className="hero-title">
            Atlas Maximus lives inside your website so paid users never leave your brand experience
          </h1>
          <p className="hero-copy">
            Visitors see a polished product story. Subscribers unlock the application inside the same shell with the same navigation,
            same brand system, and the same user journey.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link href="/pricing" className="secondary-btn">See Pricing</Link>
            <Link href="/app" className="ghost-btn">Open Subscriber Shell</Link>
          </div>

          <div className="stat-grid" style={{ marginTop: 28 }}>
            {[
              ['Unified experience', 'Marketing and product live in one shell'],
              ['Entitlement-ready', 'Payment unlocks app access after login'],
              ['Module-based', 'PI, Flow, and Sprint tools under one workspace'],
            ].map(([title, body]) => (
              <div className="stat-card" key={title}>
                <div style={{ fontWeight: 800 }}>{title}</div>
                <div className="muted" style={{ marginTop: 8, lineHeight: 1.7 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel" style={{ overflow: 'hidden' }}>
          <div className="top-banner">
            <div>
              <div style={{ fontWeight: 800 }}>Atlas Maximus Workspace</div>
              <div className="muted" style={{ fontSize: 14 }}>Unlocked inside your website after payment</div>
            </div>
            <span className="access-pill">Subscriber view</span>
          </div>
          <div style={{ padding: 20 }} className="module-grid">
            {atlasModules.map((module) => (
              <div className="workspace-card" key={module.slug}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ fontWeight: 800 }}>{module.title}</div>
                  <span className="status-pill live">Live</span>
                </div>
                <div className="muted" style={{ marginTop: 10, lineHeight: 1.7 }}>{module.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
