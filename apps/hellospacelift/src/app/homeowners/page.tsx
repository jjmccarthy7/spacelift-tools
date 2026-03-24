export default function HomeownersPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#F7F8FA] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-xs font-black uppercase tracking-widest text-[#FC4C4C] mb-4">For Homeowners</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Your dream renovation starts here.
          </h1>
          <p className="text-xl text-[#8D9EB2] leading-relaxed max-w-lg mb-10">
            We handle the hard part — finding trusted, vetted contractors — so you can focus on the fun part: designing your dream space.
          </p>
          <a href="#" className="inline-block bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200">
            Get started
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-xs font-black uppercase tracking-widest text-[#FC4C4C] mb-4">How it works</p>
          <h2 className="text-4xl font-black text-[#141B24] tracking-tight mb-12 max-w-lg">
            Five steps to your perfect renovation.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { n: '01', title: 'Show us your space', desc: 'Share photos and project details.' },
              { n: '02', title: 'Talk to an advisor', desc: 'Get personalized guidance.' },
              { n: '03', title: 'Meet your matches', desc: 'Review vetted contractors.' },
              { n: '04', title: 'Pick your partner', desc: 'Choose the right fit.' },
              { n: '05', title: 'Enjoy your project', desc: 'Relax while we manage.' },
            ].map(step => (
              <div key={step.n} className="bg-[#F7F8FA] rounded-2xl p-6">
                <p className="text-3xl font-black text-[#FC4C4C] mb-3">{step.n}</p>
                <p className="text-sm font-bold text-[#141B24] mb-1">{step.title}</p>
                <p className="text-xs text-[#8D9EB2]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
