'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Homeowners', href: '/homeowners' },
  { label: 'Pros', href: '/pros' },
  { label: 'Projects', href: '/projects' },
  { label: 'Reviews', href: '/reviews' },
]

/**
 * SpaceLiftLogo — Official coral wordmark
 * Source: Spacelift Brand Style Guide (design-system.pdf, page 12)
 * Rules: lowercase "spacelift", Love coral #FC4C4C, font-weight 800
 * Per design-rules.md: "Logo is always coral on white backgrounds"
 */
function SpaceLiftLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 56"
      width="120"
      height="21"
      aria-label="Spacelift"
      role="img"
      className={className}
    >
      <text
        x="0"
        y="44"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="800"
        fontSize="52"
        fill="#FC4C4C"
        letterSpacing="-1"
      >
        spacelift
      </text>
    </svg>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#EEF1F4]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        {/* Logo — coral wordmark from Spacelift design system (PDF page 12) */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity duration-200"
          aria-label="Spacelift home"
        >
          <SpaceLiftLogo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                'text-sm font-medium transition-colors duration-200',
                pathname === link.href
                  ? 'text-[#FC4C4C]'
                  : 'text-[#141B24] hover:text-[#FC4C4C]',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-[#FC4C4C] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200"
          >
            Get the app
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#141B24] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#EEF1F4] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={[
                'text-base font-medium transition-colors duration-200',
                pathname === link.href
                  ? 'text-[#FC4C4C]'
                  : 'text-[#141B24] hover:text-[#FC4C4C]',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#"
            className="mt-2 bg-[#FC4C4C] text-white text-sm font-semibold px-6 py-3 rounded-full text-center hover:bg-[#CA3D3D] transition-colors duration-200"
          >
            Get the app
          </a>
        </div>
      )}
    </nav>
  )
}