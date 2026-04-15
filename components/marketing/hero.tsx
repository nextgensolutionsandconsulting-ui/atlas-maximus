"use client";

import Link from 'next/link';
import { atlasModules } from '@/lib/plans';

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 50% 20%, rgba(34,197,94,0.12), transparent 22%), radial-gradient(circle at 50% 40%, rgba(59,130,246,0.10), transparent 30%), linear-gradient(90deg, #071120 0%, #09172b 45%, #0b1d31 52%, #09172b 60%, #071120 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: 'red' }}>TEST HERO CHANGE</h1>
      
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          width: '100%',
          padding: '72px 32px',
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 48,
          alignItems: 'center',
        }}
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              marginBottom: 24,
              padding: '12px 20px',
              borderRadius: 999,
              border: '1px solid rgba(110,231,183,0.14)',
              background: 'rgba(110,231,183,0.08)',
              color: '#d1fae5',
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            One platform. One experience.
          </span>

          <h1
            style={{
              fontSize: 'clamp(56px, 7vw, 96px)',
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: '-0.05em',
              margin: 0,
            }}
          >
            Atlas Maximus lives inside your website so paid users never leave your brand experience
          </h1>

          <p
            style={{
              marginTop: 28,
              maxWidth: 820,
              fontSize: 24,
              lineHeight: 1.6,
              color: '#cbd5e1',
            }}
          >
            Visitors see a polished product story. Subscribers unlock the application inside the same shell with the same navigation,
            same brand system, and the same user journey.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 36 }}>
            <Link
              href="/pricing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 28px',
                borderRadius: 18,
                background: '#ffffff',
                color: '#071120',
                fontWeight: 800,
                textDecoration: 'none',
              }}
            >
              See Pricing
            </Link>

            <Link
              href="/app"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 28px',
                borderRadius: 18,
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 800,
                background: 'transparent',
              }}
            >
              Open Subscriber Shell
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 16,
              marginTop: 42,
            }}
          >
            {[
              ['Unified experience', 'Marketing and product live in one shell'],
              ['Entitlement-ready', 'Payment unlocks app access after login'],
              ['Module-based', 'PI, Flow, and Sprint tools under one workspace'],
            ].map(([title, body]) => (
              <div
                key={title}
                style={{
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.10)',
                  background: 'rgba(255,255,255,0.04)',
                  padding: 20,
                }}
              >
                <div style={{ fontWeight: 900, fontSize: 18 }}>{title}</div>
                <div style={{ marginTop: 8, color: '#94a3b8', lineHeight: 1.7 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="atlas-spinner">
              <div className="atlas-orbit orbit-1" />
              <div className="atlas-orbit orbit-2" />
              <div className="atlas-orbit orbit-3" />
              <div className="atlas-core" />
            </div>
          </div>

          <div
            style={{
              borderRadius: 32,
              border: '1px solid rgba(255,255,255,0.10)',
              background: 'rgba(13,21,48,0.95)',
              overflow: 'hidden',
              boxShadow: '0 20px 80px rgba(0,0,0,0.45)',
            }}
          >
            <div
              style={{
                padding: '22px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                gap: 16,
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontWeight: 900, fontSize: 22 }}>Atlas Maximus Workspace</div>
                <div style={{ color: '#94a3b8', fontSize: 14, marginTop: 4 }}>
                  Unlocked inside your website after payment
                </div>
              </div>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 18px',
                  borderRadius: 999,
                  background: 'rgba(110,231,183,0.08)',
                  border: '1px solid rgba(110,231,183,0.14)',
                  color: '#d1fae5',
                  fontWeight: 800,
                  whiteSpace: 'nowrap',
                }}
              >
                Subscriber view
              </span>
            </div>

            <div
              style={{
                padding: 20,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 16,
              }}
            >
              {atlasModules.map((module) => (
                <div
                  key={module.slug}
                  style={{
                    borderRadius: 26,
                    border: '1px solid rgba(255,255,255,0.10)',
                    background: 'rgba(255,255,255,0.03)',
                    padding: 20,
                    minHeight: 190,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ fontWeight: 900, fontSize: 18, lineHeight: 1.25, maxWidth: 220 }}>
                      {module.title}
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 64,
                        height: 64,
                        borderRadius: 999,
                        background: 'rgba(96,165,250,0.12)',
                        border: '1px solid rgba(96,165,250,0.18)',
                        color: '#dbeafe',
                        fontWeight: 800,
                        fontSize: 14,
                      }}
                    >
                      Live
                    </span>
                  </div>

                  <div style={{ marginTop: 18, color: '#94a3b8', lineHeight: 1.75, fontSize: 16 }}>
                    {module.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .atlas-spinner {
          position: relative;
          width: 220px;
          height: 220px;
        }

        .atlas-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 98px;
          height: 188px;
          transform: translate(-50%, -50%);
          border-radius: 999px;
        }

        .orbit-1 {
          border: 2px solid rgba(110, 231, 183, 0.7);
          animation: spinA 16s linear infinite;
        }

        .orbit-2 {
          border: 2px solid rgba(125, 211, 252, 0.75);
          transform: translate(-50%, -50%) rotate(58deg);
          animation: spinB 12s linear infinite reverse;
        }

        .orbit-3 {
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          transform: translate(-50%, -50%) rotate(-58deg);
          animation: spinC 18s linear infinite;
        }

        .atlas-core {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          background: radial-gradient(circle at 35% 35%, #f0fdf4, #86efac 55%, #22c55e 100%);
          box-shadow: 0 0 40px rgba(110, 231, 183, 0.55);
        }

        @keyframes spinA {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes spinB {
          from { transform: translate(-50%, -50%) rotate(58deg) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(58deg) rotate(360deg); }
        }

        @keyframes spinC {
          from { transform: translate(-50%, -50%) rotate(-58deg) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-58deg) rotate(360deg); }
        }

        @media (max-width: 1100px) {
          section :global(.hero-two-col) {}
        }

        @media (max-width: 980px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 760px) {
          h1 {
            font-size: 56px !important;
          }
        }

        @media (max-width: 640px) {
          section > div {
            padding: 48px 20px !important;
          }

          h1 {
            font-size: 44px !important;
          }
        }
      `}</style>
    </section>
  );
}
