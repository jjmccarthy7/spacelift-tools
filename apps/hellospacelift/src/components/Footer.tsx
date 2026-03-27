import Link from 'next/link'
import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
          <footer className="bg-[#141B24] text-white">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
                
                  {/* Top row: logo + tagline + social */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12 border-b border-white/10">
                                  <div className="max-w-xs">
                                              <span className="text-[#FC4C4C] font-black text-2xl tracking-tight" style={{ fontFamily: 'var(--font-primary)' }}>
                                                            spacelift
                                              </span>span>
                                              <p className="mt-3 text-[#8D9EB2] text-sm leading-relaxed">
                                                            Life is better when you love where you live. We make renovation more approachable for everyone.
                                              </p>p>
                                  </div>div>
                        
                                  <div className="flex items-center gap-5">
                                              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#8D9EB2] hover:text-white transition-colors duration-200" aria-label="Instagram">
                                                            <Instagram size={20} strokeWidth={1.25} />
                                              </a>a>
                                              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#8D9EB2] hover:text-white transition-colors duration-200" aria-label="YouTube">
                                                            <Youtube size={20} strokeWidth={1.25} />
                                              </a>a>
                                              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#8D9EB2] hover:text-white transition-colors duration-200" aria-label="Facebook">
                                                            <Facebook size={20} strokeWidth={1.25} />
                                              </a>a>
                                              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8D9EB2] hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                                                            <Linkedin size={20} strokeWidth={1.25} />
                                              </a>a>
                                  </div>div>
                        </div>div>
                
                  {/* Nav columns */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-b border-white/10">
                                  <div>
                                              <h4 className="text-xs font-black tracking-widest uppercase text-white mb-4">Homeowners</h4>h4>
                                              <ul className="space-y-3">
                                                            <li><Link href="/homeowners" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">How It Works</Link>Link></li>li>
                                                            <li><Link href="/projects" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Projects</Link>Link></li>li>
                                                            <li><Link href="/get-started" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Get Started</Link>Link></li>li>
                                              </ul>ul>
                                  </div>div>
                                  <div>
                                              <h4 className="text-xs font-black tracking-widest uppercase text-white mb-4">For Pros</h4>h4>
                                              <ul className="space-y-3">
                                                            <li><Link href="/pros" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Become a Pro</Link>Link></li>li>
                                                            <li><Link href="/pros#why" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Why Spacelift</Link>Link></li>li>
                                                            <li><Link href="/pros#apply" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Apply Now</Link>Link></li>li>
                                              </ul>ul>
                                  </div>div>
                                  <div>
                                              <h4 className="text-xs font-black tracking-widest uppercase text-white mb-4">Company</h4>h4>
                                              <ul className="space-y-3">
                                                            <li><Link href="/" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">About</Link>Link></li>li>
                                                            <li><a href="mailto:info@hellospacelift.com" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Contact</a>a></li>li>
                                              </ul>ul>
                                  </div>div>
                                  <div>
                                              <h4 className="text-xs font-black tracking-widest uppercase text-white mb-4">Legal</h4>h4>
                                              <ul className="space-y-3">
                                                            <li><Link href="/privacy" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Privacy Policy</Link>Link></li>li>
                                                            <li><Link href="/privacy" className="text-sm text-[#8D9EB2] hover:text-white transition-colors duration-200">Terms of Service</Link>Link></li>li>
                                              </ul>ul>
                                  </div>div>
                        </div>div>
                
                  {/* Bottom row */}
                        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                  <p className="text-xs text-[#8D9EB2]">
                                              &copy; {new Date().getFullYear()} Spacelift. All rights reserved.
                                  </p>p>
                                  <p className="text-xs text-[#8D9EB2]">
                                              <a href="mailto:info@hellospacelift.com" className="hover:text-white transition-colors duration-200">info@hellospacelift.com</a>a>
                                  </p>p>
                        </div>div>
                </div>div>
          </footer>footer>
        )
}</footer>
