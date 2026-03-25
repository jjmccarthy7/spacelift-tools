'use client'
import Image from 'next/image'
import { Camera, MessageCircle, CheckCircle, Star } from 'lucide-react'

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
            <p className="text-xs text-[#8D9EB2] mt-0.5">$25k – $50k</p>
          </div>
          <div className="bg-[#EEF1F4] rounded-xl p-3">
            <p className="text-xs font-semibold text-[#141B24]">Timeline</p>
            <p className="text-xs text-[#8D9EB2] mt-0.5">3–6 months</p>
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
    <div className="relative flex-shrink-0">
      {/* Outer glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          inset: '-40%',
          background: 'radial-gradient(ellipse 60% 70% at 55% 80%, rgba(252,76,76,0.18) 0%, rgba(162,123,252,0.10) 45%, transparent 70%)',
          filter: 'blur(52px)',
          zIndex: 0,
        }}
      />

      {/* ── DESKTOP: real iPhone frame + 3D lean ── */}
      <div
        className="hidden lg:block relative"
        style={{
          filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.25))',
          transform: 'perspective(1400px) rotateY(-18deg) rotateX(16deg) translateY(-40px)',
          transformOrigin: 'bottom center',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* hero-phone: sized to frame aspect ratio — 1350:2760 ≈ 9:18.4 */}
        <div
          className="relative"
          style={{ width: '360px', aspectRatio: '1350 / 2760' }}
        >
          {/* hero-phone-screen: sits under the frame, clipped to the screen window */}
          <div
            className="absolute overflow-hidden bg-white"
            style={{
              top: '7.8%',
              left: '5.5%',
              right: '5.5%',
              bottom: '3.2%',
              borderRadius: '38px',
            }}
          >
            {/* Screen header */}
            <div className="flex-shrink-0 px-4 pt-10 pb-2 border-b border-[#EEF1F4]">
              <p className="text-xs font-bold text-[#141B24] text-center">
                {screens[step]?.title || screens[0].title}
              </p>
            </div>
            {/* Screen content */}
            <div className="overflow-y-auto" style={{ height: 'calc(100% - 52px)' }}>
              <Screen />
            </div>
          </div>

          {/* hero-phone-frame: real device frame PNG, sits above the screen */}
          <Image
            src="/iphone17-frame.png"
            alt=""
            aria-hidden="true"
            fill
            className="pointer-events-none select-none"
            style={{ objectFit: 'contain', zIndex: 10 }}
            priority
          />
        </div>
      </div>

      {/* ── TABLET: slight tilt, same frame ── */}
      <div
        className="hidden md:block lg:hidden relative"
        style={{
          filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.18))',
          transform: 'perspective(1400px) rotateY(-8deg) rotateX(6deg) translateY(-10px)',
          transformOrigin: 'bottom center',
        }}
      >
        <div
          className="relative"
          style={{ width: '300px', aspectRatio: '1350 / 2760' }}
        >
          <div
            className="absolute overflow-hidden bg-white"
            style={{
              top: '7.8%',
              left: '5.5%',
              right: '5.5%',
              bottom: '3.2%',
              borderRadius: '32px',
            }}
          >
            <div className="flex-shrink-0 px-3 pt-8 pb-2 border-b border-[#EEF1F4]">
              <p className="text-xs font-bold text-[#141B24] text-center">
                {screens[step]?.title || screens[0].title}
              </p>
            </div>
            <div className="overflow-y-auto" style={{ height: 'calc(100% - 46px)' }}>
              <Screen />
            </div>
          </div>
          <Image
            src="/iphone17-frame.png"
            alt=""
            aria-hidden="true"
            fill
            className="pointer-events-none select-none"
            style={{ objectFit: 'contain', zIndex: 10 }}
            priority
          />
        </div>
      </div>

      {/* ── MOBILE: flat, no rotation ── */}
      <div
        className="block md:hidden relative"
        style={{ filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14))' }}
      >
        <div
          className="relative"
          style={{ width: '260px', aspectRatio: '1350 / 2760' }}
        >
          <div
            className="absolute overflow-hidden bg-white"
            style={{
              top: '7.8%',
              left: '5.5%',
              right: '5.5%',
              bottom: '3.2%',
              borderRadius: '28px',
            }}
          >
            <div className="flex-shrink-0 px-3 pt-7 pb-2 border-b border-[#EEF1F4]">
              <p className="text-xs font-bold text-[#141B24] text-center">
                {screens[step]?.title || screens[0].title}
              </p>
            </div>
            <div className="overflow-y-auto" style={{ height: 'calc(100% - 42px)' }}>
              <Screen />
            </div>
          </div>
          <Image
            src="/iphone17-frame.png"
            alt=""
            aria-hidden="true"
            fill
            className="pointer-events-none select-none"
            style={{ objectFit: 'contain', zIndex: 10 }}
            priority
          />
        </div>
      </div>
    </div>
  )
}
