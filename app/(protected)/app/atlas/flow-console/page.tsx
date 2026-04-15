import { redirect } from 'next/navigation';
import { AppSidebar } from '@/components/app-shell/app-sidebar';
import { AppTopbar } from '@/components/app-shell/app-topbar';
import { ModulePage } from '@/components/app-shell/module-page';
import { getCurrentUserAccess } from '@/lib/access';

export default async function FlowConsolePage() {
  const access = await getCurrentUserAccess();
  if (!access.hasAccess) redirect('/pricing');

  return (
    <div className="container app-shell-grid">
      <AppSidebar activeHref="/app/atlas/flow-console" />
      <div style={{ display: 'grid', gap: 20 }}>
        <AppTopbar />
        <ModulePage
          title="Flow Intelligence Console"
          description="This route is reserved for your aging WIP, blocked work, dependency health, standup guidance, and coaching analysis experience inside the protected application shell."
          bullets={[
            'WIP load and aging work',
            'Blocked work detection',
            'Dependency health and spillover risk',
            'Daily standup quick analysis',
          ]}
        />
      </div>
    </div>
  );
}
