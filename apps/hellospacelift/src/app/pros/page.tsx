export default function ProsPage() {
  return (
    <div className="pt-16">
      <section className="bg-[#F7F8FA] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-xs font-black uppercase tracking-widest text-[#FC4C4C] mb-4">For Pros</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Grow your renovation business.
          </h1>
          <p className="text-xl text-[#8D9EB2] leading-relaxed max-w-lg mb-10">
            Join the Spacelift network and get connected with qualified homeowners who are ready to renovate. No cold calling. No bidding wars.
          </p>
          <a href="#" className="inline-block bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200">
            Apply to join
          </a>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Qualified leads', desc: 'Every homeowner has already been vetted and has a real project with a real budget.' },
              { title: 'No bidding wars', desc: 'We match you to projects where you are the right fit, not just the cheapest bid.' },
              { title: 'Grow your reputation', desc: 'Build a verified profile with reviews that showcase your best work.' },
            ].map(item => (
              <div key={item.title} className="bg-[#F7F8FA] rounded-3xl p-8">
                <h3 className="text-lg font-bold text-[#141B24] mb-3">{item.title}</h3>
                <p className="text-sm text-[#8D9EB2] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
