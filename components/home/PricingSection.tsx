export default function PricingSection() {
  return (
    <>


{/* 4. PRICING SECTION */}
      <section className="py-16 md:py-20 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-20">
              <span className="text-amber-700 tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Transparent Pricing</span>
              <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
                Wellness Therapy Packages
             </h3>

            <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
            </div>
              

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic */}
            
              <div className="group relative overflow-hidden bg-white p-8 rounded-[28px] border border-stone-200/80 text-center transition-all duration-300 hover:shadow-lg">
  
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-lg rotate-12"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>
                 </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Relaxation</h3>
                <p className="text-stone-500 font-light mb-8">60 Minutes Session</p>
                <div className="text-5xl tracking-[-0.03em] font-serif text-stone-900 mb-8">₹2,499</div>
                <ul className="space-y-4 mb-10 text-stone-600 font-light">
                  <li>Choice of Swedish or Balinese</li>
                  <li>Premium Essential Oils</li>
                  <li>Shower Facility</li>
                </ul>
                <a 
                  href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20the%20Relaxation%20package." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
                  Book Deep Healing
                </a>
              </div>
            

            {/* Premium (Highlighted) */}
            
              <div className="group relative bg-stone-900 p-12 rounded-[32px] border border-[#d4af37]/80 text-center md:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-lg">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-stone-900 px-6 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-medium shadow-[0_10px_30px_rgba(212,175,55,0.35)] z-20">
                    Most Popular
                 </div>

                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                   <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/10 blur-lg rotate-12"></div>
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-amber-500/10"></div>
                 </div>
                <h3 className="text-2xl font-serif text-white mb-2">Deep Healing</h3>
                <p className="text-stone-400 font-light mb-8">90 Minutes Session</p>
                <div className="text-5xl font-serif text-white mb-8">₹3,499</div>
                <ul className="space-y-4 mb-10 text-stone-300 font-light">
                  <li>Deep Tissue or Thai Massage</li>
                  <li>Hot Stone Therapy Add-on</li>
                  <li>Premium Essential Oils</li>
                  <li>Shower & Steam Facility</li>
                </ul>
                <a 
                  href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-all duration-300 hover:shadow-lg uppercase tracking-widest text-sm font-medium shadow-lg">
                  Book Couple Retreat
                 </a>
              </div>
            

            {/* Couple */}
            
              <div className="group relative overflow-hidden bg-white p-10 rounded-[28px] border border-stone-200/80 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-lg rotate-12"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>
                </div>
                <h3 className="text-2xl md:text-[30px] tracking-[-0.02em] font-serif text-stone-900 mb-2">Couple&apos;s Retreat</h3>
                <p className="text-stone-500 font-light mb-8">90 Minutes Session</p>
                <div className="text-5xl tracking-[-0.03em] font-serif text-stone-900 mb-8">₹6,499</div>
                <ul className="space-y-4 mb-10 text-stone-600 font-light">
                  <li>Private Couple&apos;s Suite</li>
                  <li>Any Massage of Choice</li>
                  <li>Aromatherapy & Rose Petals</li>
                  <li>Private Shower Facility</li>
                </ul>
                <a 
                  href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-all duration-300 hover:shadow-lg uppercase tracking-widest text-sm font-medium shadow-lg">
                  Book Couple Retreat
                </a>
              </div>
            
          </div>
        </div>
      </section>
      </>
  );
}