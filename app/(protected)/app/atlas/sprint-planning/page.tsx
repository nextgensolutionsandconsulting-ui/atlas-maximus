import { redirect } from 'next/navigation';
import { AppSidebar } from '@/components/app-shell/app-sidebar';
import { AppTopbar } from '@/components/app-shell/app-topbar';
import { ModulePage } from '@/components/app-shell/module-page';
import { getCurrentUserAccess } from '@/lib/access';

export default async function SprintPlanningPage() {
  const access = await getCurrentUserAccess();
  if (!access.hasAccess) redirect('/pricing');

  return (
    <div className="container app-shell-grid">
      <AppSidebar activeHref="/app/atlas/sprint-planning" />
      <div style={{ display: 'grid', gap: 20 }}>
        <AppTopbar />
        <ModulePage
          title="Sprint Planning Console"
          description="This route is where your capacity intelligence, workload balancing, subtask-based estimation, and commitment summary experiences should be migrated."
          bullets={[
            'Capacity intelligence',
            'Workload balance and PTO adjustments',
            'Subtask estimate drill-downs',
            'Sprint goal and commitment summary',
          ]}
        />
      </div>
    </div>
  );
}
