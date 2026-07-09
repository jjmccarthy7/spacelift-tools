import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#141B24] text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* Top row: logo + tagline + social */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div className="max-w-xs">
            <span className="text-white font-black text-3xl tracking-tight block mb-2" style={{ fontFamily: 'var(--font-primary)' }}>
              spacelift
            </span>
            <p className="text-sm text-[#8D9EB2] leading-relaxed">
              Life is better when you love where you live.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[#8D9EB2] cursor-default" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </span>
            <span className="text-[#8D9EB2] cursor-default" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </span>
            <span className="text-[#8D9EB2] cursor-default" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </span>
            <span className="text-[#8D9EB2] cursor-default" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white mb-4">Homeowners</p>
            <ul className="flex flex-col gap-2">
              <li><Link href="/homeowners" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">How It Works</Link></li>
              <li><Link href="/projects" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Browse Projects</Link></li>
              <li><Link href="/get-started" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white mb-4">Pros</p>
            <ul className="flex flex-col gap-2">
              <li><Link href="/pros" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Why Spacelift</Link></li>
              <li><Link href="/pros#apply" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Apply to Join</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white mb-4">Company</p>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><span className="text-sm text-[#8D9EB2] cursor-default">Reviews</span></li>
              <li><a href="mailto:info@hellospacelift.com" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white mb-4">Get the App</p>
            {/* TODO: Add App Store and Google Play links once store listings are approved. */}
            <div className="flex flex-col items-start" style={{ gap: '12px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/badge-app-store.svg"
                alt="Download on the App Store"
                style={{ width: '135px', height: '40px', objectFit: 'contain', objectPosition: 'left' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/badge-google-play.svg"
                alt="Get it on Google Play"
                style={{ width: '135px', height: '40px', objectFit: 'contain', objectPosition: 'left' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#ffffff1a] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-[#8D9EB2]">&copy; 2026 Spacelift. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-[#8D9EB2] cursor-default">Terms &amp; Conditions</span>
            <Link href="/privacy" className="text-xs text-[#8D9EB2] hover:text-white transition-colors duration-200">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
