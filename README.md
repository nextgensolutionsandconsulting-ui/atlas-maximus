# Atlas Maximus Next.js Site Shell

This project rebuilds your site shell in Next.js so Atlas Maximus lives inside the same branded website experience.

## What is included

- Public marketing routes
- Protected subscriber routes under `/app`
- Clerk authentication wiring
- Stripe Checkout route for Atlas Maximus subscriptions
- Stripe webhook route for subscription updates
- Supabase schema and access-check pattern
- Protected module pages for:
  - Atlas Maximus
  - PI Operating Dashboard
  - Flow Intelligence Console
  - Sprint Planning Console

## Routes

- `/` marketing homepage
- `/pricing` pricing and purchase page
- `/contact` contact page
- `/sign-in` Clerk sign-in page
- `/app` protected subscriber shell
- `/app/atlas` protected Atlas landing page
- `/app/atlas/pi-dashboard`
- `/app/atlas/flow-console`
- `/app/atlas/sprint-planning`
- `/api/checkout` Stripe Checkout session creator
- `/api/portal` Stripe billing portal route
- `/api/stripe/webhook` Stripe webhook handler

## Local setup

1. Copy `.env.example` to `.env.local`
2. Add Clerk, Stripe, and Supabase credentials
3. Install packages
4. Run the dev server

```bash
npm install
npm run dev
```

## Supabase setup

Run the SQL in `db/schema.sql`.

This creates:
- `user_profiles`
- `subscriptions`

The protected pages read `subscriptions.has_atlas_access` to decide whether the user can open Atlas Maximus.

## Stripe setup

Create a Stripe product and recurring price for Atlas Maximus.
Set that recurring price ID in:

- `STRIPE_ATLAS_PRICE_ID`

Then configure a webhook endpoint pointing to:

- `/api/stripe/webhook`

Recommended events:
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`

## Development preview behavior

If Supabase is not configured yet, protected pages fall back to `dev_preview` mode so you can still see the shell and start migrating your UI.

## What to migrate next

1. Replace placeholder module route content with your real Atlas components
2. Move your spinning Atlas hero into `/app/atlas`
3. Move orbiting monitor cards into `/app/atlas`
4. Port PI Operating Dashboard widgets into `/app/atlas/pi-dashboard`
5. Port Flow Intelligence Console widgets into `/app/atlas/flow-console`
6. Port Sprint Planning Console widgets into `/app/atlas/sprint-planning`

## Notes

This starter is structured to keep marketing and subscriber product views in one Next.js application shell so customers do not experience a jarring transition into a separate app.
