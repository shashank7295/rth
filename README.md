# E-commerce Frontend

Frontend scaffold built with Next.js App Router + TypeScript + Tailwind CSS. Routes and structure follow `plan.txt`.

## Tech
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Zustand (cart store)

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Run development server
```bash
npm run dev
```

3. Open http://localhost:3000

## Structure
- `app/(storefront)` customer-facing routes (home, products, product detail, cart, checkout, search, account)
- `app/(auth)` auth pages (sign-in, sign-up)
- `app/admin` admin dashboard layout and page
- `components/shared` navbar, footer, loading, error boundary
- `components/storefront` product-card
- `stores` Zustand cart store
- `hooks` cart hook
- `lib/mock-data.ts` mock products

## Notes
- Supabase Auth, DB, and real APIs are not wired yet (frontend only).
- Add shadcn/ui and styling polish later.
- Tailwind is configured via `tailwind.config.ts` and `app/globals.css`.
