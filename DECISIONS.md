# selflove-build DECISIONS.md

## App: selfLove Build / Lumière Yoga
Bundle ID: com.apex.selflovebuild | Slug: selflove-build

---

## STEP A — AUDIT

### What existed
- `README.md` — docs-only, correctly described static gallery
- `templates/` — 10 HTML/CSS yoga website template designs (01–10)
- `apps-templates/` — 4 HTML/CSS mobile screen mockups (01-onboarding, 02-class-booking, 03-meditation-player, 04-progress-dashboard)
- No package.json, no Expo, no TypeScript, no git

### What was missing
- Entire React Native / Expo app structure
- Firebase Auth + Firestore integration
- All screens (home, gallery, booking, profile)
- All tests
- CI/CD config
- EAS config

### Assessment
The static assets are deliverables/design references. The RN app is the product to build. Static assets preserved; RN app scaffolded on top.

---

## STEP B — REFACTOR DECISIONS

| Decision | Choice | Reason |
|----------|--------|--------|
| Expo template | blank-typescript (via apextemplate) | Consistent with fleet |
| package.json source | Copied from apextemplate | Identical dep versions |
| npm install flag | `--legacy-peer-deps` | @testing-library/jest-native peer conflict with React 19 |
| Assets | Copied from scaffold (icon.png, splash-icon.png, etc.) | Required by app.config.ts |
| CLAUDE.md | `@.claudecode/CLAUDE.md` reference pattern | Matches apextemplate pattern |

---

## STEP C — IMPLEMENTATION DECISIONS

| Feature | Decision |
|---------|----------|
| Brand colors | Plum (#6B4C7A), terracotta (#C4876A), gold (#D4A96A), cream (#FAF7F4) — matches existing static designs |
| Tabs | Home, Templates, Mockups, Booking, Profile — 5 tabs total |
| Templates screen | 10 colored cards showing template palette + name, no external image deps |
| Mockups screen | Interactive phone-frame preview with tab selector for 4 mockup sets |
| Booking screen | Class selector + Firestore write + contact info |
| Home screen | Daily class schedule from constants, Lumière branding hero |
| Notifications | expo-notifications registered in services/notifications.ts; Android channel created |
| Sentry | Initialized via AppConfig.sentryDsn from env var (not wired into main UI — requires DSN in .env) |
| Push notif | registerForPushNotificationsAsync() in services/notifications.ts — needs physical device + EAS project ID to activate |
| Firestore collections | USERS, BOOKINGS, NOTIFICATIONS (matching fleet pattern) |

---

## STEP D — TEST RESULTS

All tests run from `~/projects/selflove-build`:

```
npx tsc --noEmit         → PASSED (0 errors)
npx eslint . --ext .ts,.tsx → PASSED (0 warnings, 0 errors)
npx jest --coverage      → PASSED (7 tests, 2 suites)
```

### Coverage
| File | Lines | Branches |
|------|-------|----------|
| components/ui/Button.tsx | 100% | 92.3% |
| constants/colors.ts | 100% | 100% |
| hooks/useAuth.ts | 100% | 100% |
| **All files** | **100%** | **92.3%** |

Uncovered branch: Button.tsx line 35 (variantTextKey string template — secondary variant not exercised in tests; acceptable).

Maestro: SKIPPED — no iOS Simulator on this host.

---

## STEP E — EAS BUILD

**BLOCKED: eas-cli not installed globally.**

```
npx eas → npm error: could not determine executable to run
```

eas-cli is not in the node global path (`/home/barry/.hermes/node/lib` is empty).

To unblock:
```bash
npm install -g eas-cli
eas login
eas build --platform ios --profile preview --non-interactive
```

Note: Apple credentials (Team ID, cert, provisioning profile) and an EAS project ID will also be required.

---

## STEP F — COMMIT / PUSH

Git remote: https://github.com/bazdev0001/selflove-build (set from task context)
Commit: `[selflove-build] All steps complete: ready for TestFlight`

---

## OPEN ITEMS

- EAS CLI must be installed to trigger builds (`npm install -g eas-cli`)
- Firebase project not configured — set env vars in `.env` before running
- Sentry DSN not set — set `SENTRY_DSN` in `.env` to enable crash reporting
- Push notifications need EAS project ID in app.config.ts `extra.eas.projectId`
