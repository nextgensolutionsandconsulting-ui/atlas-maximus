import { redirect } from 'next/navigation';
import { AppSidebar } from '@/components/app-shell/app-sidebar';
import { AppTopbar } from '@/components/app-shell/app-topbar';
import { ModulePage } from '@/components/app-shell/module-page';
import { getCurrentUserAccess } from '@/lib/access';

export default async function AtlasLandingPage() {
  const access = await getCurrentUserAccess();
  if (!access.hasAccess) redirect('/pricing');

  return (
    <div className="container app-shell-grid">
      <AppSidebar activeHref="/app/atlas" />
      <div style={{ display: 'grid', gap: 20 }}>
        <AppTopbar />
        <ModulePage
          title="Atlas Maximus"
          description="Use this route as the main Atlas landing page inside the protected shell. From here, you can render your spinning Atlas hero, orbiting product monitors, KPI previews, or role-based workspace launch tiles."
          bullets={[
            'Executive platform overview',
            'Subscriber role-based launch cards',
            'Embedded app-wide metrics',
            'Onboarding and account health',
          ]}
        />
      </div>
    </div>
  );
}
