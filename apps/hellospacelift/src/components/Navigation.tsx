'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  const isHome = pathname === '/'
  const isHomeowners = pathname === '/homeowners'
  // Pages whose hero sits flush against the top of the viewport
  const isHeroPage = isHome || isHomeowners

  useEffect(() => {
    if (!isHeroPage) return
    const handleScroll = () => { setScrolled(window.scrollY > 40) }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHeroPage])

  const isTransparent = isHeroPage && !scrolled && !mobileOpen

  // Homepage hero is dark (photo bg) → white text when transparent
  // Homeowners hero is light (graph-paper bg) → dark text when transparent
  const isLightHero = isHomeowners

  const navBg = isTransparent ? 'bg-transparent border-transparent' : 'bg-white border-[#EEF1F4]'
  const logoColor = isTransparent && !isLightHero ? 'text-white' : 'text-[#141B24]'
  const linkColor = isTransparent && !isLightHero
    ? 'text-white/90 hover:text-white/70'
    : 'text-[#141B24] hover:text-[#141B24]/70'
  const ctaBg = isTransparent && !isLightHero
    ? 'bg-white text-[#141B24] hover:bg-white/90'
    : 'bg-[#141B24] text-white hover:bg-[#1e2a38]'
  const menuIconColor = isTransparent && !isLightHero ? 'text-white' : 'text-[#141B24]'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${navBg}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <span
            className={`font-black text-xl tracking-tight transition-colors duration-300 ${logoColor}`}
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            spacelift
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.filter(l => l.label !== 'Get Started').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? isTransparent && !isLightHero ? 'text-white' : 'text-[#FC4C4C]'
                  : linkColor
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            className={`text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-300 ${ctaBg}`}
          >
            Get Started
          </Link>
        </div>
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${menuIconColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#EEF1F4] px-6 py-4 flex flex-col gap-4">
          {navLinks.filter(l => l.label !== 'Get Started').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium ${
                pathname === link.href ? 'text-[#FC4C4C]' : 'text-[#141B24] hover:text-[#141B24]/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            onClick={() => setMobileOpen(false)}
            className="bg-[#141B24] text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-[#1e2a38] transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
