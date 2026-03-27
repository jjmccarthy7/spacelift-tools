import Link from 'next/link'
import { ArrowRight, Smartphone, MessageCircle } from 'lucide-react'

export default function GetStartedPage() {
    return (
          <div className="pt-16">
          
            {/* ── HERO ── */}
                <section className="bg-white py-24 md:py-32">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
                                  <span className="inline-block text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-6">
                                              Get started
                                  </span>span>
                                  <h1 className="text-5xl md:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-8 max-w-3xl mx-auto">
                                              Two ways to give your home a Spacelift.
                                  </h1>h1>
                                  <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mx-auto">
                                              Whether you&apos;re ready to dive in or just want to talk it through — we&apos;re here. Choose what feels right for you.
                                  </p>p>
                        </div>div>
                </section>section>
          
            {/* ── TWO OPTIONS ── */}
                <section className="bg-[#EEF1F4] py-16 md:py-24">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                  
                                    {/* Option 1: Get the App */}
                                              <div className="bg-[#141B24] rounded-3xl p-10 md:p-12 flex flex-col">
                                                            <div className="w-12 h-12 rounded-2xl bg-[#FC4C4C]/15 flex items-center justify-center mb-8">
                                                                            <Smartphone size={24} strokeWidth={1.25} className="text-[#FC4C4C]" />
                                                            </div>div>
                                                            <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-4 block">Option 01</span>span>
                                                            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-tight mb-6">
                                                                            Get the Spacelift app.
                                                            </h2>h2>
                                                            <p className="text-[#8D9EB2] text-lg leading-relaxed mb-10 flex-grow">
                                                                            Describe your project, upload photos, and explore what&apos;s possible — all from your phone. Get a real sense of scope and cost before you talk to anyone. Start at your own pace, on your own terms.
                                                            </p>p>
                                                            <div className="space-y-3">
                                                                            <p className="text-xs font-semibold text-[#8D9EB2] uppercase tracking-widest mb-4">Download the app</p>p>
                                                              {/* App Store */}
                                                                            <a
                                                                                                href="#"
                                                                                                className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-2xl px-5 py-4 w-full"
                                                                                              >
                                                                                              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                                                                                                                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                                                                                </svg>svg>
                                                                                              <div>
                                                                                                                  <p className="text-xs text-white/60 leading-none mb-1">Download on the</p>p>
                                                                                                                  <p className="text-base font-bold text-white leading-none">App Store</p>p>
                                                                                                </div>div>
                                                                            </a>a>
                                                              {/* Google Play */}
                                                                            <a
                                                                                                href="#"
                                                                                                className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-2xl px-5 py-4 w-full"
                                                                                              >
                                                                                              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                                                                                                                  <path d="M3.18 23.76c.31.17.67.22 1.05.12l.07-.04 11.12-11.12-2.35-2.35L3.18 23.76zm15.3-10.69L15.9 11.6 13.36 9.06l2.53-2.53 2.6 1.49c.74.43.74 1.13-.01 1.55zM2.86.36C2.57.62 2.4 1.04 2.4 1.6v20.8c0 .56.17.98.46 1.24l.07.06L14 12.73v-.27L2.93.3l-.07.06zM13.07 11.27l-2.73 2.73-7.2-7.21 9.93 4.48z"/>
                                                                                                </svg>svg>
                                                                                              <div>
                                                                                                                  <p className="text-xs text-white/60 leading-none mb-1">Get it on</p>p>
                                                                                                                  <p className="text-base font-bold text-white leading-none">Google Play</p>p>
                                                                                                </div>div>
                                                                            </a>a>
                                                            </div>div>
                                              </div>div>
                                  
                                    {/* Option 2: Talk to an Advisor */}
                                              <div className="bg-white rounded-3xl p-10 md:p-12 flex flex-col border border-[#EEF1F4]">
                                                            <div className="w-12 h-12 rounded-2xl bg-[#FC4C4C]/10 flex items-center justify-center mb-8">
                                                                            <MessageCircle size={24} strokeWidth={1.25} className="text-[#FC4C4C]" />
                                                            </div>div>
                                                            <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-4 block">Option 02</span>span>
                                                            <h2 className="text-3xl md:text-4xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-6">
                                                                            Talk to a Spacelift Advisor.
                                                            </h2>h2>
                                                            <p className="text-[#8D9EB2] text-lg leading-relaxed mb-10 flex-grow">
                                                                            Not sure where to start? That&apos;s exactly what our advisors are here for. They&apos;re renovation experts — not salespeople. A conversation with them is free, honest, and genuinely useful.
                                                            </p>p>
                                                            <div className="space-y-4">
                                                                            <p className="text-xs font-semibold text-[#8D9EB2] uppercase tracking-widest">What to expect</p>p>
                                                                            <ul className="space-y-3">
                                                                              {[
                                'A real conversation — no scripts, no pressure',
                                'Honest guidance about your project and options',
                                'Help understanding scope, cost, and next steps',
                                'An introduction to vetted Spacelift Pros when you&apos;re ready',
                              ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                                          <span className="w-1.5 h-1.5 rounded-full bg-[#FC4C4C] mt-2 flex-shrink-0" />
                                                                          <span className="text-sm text-[#141B24] leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                                                    </li>li>
                                                  ))}
                                                                            </ul>ul>
                                                                            <div className="pt-4">
                                                                                              <a
                                                                                                                    href="#"
                                                                                                                    className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base w-full justify-center"
                                                                                                                  >
                                                                                                                  Book a free conversation <ArrowRight size={18} strokeWidth={1.25} />
                                                                                                </a>a>
                                                                            </div>div>
                                                            </div>div>
                                              </div>div>
                                  
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* ── REASSURANCE ── */}
                <section className="bg-white py-20 md:py-28">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
                                  <h2 className="text-3xl md:text-4xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-6 max-w-2xl mx-auto">
                                              Every great renovation starts with a simple question.
                                  </h2>h2>
                                  <p className="text-xl text-[#FC4C4C] font-black mb-8">Do I love the place I live?</p>p>
                                  <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-xl mx-auto">
                                              At Spacelift, we believe you should. And that you can. Because life is better when you love where you live.
                                  </p>p>
                        </div>div>
                </section>section>
          
          </div>div>
        )
}</div>
