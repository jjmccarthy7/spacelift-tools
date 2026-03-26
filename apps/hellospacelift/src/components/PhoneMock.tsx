'use client'
import Image from 'next/image'
import { Camera, MessageCircle, CheckCircle, Star } from 'lucide-react'

// iPhone frame asset served from Next.js public/ directory
const IPHONE_FRAME_URL = '/iPhone17-frame.png'

interface PhoneMockProps {
    step: number
}

const screens = [
    // Step 1: Show us your space
  {
        title: 'Your space',
        component: () => (
                <div className="flex flex-col gap-3 p-4">
                        <div className="bg-[#EEF1F4] rounded-2xl h-32 flex items-center justify-center">
                                  <div className="text-center">
                                              <Camera size={28} strokeWidth={1.25} className="text-[#8D9EB2] mx-auto mb-2" />
                                              <p className="text-xs text-[#8D9EB2] font-medium">Add photos of your space</p>
                                  </div>
                        </div>
                        <div className="space-y-2">
                                  <div className="bg-[#EEF1F4] rounded-xl p-3">
                                              <p className="text-xs font-semibold text-[#141B24]">Project type</p>
                                              <p className="text-xs text-[#8D9EB2] mt-0.5">Kitchen renovation</p>
                                  </div>
                                  <div className="bg-[#EEF1F4] rounded-xl p-3">
                                              <p className="text-xs font-semibold text-[#141B24]">Budget range</p>
                                              <p className="text-xs text-[#8D9EB2] mt-0.5">$25k - $50k</p>
                                  </div>
                                  <div className="bg-[#EEF1F4] rounded-xl p-3">
                                              <p className="text-xs font-semibold text-[#141B24]">Timeline</p>
                                              <p className="text-xs text-[#8D9EB2] mt-0.5">3-6 months</p>
                                  </div>
                        </div>
                </div>
              ),
  },
    // Step 2: Talk to an advisor
  {
        title: 'Advisor chat',
        component: () => (
                <div className="flex flex-col gap-3 p-4">
                        <div className="flex items-center gap-3 mb-1">
                                  <div className="w-8 h-8 rounded-full bg-[#FC4C4C] flex items-center justify-center text-white text-xs font-bold">S</div>
                                  <div>
                                              <p className="text-xs font-semibold text-[#141B24]">Spacelift Advisor</p>
                                              <p className="text-[10px] text-[#0ED096]">Online now</p>
                                  </div>
                        </div>
                        <div className="bg-[#EEF1F4] rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                                  <p className="text-xs text-[#141B24]">Hi! I have reviewed your project and have a few questions to find your best matches.</p>
                        </div>
                        <div className="bg-[#FC4C4C] rounded-2xl rounded-tr-sm p-3 max-w-[85%] ml-auto">
                                  <p className="text-xs text-white">That sounds great! When can we start?</p>
                        </div>
                        <div className="bg-[#EEF1F4] rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                                  <p className="text-xs text-[#141B24]">We can introduce you to contractors this week!</p>
                        </div>
                        <div className="flex gap-2 mt-2">
                                  <MessageCircle size={14} strokeWidth={1.25} className="text-[#8D9EB2] mt-0.5" />
                                  <input className="flex-1 bg-[#EEF1F4] rounded-full px-3 py-1.5 text-xs text-[#8D9EB2] outline-none" placeholder="Type a message..." readOnly />
                        </div>
                </div>
              ),
  },
    // Step 3: Meet your matches
  {
        title: 'Your matches',
        component: () => (
                <div className="flex flex-col gap-2 p-4">
                        <div className="text-center mb-2">
                                  <p className="text-xs font-bold text-[#141B24]">Top matches for your project</p>
                                  <p className="text-[10px] text-[#8D9EB2]">Matched to your project and what matters most to you.</p>
                        </div>
                  {[
                  { initials: 'MR', name: 'Maria Reyes', company: 'Reyes Construction Group', color: '#FC4C4C', best: true },
                  { initials: 'JS', name: 'John Smith', company: 'J.S. Fine Builders, Inc.', color: '#3B86E1', best: true },
                  { initials: 'DP', name: 'David Park', company: 'Swanson Contracting', color: '#0ED096', best: false },
                  { initials: 'ZM', name: 'Zac Miller', company: 'Mie & Haven Renovation', color: '#A27BFC', best: false },
                          ].map((c) => (
                                      <div key={c.initials} className="flex items-center gap-3 bg-[#EEF1F4] rounded-xl p-2.5">
                                                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: c.color }}>
                                                    {c.initials}
                                                  </div>
                                                  <div className="flex-1 min-w-0">
                                                                <div className="flex items-center gap-1.5">
                                                                                <p className="text-xs font-semibold text-[#141B24] truncate">{c.name}</p>
                                                                  {c.best && <span className="text-[9px] bg-[#FC4C4C] text-white px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">Best Fit</span>}
                                                                </div>
                                                                <p className="text-[10px] text-[#8D9EB2] truncate">{c.company}</p>
                                                                <p className="text-[10px] text-[#0ED096] font-medium">VERIFIED</p>
                                                  </div>
                                      </div>
                                    ))}
                </div>
              ),
  },
    // Step 4: Pick your partner
  {
        title: 'Your partner',
        component: () => (
                <div className="flex flex-col gap-3 p-4">
                        <div className="bg-[#EEF1F4] rounded-2xl p-4">
                                  <div className="flex items-center gap-3 mb-3">
                                              <div className="w-12 h-12 rounded-full bg-[#FC4C4C] flex items-center justify-center text-white text-sm font-bold">MR</div>
                                              <div>
                                                            <p className="text-sm font-bold text-[#141B24]">Maria Reyes</p>
                                                            <p className="text-xs text-[#8D9EB2]">Reyes Construction Group</p>
                                                            <div className="flex items-center gap-1 mt-0.5">
                                                              {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-[#FC4C4C] fill-[#FC4C4C]" />)}
                                                                            <span className="text-[10px] text-[#8D9EB2] ml-1">4.9 (47 reviews)</span>
                                                            </div>
                                              </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2">
                                              <div className="bg-white rounded-xl p-2 text-center">
                                                            <p className="text-xs font-bold text-[#141B24]">12 years</p>
                                                            <p className="text-[10px] text-[#8D9EB2]">Experience</p>
                                              </div>
                                              <div className="bg-white rounded-xl p-2 text-center">
                                                            <p className="text-xs font-bold text-[#141B24]">200+</p>
                                                            <p className="text-[10px] text-[#8D9EB2]">Projects</p>
                                              </div>
                                  </div>
                        </div>
                        <button className="w-full bg-[#FC4C4C] text-white text-xs font-semibold py-3 rounded-full hover:bg-[#CA3D3D] transition-colors">
                                  Choose Maria
                        </button>
                </div>
              ),
  },
    // Step 5: Enjoy your project
  {
        title: 'Project complete!',
        component: () => (
                <div className="flex flex-col items-center justify-center gap-4 p-4 h-full">
                        <div className="w-16 h-16 rounded-full bg-[#0ED096]/20 flex items-center justify-center">
                                  <CheckCircle size={32} strokeWidth={1.25} className="text-[#0ED096]" />
                        </div>
                        <div className="text-center">
                                  <p className="text-sm font-bold text-[#141B24]">Project Complete!</p>
                                  <p className="text-xs text-[#8D9EB2] mt-1">Your kitchen renovation is finished and looking amazing.</p>
                        </div>
                        <div className="w-full bg-[#EEF1F4] rounded-2xl p-3">
                                  <div className="bg-[#0ED096]/20 rounded-xl p-3 mb-2">
                                              <div className="flex justify-between items-center">
                                                            <p className="text-xs font-semibold text-[#141B24]">Final cost</p>
                                                            <span className="text-xs font-bold text-[#0ED096]">On budget</span>
                                              </div>
                                              <p className="text-lg font-black text-[#141B24]">$42,500</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-[#FC4C4C] fill-[#FC4C4C]" />)}
                                              <p className="text-xs text-[#8D9EB2]">Leave a review</p>
                                  </div>
                        </div>
                </div>
              ),
  },
  ]
  
  export default function PhoneMock({ step }: PhoneMockProps) {
      const Screen = screens[step]?.component || screens[0].component
        
          return (
                <>
                  {/*
                         * .hero-phone — DESKTOP lg+
                                * position: absolute on container only
                                       * 3D transform on container only — NOT on frame or screen individually
                                              * Screen sits at z-index 1 under the frame PNG at z-index 2
                                                     */}
                
                  {/* ── DESKTOP lg+ ── */}
                      <div
                                className="hero-phone hidden lg:block"
                                style={{
                                            position: 'absolute',
                                            right: '72px',
                                            top: 0,
                                            width: '290px',
                                            transform: 'perspective(1550px) rotateY(-10deg) rotateX(16deg) rotateZ(-4deg) translateY(-92px)',
                                            filter: 'drop-shadow(0 46px 90px rgba(0,0,0,0.16))',
                                            transformOrigin: 'bottom center',
                                }}
                              >
                        {/* .hero-phone-screen — app UI sits underneath the frame at z-index 1 */}
                              <div
                                          className="hero-phone-screen"
                                          style={{
                                                        position: 'absolute',
                                                        top: '6.2%',
                                                        left: '9.0%',
                                                        width: '82.0%',
                                                        height: '84.8%',
                                                        borderRadius: '28px',
                                                        overflow: 'hidden',
                                                        zIndex: 1,
                                                        background: 'white',
                                          }}
                                        >
                                {/* Screen content — fills the device window */}
                                        <div className="overflow-y-auto h-full">
                                                    <Screen />
                                        </div>
                              </div>
                      
                        {/* .hero-phone-frame — real device PNG rendered above screen at z-index 2 */}
                              <div
                                          className="hero-phone-frame"
                                          style={{
                                                        position: 'relative',
                                                        width: '100%',
                                                        zIndex: 2,
                                                        pointerEvents: 'none',
                                          }}
                                        >
                                        <Image
                                                      src={IPHONE_FRAME_URL}
                                                      alt=""
                                                      aria-hidden="true"
                                                      width={1350}
                                                      height={2760}
                                                      className="w-full h-auto select-none"
                                                      style={{ display: 'block' }}
                                                      priority
                                                      unoptimized
                                                    />
                              </div>

                  {/* Ground shadow — blurred ellipse beneath device base */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-18px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '220px',
                      height: '36px',
                      background: 'rgba(20,27,36,0.16)',
                      filter: 'blur(18px)',
                      borderRadius: '50%',
                      zIndex: 0,
                      pointerEvents: 'none',
                    }}
                  />
                      </div>
                
                  {/* ── TABLET md (below lg) ── */}
                      <div
                                className="hidden md:block lg:hidden relative"
                                style={{
                                            width: '300px',
                                            transform: 'perspective(1400px) rotateY(-9deg) rotateX(8deg) translateY(-20px)',
                                            filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.18))',
                                }}
                              >
                              <div
                                          style={{
                                                        position: 'absolute',
                                                        top: '4.5%',
                                                        left: '6.5%',
                                                        width: '87%',
                                                        height: '91%',
                                                        borderRadius: '28px',
                                                        overflow: 'hidden',
                                                        zIndex: 1,
                                                        background: 'white',
                                          }}
                                        >
                                        <div className="overflow-y-auto h-full">
                                                    <Screen />
                                        </div>
                              </div>
                              <div style={{ position: 'relative', width: '100%', zIndex: 2, pointerEvents: 'none' }}>
                                        <Image
                                                      src={IPHONE_FRAME_URL}
                                                      alt=""
                                                      aria-hidden="true"
                                                      width={1350}
                                                      height={2760}
                                                      className="w-full h-auto select-none"
                                                      style={{ display: 'block' }}
                                                      priority
                                                      unoptimized
                                                    />
                              </div>
                      </div>
                
                  {/* ── MOBILE (below md) ── */}
                      <div
                                className="block md:hidden relative"
                                style={{
                                            width: '260px',
                                            filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14))',
                                }}
                              >
                              <div
                                          style={{
                                                        position: 'absolute',
                                                        top: '4.5%',
                                                        left: '6.5%',
                                                        width: '87%',
                                                        height: '91%',
                                                        borderRadius: '24px',
                                                        overflow: 'hidden',
                                                        zIndex: 1,
                                                        background: 'white',
                                          }}
                                        >
                                        <div className="overflow-y-auto h-full">
                                                    <Screen />
                                        </div>
                              </div>
                              <div style={{ position: 'relative', width: '100%', zIndex: 2, pointerEvents: 'none' }}>
                                        <Image
                                                      src={IPHONE_FRAME_URL}
                                                      alt=""
                                                      aria-hidden="true"
                                                      width={1350}
                                                      height={2760}
                                                      className="w-full h-auto select-none"
                                                      style={{ display: 'block' }}
                                                      unoptimized
                                                    />
                              </div>
                      </div>
                </>
              )
  }
