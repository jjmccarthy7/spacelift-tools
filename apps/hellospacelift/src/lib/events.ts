/**
 * Business events — canonical cross-platform analytics.
 *
 * This is the ONLY file components should import for event tracking.
 * Each function fires the same semantic event to every active analytics
 * platform. Platform-specific libs (analytics.ts, meta-pixel.ts) are
 * implementation details — never imported directly by components.
 *
 * Platforms:
 *   Amplitude  — track() from analytics.ts
 *   Meta Pixel — pixel.trackCustom() from meta-pixel.ts
 *
 * To add a new platform later, update only this file.
 */

import { track } from '@/lib/analytics'
import { pixel } from '@/lib/meta-pixel'

/** App store identifiers. Extend when new stores are added. */
export type AppStore = 'apple' | 'google'

/**
 * User tapped an app-store download badge.
 *
 * Amplitude:   'App Store Click'  { store: 'apple' | 'google' }
 * Meta Pixel:  'AppStoreClick'    { store: 'apple' | 'google' }
 */
export function trackAppStoreClick(store: AppStore): void {
  track('App Store Click', { store })
  pixel.trackCustom('AppStoreClick', { store })
}
