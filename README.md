# anyPOS Frontend

Monorepo with React + TypeScript + pnpm workspaces + Turbo.

## Structure

```
anypos-frontend/
├── apps/
│   ├── cashier/          # POS app (port 5173)
│   └── admin/            # Admin dashboard (port 5174)
├── packages/
│   └── ui/               # Shared HeroUI components
├── .github/workflows/     # CI/CD
├── package.json          # Root workspace
├── pnpm-workspace.yaml   # pnpm config
└── turbo.json            # Build pipeline
```

## Quick Start

```bash
# Install dependencies
pnpm install

# Run all apps
pnpm dev

# Run single app
pnpm --filter @anypos/cashier dev
pnpm --filter @anypos/admin dev
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Run all apps (5173, 5174) |
| `pnpm build` | Build all apps |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | Type check all packages |
| `pnpm clean` | Clean build outputs |

## Routes (Example/Scaffold)

All pages under `/example/*` - scaffold for development.

**Cashier App (5173)**
- `/` → redirects to `/example`
- `/example/login` - Login page
- `/example/pos` - POS interface
- `/example/products` - Product list

**Admin App (5174)**
- `/` → redirects to `/example`
- `/example/login` - Login page
- `/example/dashboard` - Dashboard
- `/example/users` - Users (admin only)

## Authentication

Mock auth with localStorage:
- Any username/password works
- Admin app: select role (admin/manager/cashier)
- Protected routes redirect to `/example/login`
 
## Scripts per App

```bash
cd apps/cashier
pnpm dev          # Dev server
pnpm build        # Production build
pnpm lint         # ESLint
pnpm typecheck    # TypeScript check
pnpm generate-routes  # Regenerate TanStack routes
```

## Environment

Create `.env` in app directories:
```bash
VITE_API_URL=http://localhost:3000/api
```

## Code Organization

Feature-based architecture per app:

```
apps/cashier/src/
├── features/               ← Feature-based modules
│   ├── cart/
│   │   ├── components/     ← Components specific to this feature
│   │   ├── hooks/          ← TanStack Query hooks
│   │   ├── stores/         ← Zustand stores (if needed)
│   │   ├── types.ts        ← Feature types
│   │   └── index.ts        ← Public API exports
│   ├── product/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   └── payment/
│       ├── components/
│       ├── hooks/
│       └── index.ts
├── components/             ← Shared app-level components (not in packages/ui)
│   ├── layouts/
│   └── PageHeader.tsx
├── hooks/                  ← App-level shared hooks
├── routes/                 ← TanStack Router (file-based routing)
│   ├── __root.tsx          ← Root layout + auth guard
│   ├── index.tsx           ← Root redirect
│   └── example/            ← Example/scaffold routes
│       ├── index.tsx
│       ├── login.tsx
│       ├── pos.tsx
│       └── products.tsx
├── libs/                   ← 3rd party setup (axios, query-client)
└── main.tsx
```

### Guidelines

| Location | Use For |
|----------|---------|
| `features/X/components/` | Components used only by feature X |
| `features/X/hooks/` | API calls, business logic for feature X |
| `features/X/stores/` | Zustand stores for client state |
| `features/X/index.ts` | Public exports (only what's needed outside) |
| `components/` | Shared components across multiple features |
| `routes/` | TanStack Router files only |
| `libs/` | Configured instances (axios, query client) |
