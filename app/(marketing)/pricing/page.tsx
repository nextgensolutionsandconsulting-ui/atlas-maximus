import Link from 'next/link';
import { atlasPlan } from '@/lib/plans';

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gap: 24, maxWidth: 900 }}>
        <div>
          <div className="eyebrow">Pricing</div>
          <h1 className="hero-title" style={{ fontSize: '3.6rem' }}>Unlock Atlas Maximus directly inside your website</h1>
          <p className="hero-copy">When payment succeeds, your subscription record enables the protected /app experience on the same branded site.</p>
        </div>

        <div className="price-card">
          <div className="kicker">Single plan</div>
          <h2 style={{ fontSize: '2rem', margin: '10px 0 0' }}>{atlasPlan.name}</h2>
          <div style={{ fontSize: '2.7rem', fontWeight: 900, marginTop: 8 }}>{atlasPlan.priceLabel}</div>
          <div className="muted" style={{ marginTop: 8 }}>{atlasPlan.summary}</div>
          <ul className="list" style={{ marginTop: 18 }}>
            {atlasPlan.included.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <form action="/api/checkout" method="post" style={{ marginTop: 20 }}>
            <button className="primary-btn" type="submit">Continue to Checkout</button>
          </form>
          <div className="muted" style={{ marginTop: 12, fontSize: 14 }}>
            This post route creates a Stripe Checkout Session for the Atlas plan.
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="/app" className="ghost-btn">Already subscribed? Open the app</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
