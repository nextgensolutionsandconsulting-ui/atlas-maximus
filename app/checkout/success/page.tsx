import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <section className="section">
      <div className="container panel" style={{ maxWidth: 860, padding: 28 }}>
        <div className="eyebrow">Checkout complete</div>
        <h1 style={{ fontSize: '3rem', margin: '14px 0', letterSpacing: '-0.04em' }}>Your Atlas Maximus access is being activated</h1>
        <p className="hero-copy" style={{ maxWidth: 760 }}>
          Stripe sends your subscription event to the webhook endpoint, and the webhook updates your Atlas access record in Supabase. After that, the protected application routes open inside the same website shell.
        </p>
        <div className="notice" style={{ marginTop: 20 }}>
          In production, this page can poll your subscription status briefly or simply send users into /app once the webhook completes.
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
          <Link href="/app" className="primary-btn">Open Atlas Maximus</Link>
          <Link href="/pricing" className="ghost-btn">Back to pricing</Link>
        </div>
      </div>
    </section>
  );
}
