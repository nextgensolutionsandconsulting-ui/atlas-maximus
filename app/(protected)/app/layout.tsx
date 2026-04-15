import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export default function ProtectedAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container site-header-inner">
          <Link href="/" className="brand">
            <div className="brand-mark">AM</div>
            <div>
              <div className="brand-title">Atlas Maximus</div>
              <div className="brand-sub">Subscriber application shell</div>
            </div>
          </Link>
          <div className="header-actions">
            <Link className="ghost-btn" href="/pricing">Manage plan</Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>
      <div className="section">{children}</div>
    </div>
  );
}
