import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#141B24] text-white overflow-hidden">
      {/* Top section: three link columns */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: Connect With Us */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#8D9EB2] mb-5">
              Connect With Us
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-[#FC4C4C] transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-[#FC4C4C] transition-colors duration-200"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-[#FC4C4C] transition-colors duration-200"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-[#FC4C4C] transition-colors duration-200"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#8D9EB2] mb-5">
              Contact Us
            </p>
            <a
              href="mailto:info@hellospacelift.com"
              className="text-sm text-white hover:text-[#FC4C4C] transition-colors duration-200"
            >
              info@hellospacelift.com
            </a>
          </div>

          {/* Column 3: Terms and Conditions */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#8D9EB2] mb-5">
              Terms and Conditions
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white hover:text-[#FC4C4C] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom wordmark */}
      <div className="px-6 md:px-12 lg:px-20 pb-0">
        <p
          className="text-white font-black leading-none select-none"
          style={{
            fontSize: 'clamp(80px, 16vw, 220px)',
            letterSpacing: '-0.03em',
            fontFamily: 'var(--font-primary)',
            lineHeight: 0.9,
          }}
        >
          spacelift
        </p>
      </div>
    </footer>
  )
}