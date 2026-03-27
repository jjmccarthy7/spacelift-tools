import Link from 'next/link'
import { ArrowRight, Smartphone, MessageCircle } from 'lucide-react'

const advisorExpectations = [
      'A real conversation — no scripts, no pressure',
      'Honest guidance about your project and options',
      'Help understanding scope, cost, and next steps',
      'An introduction to vetted Spacelift Pros when you\'re ready',
    ]

export default function GetStartedPage() {
      return (
              <div className="pt-16">
              
                  {/* HERO */}
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
              
                  {/* TWO OPTIONS */}
                    <section className="bg-[#EEF1F4] py-16 md:py-24">
                            <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
                                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                      
                                          {/* Option 1: Get the App */}
                                                  <div className="bg-[#141B24] rounded-3xl p-10 md:p-12 flex flex-col">
                                                                <div className="w-12 h-12 rounded-2xl bg-[#FC4C4C]/10 flex items-center justify-center mb-8">
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
                                                                                <a
                                                                                                      href="#"
                                                                                                      className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-2xl px-5 py-4 w-full"
                                                                                                    >
                                                                                                  <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center text-white">
                                                                                                                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                                                                                                            <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/>
                                                                                                                          </svg>svg>
                                                                                                      </div>div>
                                                                                                  <div>
                                                                                                                      <p className="text-xs text-white/60 leading-none mb-1">Download on the</p>p>
                                                                                                                      <p className="text-base font-bold text-white leading-none">App Store</p>p>
                                                                                                      </div>div>
                                                                                </a>a>
                                                                                <a
                                                                                                      href="#"
                                                                                                      className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-2xl px-5 py-4 w-full"
                                                                                                    >
                                                                                                  <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center text-white">
                                                                                                                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                                                                                                            <path d="M1.22 0C.972 0 .75.201.75.534v22.932c0 .333.222.534.47.534l.013-.006L12.95 12.23l-11.717-11.77L1.22 0zm20.034 10.55l-3.008-1.687L15.005 12l3.241 3.137 3.008-1.687c.86-.483.86-1.418 0-1.9zM1.544 23.478l10.77-10.826-2.297-2.222L1.544 23.478zM12.314 11.35L1.544.522 10.017 9.85l2.297-1.5z"/>
                                                                                                                          </svg>svg>
                                                                                                      </div>div>
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
                                                                                    {advisorExpectations.map((item, i) => (
                                      <li key={i} className="flex items-start gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FC4C4C] mt-2 flex-shrink-0" />
                                                            <span className="text-sm text-[#141B24] leading-relaxed">{item}</span>span>
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
              
                  {/* REASSURANCE */}
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
