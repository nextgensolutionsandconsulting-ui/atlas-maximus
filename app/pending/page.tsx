import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function PendingPage() {
  const user = await currentUser()

  if (user?.publicMetadata?.access === true) {
    redirect('/atlas')
  }

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '40px', background: '#071120', color: 'white' }}>
      <div style={{ maxWidth: '720px', width: '100%', background: '#0b1730', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '12px' }}>Access Pending</h1>
        <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '10px' }}>
          Your account has been created successfully.
        </p>
        <p style={{ opacity: 0.75, marginBottom: '24px' }}>
          Atlas Maximus access has not been activated yet. Once approved, you will be able to enter the workspace.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 18px',
            borderRadius: '999px',
            textDecoration: 'none',
            background: '#9FE870',
            color: '#071120',
            fontWeight: 700,
          }}
        >
          Return to website
        </a>
      </div>
    </main>
  )
}
