import Link from 'next/link';
import { redirect } from 'next/navigation';
import { AppSidebar } from '@/components/app-shell/app-sidebar';
import { AppTopbar } from '@/components/app-shell/app-topbar';
import { getCurrentUserAccess } from '@/lib/access';
import { atlasModules } from '@/lib/plans';

export default async function AppHomePage() {
  const access = await getCurrentUserAccess();

  if (!access.hasAccess) {
    redirect('/pricing');
  }

  return (
    <div className="container app-shell-grid">
      <AppSidebar activeHref="/app" />
      <div style={{ display: 'grid', gap: 20 }}>
        <AppTopbar />
        <div className="panel" style={{ padding: 24 }}>
          <div className="kicker">Workspace overview</div>
          <h1 style={{ fontSize: '2.5rem', margin: '12px 0', letterSpacing: '-0.04em' }}>Atlas Maximus subscriber home</h1>
          <p className="hero-copy" style={{ maxWidth: 820 }}>
            This is the protected area your customers reach after they sign in and their Stripe-backed subscription grants Atlas access.
          </p>
          <div className="module-grid" style={{ marginTop: 20 }}>
            {atlasModules.map((module) => (
              <div className="module-card" key={module.slug}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ fontWeight: 800 }}>{module.title}</div>
                  <span className="status-pill live">Open</span>
                </div>
                <div className="muted" style={{ marginTop: 10, lineHeight: 1.7 }}>{module.description}</div>
                <Link href={`/app/atlas/${module.slug}`} className="secondary-btn" style={{ marginTop: 16 }}>Open module</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
