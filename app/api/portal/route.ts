import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase-admin';
import { stripe } from '@/lib/stripe';
import { env } from '@/lib/env';

export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.redirect(new URL('/sign-in', env.NEXT_PUBLIC_APP_URL));
  }

  if (!stripe) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 });
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('clerk_user_id', userId)
    .maybeSingle();

  if (error || !data?.stripe_customer_id) {
    return NextResponse.redirect(new URL('/pricing', env.NEXT_PUBLIC_APP_URL));
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: data.stripe_customer_id,
    return_url: `${env.NEXT_PUBLIC_APP_URL}/app`,
    configuration: env.STRIPE_BILLING_PORTAL_CONFIGURATION_ID || undefined,
  });

  return NextResponse.redirect(session.url, { status: 303 });
}
