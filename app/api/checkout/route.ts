import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { env } from '@/lib/env';
import { ensureUserProfile } from '@/lib/access';

export async function POST() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.redirect(new URL('/sign-in', env.NEXT_PUBLIC_APP_URL));
  }

  if (!stripe || !env.STRIPE_ATLAS_PRICE_ID) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 });
  }

  await ensureUserProfile();
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{
      price: env.STRIPE_ATLAS_PRICE_ID,
      quantity: 1,
    }],
    customer_email: email,
    success_url: `${env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.NEXT_PUBLIC_APP_URL}/pricing`,
    metadata: {
      clerkUserId: userId,
    },
    subscription_data: {
      metadata: {
        clerkUserId: userId,
      },
    },
  });

  if (!session.url) {
    return NextResponse.json({ error: 'Could not create checkout session.' }, { status: 500 });
  }

  return NextResponse.redirect(session.url, { status: 303 });
}
