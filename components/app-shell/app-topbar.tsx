import { currentUser } from '@clerk/nextjs/server';
import { getCurrentUserAccess } from '@/lib/access';

export async function AppTopbar() {
  const [user, access] = await Promise.all([currentUser(), getCurrentUserAccess()]);

  return (
    <div className="panel top-banner">
      <div>
        <div className="kicker" style={{ color: '#b6f5dc' }}>Authenticated view</div>
        <div style={{ fontSize: 26, fontWeight: 900, marginTop: 8 }}>Welcome back{user?.firstName ? `, ${user.firstName}` : ''}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Subscription status: {access.status}{access.currentPeriodEnd ? ` • renews through ${new Date(access.currentPeriodEnd).toLocaleDateString()}` : ''}
        </div>
      </div>
      <div className="access-pill">Access {access.hasAccess ? 'granted' : 'locked'}</div>
    </div>
  );
}
