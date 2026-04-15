import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="page-shell" style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <SignIn path="/sign-in" signUpUrl="/sign-in" forceRedirectUrl="/app" />
    </div>
  );
}
