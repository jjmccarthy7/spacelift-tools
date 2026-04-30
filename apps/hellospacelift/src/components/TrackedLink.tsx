'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { track } from '@/lib/analytics'

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName?: string
  eventProps?: Record<string, string | number | boolean>
}

/**
 * Drop-in replacement for next/link that fires an Amplitude event on click.
 * Can be used inside server components — the client boundary is here.
 */
export default function TrackedLink({
  eventName = 'CTA Clicked',
  eventProps,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        track(eventName, eventProps)
        onClick?.(e)
      }}
    />
  )
}
