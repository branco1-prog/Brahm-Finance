import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function TeamSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: photoRef, isVisible: photoVisible } = useScrollReveal();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();

  return (
    <section id="team" className="bg-cream section-padding">
      <div className="container-brahm">
        <div
          ref={headingRef}
          className={`mb-16 ${headingVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <span className="mb-5 block h-[2px] w-16 bg-navy" />
          <h2 className="text-charcoal">Our Leadership</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <div
            ref={photoRef}
            className={`w-full lg:w-[40%] ${photoVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
          >
            <div className="group relative max-w-[480px] mx-auto border border-line bg-paper p-3 shadow-team lg:mx-0 overflow-hidden">
              <span className="absolute -right-4 -top-4 hidden h-28 w-28 border-r-2 border-t-2 border-graphite/70 md:block transition-all duration-500 group-hover:h-32 group-hover:w-32" />
              <span className="absolute -left-4 -bottom-4 hidden h-28 w-28 border-l-2 border-b-2 border-graphite/70 md:block transition-all duration-500 group-hover:h-32 group-hover:w-32" />
              <div className="overflow-hidden">
                <img
                  src="/assets/director-portrait.jpg"
                  alt="Oladipo Olakunle-Jinadu - Founder & CEO"
                  className="w-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
                  style={{
                    transform: photoVisible ? 'scale(1)' : 'scale(0.98)',
                    transition: 'transform 600ms cubic-bezier(0.05, 0.7, 0.1, 1)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div
            ref={textRef}
            className={`w-full lg:w-[60%] ${textVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <h3 className="text-charcoal">Oladipo Olakunle-Jinadu</h3>
            <p className="font-sans text-[13px] font-semibold text-navy uppercase tracking-[0.2em] mt-4">
              Founder & Chief Executive Officer
            </p>

            <div className="mt-8 max-w-[680px] space-y-5 border-l-2 border-navy/25 pl-6 transition-all duration-500 hover:border-navy/40">
              <p className="font-sans text-[18px] text-charcoal/78 leading-[1.75]">
                Oladipo is the Founder and Chief Executive Officer of Brahm Finance Limited. Leveraging over a decade of experience in Nigeria's financial services industry, he leads the firm's vision to deliver bridge financing and bespoke credit solutions that address working capital needs, business expansion, and short-term liquidity challenges.
              </p>
              <p className="font-sans text-[18px] text-charcoal/78 leading-[1.75]">
                Prior to founding Brahm Finance, Oladipo built a distinguished career in investment banking, specialising in Capital Raising and Debt Restructuring transactions at Chapel Hill Advisory Partners, Greenwich Merchant Bank, and Norrenberger Advisory Partners. He has supported numerous Commercial Papers, Private Notes, Trade and Structured Finance deals across Financial Services, Infrastructure, FMCG, Agriculture, Healthcare, and Renewable Energy sectors.
              </p>
              <p className="font-sans text-[18px] text-charcoal/78 leading-[1.75]">
                He holds a degree in Business Economics from the University of Hull (UK) and an MBA in International Business from Nexford University, Washington DC, alongside certifications in Sukuk Structuring, Corporate Credit Analysis, and Corporate Finance.
              </p>
            </div>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center mt-7 font-sans text-[14px] font-semibold text-navy hover:text-deepnavy transition-all duration-300"
            >
              Connect on LinkedIn
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
              <span className="ml-1 h-[1px] w-0 bg-navy transition-all duration-300 group-hover:w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
