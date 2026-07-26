'use client'

/**
 * AppStoreBadge
 *
 * Renders a tappable app-store badge that:
 *   1. Opens the store listing in a new tab.
 *   2. Fires a canonical business event via src/lib/events.ts, which fans out
 *      to Amplitude and Meta Pixel. Each store has its own named event:
 *        apple  → Amplitude 'App Store Click'  / Meta 'AppStoreClick'
 *        google → Amplitude 'Google Play Click' / Meta 'GooglePlayClick'
 *
 * Usage:
 *   <AppStoreBadge store="apple"  href={APPLE_APP_STORE_URL} style={{ width: '135px', height: '40px' }} />
 *   <AppStoreBadge store="google" href={GOOGLE_PLAY_URL}     style={{ width: '135px', height: '40px' }} />
 */

import { trackAppStoreClick, trackGooglePlayClick, type AppStore } from '@/lib/events'

/** Canonical Apple App Store listing. */
export const APPLE_APP_STORE_URL =
  'https://apps.apple.com/us/app/spacelift-home-renovation/id6761390750'

/** Canonical Google Play Store listing. */
export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.spacelift.newcoandroid'

const BADGE_ASSETS: Record<AppStore, { src: string; alt: string }> = {
  apple:  { src: '/badge-app-store.svg',   alt: 'Download on the App Store' },
  google: { src: '/badge-google-play.svg', alt: 'Get it on Google Play'     },
}

const TRACK: Record<AppStore, () => void> = {
  apple:  trackAppStoreClick,
  google: trackGooglePlayClick,
}

interface AppStoreBadgeProps {
  store: AppStore
  href: string
  style?: React.CSSProperties
  className?: string
}

export default function AppStoreBadge({
  store,
  href,
  style,
  className,
}: AppStoreBadgeProps) {
  const { src, alt } = BADGE_ASSETS[store]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={TRACK[store]}
      className={className}
      aria-label={alt}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={style} />
    </a>
  )
}
