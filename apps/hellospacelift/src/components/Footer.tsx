import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/hellospacelift', Icon: Instagram },
  { label: 'YouTube', href: 'https://youtube.com/@hellospacelift', Icon: Youtube },
  { label: 'Facebook', href: 'https://facebook.com/hellospacelift', Icon: Facebook },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/hellospacelift', Icon: Linkedin },
  ]

export default function Footer() {
    return (
          <footer className="bg-[#141B24] text-white overflow-hidden">
            {/* Footer links content — constrained width */}
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-12">
                  {/* Three column grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                          {/* Connect With Us */}
                                  <div>
                                              <p className="text-xs font-black uppercase tracking-widest text-[#8D9EB2] mb-6">
                                                            Connect With Us
                                              </p>p>
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
                                              </a>a>
                            </li>li>
                          ))}
                                              </ul>ul>
                                  </div>div>
                        
                          {/* Contact Us */}
                                  <div>
                                              <p className="text-xs font-black uppercase tracking-widest text-[#8D9EB2] mb-6">
                                                            Contact Us
                                              </p>p>
                                              <a
                                                              href="mailto:info@hellospacelift.com"
                                                              className="text-white font-semibold hover:text-[#FC4C4C] transition-colors duration-200"
                                                            >
                                                            info@hellospacelift.com
                                              </a>a>
                                  </div>div>
                        
                          {/* Terms & Conditions */}
                                  <div>
                                              <p className="text-xs font-black uppercase tracking-widest text-[#8D9EB2] mb-6">
                                                            Terms &amp; Conditions
                                              </p>p>
                                              <ul className="space-y-3">
                                                            <li>
                                                                            <Link
                                                                                                href="/privacy"
                                                                                                className="text-white font-semibold hover:text-[#FC4C4C] transition-colors duration-200"
                                                                                              >
                                                                                              Privacy Policy
                                                                            </Link>Link>
                                                            </li>li>
                                              </ul>ul>
                                  </div>div>
                        </div>div>
                </div>div>
          
            {/* Full-bleed footer wordmark — centered, only descender tip crops at page edge */}
                <div className="relative w-full" style={{ height: 'clamp(120px, 22vw, 320px)', marginBottom: '-2%' }}>
                        <Image
                                    src="/spacelift-logo-white.png"
                                    alt="Spacelift"
                                    fill
                                    priority
                                    style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
                                  />
                </div>div>
          </footer>footer>
        )
}</footer>
