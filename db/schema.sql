create table if not exists public.user_profiles (
  clerk_user_id text primary key,
  email text not null,
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text not null references public.user_profiles(clerk_user_id) on delete cascade,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  stripe_price_id text,
  status text not null default 'inactive',
  has_atlas_access boolean not null default false,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists subscriptions_clerk_user_id_idx
  on public.subscriptions(clerk_user_id);

alter table public.user_profiles enable row level security;
alter table public.subscriptions enable row level security;

create policy "Users can read own profile"
  on public.user_profiles
  for select
  using (clerk_user_id = auth.jwt()->>'sub');

create policy "Users can read own subscription"
  on public.subscriptions
  for select
  using (clerk_user_id = auth.jwt()->>'sub');
