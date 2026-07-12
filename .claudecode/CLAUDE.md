# selfLove Build — Claude Code Context

## App Identity
- **Name:** selfLove Build / Lumière Yoga
- **Bundle ID:** com.apex.selflovebuild
- **Slug:** selflove-build
- **Brand:** Lumière Yoga — a self-love yoga and meditation studio brand

## Architecture
- Expo Router for file-based routing (app/ directory)
- Firebase Auth for all authentication
- Firestore for all data storage (bookings, users)
- TypeScript strict mode — no any types allowed
- All screens in app/(tabs)/ or app/(auth)/
- Shared components in components/
- Firebase logic in services/
- Custom hooks in hooks/

## Key Screens
- `app/(auth)/sign-in.tsx` — sign in with Firebase Auth
- `app/(auth)/sign-up.tsx` — register with Firebase Auth
- `app/(tabs)/index.tsx` — home with today's classes (selfLove.Yoga branding)
- `app/(tabs)/templates.tsx` — gallery of 10 website templates
- `app/(tabs)/mockups.tsx` — gallery of 4 app screen mockups
- `app/(tabs)/booking.tsx` — class booking with Firestore write + contact info
- `app/(tabs)/profile.tsx` — user profile + sign out

## Static Assets
- `templates/` — 10 HTML/CSS yoga website templates (01–10)
- `apps-templates/` — 4 HTML/CSS mobile screen mockups (01–04)
- These are design deliverables; the RN app references them as data

## Brand Colors
- Primary: #6B4C7A (deep plum)
- Secondary: #C4876A (terracotta)
- Accent: #D4A96A (gold)
- Background: #FAF7F4 (cream)

## Coding Standards
- Functional components only, no class components
- Custom hooks for all Firebase operations
- All async operations wrapped in try/catch
- No inline styles — use StyleSheet.create()
- All props typed with TypeScript interfaces in types/index.ts
- Export all components as named exports

## Testing Standards
- Every component gets a test in __tests__/components/
- Every hook gets a test in __tests__/hooks/
- Maestro flows in .maestro/flows/
- Run before every commit: tsc --noEmit && eslint . && jest
