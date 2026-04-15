export default function ContactPage() {
  return (
    <section className="section">
      <div className="container panel" style={{ maxWidth: 900, padding: 28 }}>
        <div className="eyebrow">Contact</div>
        <h1 style={{ fontSize: '3rem', margin: '14px 0', letterSpacing: '-0.04em' }}>Bring Atlas Maximus into your operating model</h1>
        <p className="hero-copy" style={{ maxWidth: 760 }}>
          Use this route for your sales intake, product walkthrough scheduling, or implementation request form.
        </p>
        <div className="module-grid" style={{ marginTop: 20 }}>
          <div className="detail-card">
            <div style={{ fontWeight: 800 }}>Sales contact</div>
            <div className="muted" style={{ marginTop: 8 }}>Add your actual contact form, HubSpot embed, or calendar widget here.</div>
          </div>
          <div className="detail-card">
            <div style={{ fontWeight: 800 }}>Implementation intake</div>
            <div className="muted" style={{ marginTop: 8 }}>Collect onboarding details before activating a customer workspace.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
