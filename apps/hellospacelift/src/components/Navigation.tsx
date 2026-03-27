'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Homeowners', href: '/homeowners' },
  { label: 'Pros', href: '/pros' },
  { label: 'Projects', href: '/projects' },
  { label: 'Get Started', href: '/get-started' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#EEF1F4]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <span className="text-[#FC4C4C] font-black text-xl tracking-tight" style={{ fontFamily: 'var(--font-primary)' }}>
            spacelift
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                link.label === 'Get Started' ? 'hidden' : ''
              } ${
                pathname === link.href
                  ? 'text-[#FC4C4C]'
                  : 'text-[#141B24] hover:text-[#FC4C4C]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="bg-[#FC4C4C] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#e03e3e] transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#141B24] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#EEF1F4] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? 'text-[#FC4C4C]'
                  : 'text-[#141B24] hover:text-[#FC4C4C]'
              } ${link.label === 'Get Started' ? 'hidden' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            onClick={() => setMobileOpen(false)}
            className="bg-[#FC4C4C] text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-[#e03e3e] transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
