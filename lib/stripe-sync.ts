import Stripe from 'stripe';
import { getSupabaseAdmin } from './supabase-admin';

function mapSubscriptionStatus(status: Stripe.Subscription.Status) {
  const activeStatuses: Stripe.Subscription.Status[] = ['active', 'trialing', 'past_due'];
  return {
    status,
    hasAtlasAccess: activeStatuses.includes(status),
  };
}

export async function upsertSubscriptionFromStripe(subscription: Stripe.Subscription) {
  const supabase = getSupabaseAdmin();
  const clerkUserId = subscription.metadata.clerkUserId;

  if (!clerkUserId) {
    throw new Error('Stripe subscription metadata is missing clerkUserId.');
  }

  const mapped = mapSubscriptionStatus(subscription.status);
  const priceId = subscription.items.data[0]?.price.id ?? null;
  const currentPeriodEnd = subscription.items.data[0]?.current_period_end
    ? new Date(subscription.items.data[0].current_period_end * 1000).toISOString()
    : null;

  const { error } = await supabase.from('subscriptions').upsert({
    clerk_user_id: clerkUserId,
    stripe_customer_id: typeof subscription.customer === 'string' ? subscription.customer : subscription.customer.id,
    stripe_subscription_id: subscription.id,
    stripe_price_id: priceId,
    status: mapped.status,
    has_atlas_access: mapped.hasAtlasAccess,
    current_period_end: currentPeriodEnd,
    updated_at: new Date().toISOString(),
  }, {
    onConflict: 'stripe_subscription_id',
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function revokeSubscriptionAccessByStripeId(subscriptionId: string) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from('subscriptions')
    .update({
      status: 'canceled',
      has_atlas_access: false,
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', subscriptionId);

  if (error) {
    throw new Error(error.message);
  }
}
