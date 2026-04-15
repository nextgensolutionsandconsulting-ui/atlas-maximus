export function ModulePage({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div className="panel" style={{ padding: 24 }}>
      <div className="kicker">Atlas module</div>
      <h1 style={{ fontSize: '2.3rem', margin: '10px 0', letterSpacing: '-0.04em' }}>{title}</h1>
      <p className="hero-copy" style={{ maxWidth: 760 }}>{description}</p>
      <div className="notice" style={{ marginTop: 20 }}>
        This starter keeps the module inside the protected website shell. Your existing Atlas logic and visualizations can be migrated into this route next.
      </div>
      <div className="module-grid" style={{ marginTop: 20 }}>
        {bullets.map((item) => (
          <div className="module-card" key={item}>
            <div style={{ fontWeight: 800 }}>{item}</div>
            <div className="muted" style={{ marginTop: 8, lineHeight: 1.7 }}>
              Place your real Atlas Maximus component, charts, or data widgets here.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
