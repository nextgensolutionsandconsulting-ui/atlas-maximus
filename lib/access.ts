import { auth, currentUser } from '@clerk/nextjs/server';
import { env } from './env';
import { getSupabaseAdmin } from './supabase-admin';

type AccessRecord = {
  hasAccess: boolean;
  status: string;
  currentPeriodEnd: string | null;
};

// ✅ ADMIN ACCESS (ONLY YOU)
const ADMIN_EMAILS = [
  'saiken2@liberty.edu',
].map((email) => email.toLowerCase());

function isSupabaseConfigured() {
  return Boolean(env.NEXT_PUBLIC_SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function ensureUserProfile() {
  const { userId } = await auth();
  if (!userId) return null;

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress ?? '';
  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(' ');

  if (!isSupabaseConfigured()) {
    return { userId, email, fullName };
  }

  const supabase = getSupabaseAdmin();
  await supabase.from('user_profiles').upsert({
    clerk_user_id: userId,
    email,
    full_name: fullName || null,
    updated_at: new Date().toISOString(),
  });

  return { userId, email, fullName };
}

export async function getCurrentUserAccess(): Promise<AccessRecord> {
  const { userId } = await auth();
  if (!userId) {
    return { hasAccess: false, status: 'signed_out', currentPeriodEnd: null };
  }

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase() ?? '';

  // ✅ ADMIN OVERRIDE (YOU ALWAYS GET ACCESS)
  if (ADMIN_EMAILS.includes(email)) {
    return {
      hasAccess: true,
      status: 'admin',
      currentPeriodEnd: null,
    };
  }

  // ✅ DEV MODE (no Supabase yet)
  if (!isSupabaseConfigured()) {
    return {
      hasAccess: false, // lock everyone else out
      status: 'dev_no_access',
      currentPeriodEnd: null,
    };
  }

  // ✅ REAL SUBSCRIPTION CHECK (future Stripe flow)
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('subscriptions')
    .select('has_atlas_access, status, current_period_end')
    .eq('clerk_user_id', userId)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    return { hasAccess: false, status: 'inactive', currentPeriodEnd: null };
  }

  return {
    hasAccess: Boolean(data.has_atlas_access),
    status: data.status,
    currentPeriodEnd: data.current_period_end,
  };
}

export async function hasAtlasAccess() {
  const access = await getCurrentUserAccess();
  return access.hasAccess;
}
