'use client'

/**
 * AppStoreBadge
 *
 * Renders a tappable app-store badge that:
 *   1. Opens the store listing in a new tab.
 *   2. Fires a canonical business event via src/lib/events.ts, which fans out
 *      to Amplitude ('App Store Click') and Meta Pixel ('AppStoreClick').
 *
 * Usage:
 *   <AppStoreBadge store="apple" href={APPLE_APP_STORE_URL} style={{ width: '135px', height: '40px' }} />
 *
 * To add Google Play later, pass store="google" with the Play Store URL.
 * No analytics changes required.
 */

import { trackAppStoreClick, type AppStore } from '@/lib/events'

/** Canonical Apple App Store listing. */
export const APPLE_APP_STORE_URL =
  'https://apps.apple.com/us/app/spacelift-home-renovation/id6761390750'

const BADGE_ASSETS: Record<AppStore, { src: string; alt: string }> = {
  apple:  { src: '/badge-app-store.svg',   alt: 'Download on the App Store' },
  google: { src: '/badge-google-play.svg', alt: 'Get it on Google Play'     },
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
      onClick={() => trackAppStoreClick(store)}
      className={className}
      aria-label={alt}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={style} />
    </a>
  )
}
