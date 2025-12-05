# Next.js Migration Notes

This project has been successfully migrated from Vite + React Router to Next.js 15.

## Key Changes

### 1. Project Structure
- **Before**: Vite-based React app with `src/main.tsx` and `src/App.tsx`
- **After**: Next.js App Router with `app/` directory structure

### 2. Routing
- **Before**: React Router with `<Routes>` and `<Route>` components
- **After**: Next.js file-based routing in `app/` directory
  - `app/page.tsx` → `/`
  - `app/services/page.tsx` → `/services`
  - `app/about/page.tsx` → `/about`
  - etc.

### 3. Navigation
- **Before**: `react-router-dom` `Link` component with `to` prop
- **After**: Next.js `Link` component with `href` prop
- Updated `useLocation()` → `usePathname()` from `next/navigation`

### 4. SEO & Metadata
- **Before**: `react-helmet-async` with `SEOHead` component
- **After**: Next.js `Metadata` API with `generateMetadata()` function
- JSON-LD schemas now injected via `<script>` tags in page components

### 5. Client Components
- Components using hooks (`useState`, `useEffect`, etc.) or browser APIs are marked with `"use client"` directive
- Server components are used by default for better performance

### 6. Providers
- Created `app/providers.tsx` for client-side providers (QueryClient, TooltipProvider, AnalyticsProvider)
- Root layout wraps everything with providers

### 7. Configuration Files
- **Removed**: `vite.config.ts`, `index.html`, `src/main.tsx`, `src/App.tsx`
- **Added**: `next.config.js`, `next-env.d.ts`, `app/layout.tsx`, `app/providers.tsx`

### 8. Package Dependencies
- **Removed**: `vite`, `react-router-dom`, `react-helmet-async`, `@vitejs/plugin-react-swc`
- **Added**: `next`, `eslint-config-next`

## Running the Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## File Structure

```
app/
  layout.tsx          # Root layout with metadata
  page.tsx            # Home page (/)
  providers.tsx       # Client-side providers
  services/
    page.tsx          # Services page
  about/
    page.tsx          # About page
  ...                 # Other routes

src/
  components/         # Reusable components
  pages/              # Page sections/components
  lib/                # Utilities and constants
  hooks/              # Custom hooks
```

## Notes

- All page components have been converted to Next.js pages
- SEO metadata is now handled via Next.js Metadata API
- Client-side navigation uses Next.js Link component
- Analytics and scroll tracking hooks updated for Next.js
- Layout component simplified (no longer wraps with Header/Footer - that's in root layout)


