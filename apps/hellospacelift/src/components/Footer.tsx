import Link from 'next/link'
import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/hellospacelift', Icon: Instagram },
  { label: 'YouTube', href: 'https://youtube.com/@hellospacelift', Icon: Youtube },
  { label: 'Facebook', href: 'https://facebook.com/hellospacelift', Icon: Facebook },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/hellospacelift', Icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="bg-[#141B24] text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-8">
        {/* Three column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Connect With Us */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#8D9EB2] mb-6">
              Connect With Us
            </p>
            <ul className="space-y-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white font-semibold hover:text-[#FC4C4C] transition-colors duration-200"
                  >
                    <Icon size={18} strokeWidth={1.25} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#8D9EB2] mb-6">
              Contact Us
            </p>
            <a
              href="mailto:info@hellospacelift.com"
              className="text-white font-semibold hover:text-[#FC4C4C] transition-colors duration-200"
            >
              info@hellospacelift.com
            </a>
          </div>

          {/* Terms & Conditions */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#8D9EB2] mb-6">
              Terms &amp; Conditions
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-white font-semibold hover:text-[#FC4C4C] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Large logo wordmark */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-[80px] md:text-[120px] lg:text-[160px] font-black leading-none tracking-tight text-white">
            spacelift
          </p>
          <p className="mt-4 text-[#8D9EB2] text-sm">
            © {new Date().getFullYear()} Spacelift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
