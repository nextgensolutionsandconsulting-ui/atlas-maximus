import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand">
          <div className="brand-mark">AM</div>
          <div>
            <div className="brand-title">Atlas Maximus</div>
            <div className="brand-sub">AI-powered agile operating system</div>
          </div>
        </Link>

        <nav className="nav-links">
          <Link href="/#platform">Platform</Link>
          <Link href="/#solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="ghost-btn">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link className="ghost-btn" href="/app">Open App</Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <Link className="primary-btn" href="/pricing">Buy Atlas Maximus</Link>
        </div>
      </div>
    </header>
  );
}
