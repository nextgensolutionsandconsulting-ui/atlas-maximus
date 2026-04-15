import Link from 'next/link';

const navItems = [
  { href: '/app', label: 'Overview' },
  { href: '/app/atlas', label: 'Atlas Maximus' },
  { href: '/app/atlas/pi-dashboard', label: 'PI Dashboard' },
  { href: '/app/atlas/flow-console', label: 'Flow Console' },
  { href: '/app/atlas/sprint-planning', label: 'Sprint Planning' },
];

export function AppSidebar({ activeHref }: { activeHref: string }) {
  return (
    <aside className="panel sidebar">
      <div className="kicker" style={{ color: '#b6f5dc' }}>Subscriber workspace</div>
      <div style={{ marginTop: 8, fontSize: 24, fontWeight: 900 }}>Atlas Maximus</div>
      <div className="muted" style={{ marginTop: 8, lineHeight: 1.7 }}>
        Paid users stay inside the same site shell and unlock their tools here.
      </div>
      <div className="sidebar-nav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={`sidebar-link ${activeHref === item.href ? 'active' : ''}`}>
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
