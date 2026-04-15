import { redirect } from 'next/navigation';
import { AppSidebar } from '@/components/app-shell/app-sidebar';
import { AppTopbar } from '@/components/app-shell/app-topbar';
import { ModulePage } from '@/components/app-shell/module-page';
import { getCurrentUserAccess } from '@/lib/access';

export default async function PiDashboardPage() {
  const access = await getCurrentUserAccess();
  if (!access.hasAccess) redirect('/pricing');

  return (
    <div className="container app-shell-grid">
      <AppSidebar activeHref="/app/atlas/pi-dashboard" />
      <div style={{ display: 'grid', gap: 20 }}>
        <AppTopbar />
        <ModulePage
          title="PI Operating Dashboard"
          description="This protected route is where your PI health, progress-vs-plan, objective confidence, risk heatmap, and executive operating signals should live inside the website shell."
          bullets={[
            'PI progress versus plan',
            'Objective confidence signals',
            'Risk heatmap and aging',
            'Team and pod drill-down views',
          ]}
        />
      </div>
    </div>
  );
}
