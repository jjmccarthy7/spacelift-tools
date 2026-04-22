'use client'

import type { ComponentProps } from 'react'
import { track } from '@/lib/analytics'

type TrackedAnchorProps = ComponentProps<'a'> & {
  eventName?: string
  eventProps?: Record<string, string | number | boolean>
}

/**
 * Drop-in replacement for <a> that fires an Amplitude event on click.
 * Used for external links (calendar booking, etc.) that can't use next/link.
 * Can be used inside server components — the client boundary is here.
 */
export default function TrackedAnchor({
  eventName = 'CTA Clicked',
  eventProps,
  onClick,
  ...props
}: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(eventName, eventProps)
        onClick?.(e)
      }}
    />
  )
}
