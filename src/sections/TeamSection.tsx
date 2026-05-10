import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function TeamSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: photoRef, isVisible: photoVisible } = useScrollReveal();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();

  return (
    <section id="team" className="bg-cream section-padding relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-[420px] h-[420px] bg-navy/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-brahm relative z-10">
        <div
          ref={headingRef}
          className={`mb-14 ${headingVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <span className="mb-5 block h-[2px] w-14 bg-navy" />
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.24em] text-navy/75 mb-3">
            Leadership
          </p>
          <h2 className="text-charcoal">Led by experienced operators.</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Executive Profile Card */}
          <div
            ref={photoRef}
            className={`w-full lg:sticky lg:top-24 lg:w-[40%] ${photoVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
          >
            <div className="relative mx-auto max-w-[440px] overflow-hidden rounded-[28px] border border-line bg-paper shadow-team lg:mx-0">
              {/* Top brand band */}
              <div className="relative h-44 bg-gradient-to-br from-navy via-navy to-deepnavy">
                <div
                  className="absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '22px 22px',
                  }}
                />
                <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
              </div>

              {/* Monogram avatar overlapping the band */}
              <div className="relative -mt-14 flex justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-paper bg-gradient-to-br from-platinum to-mist text-navy shadow-card">
                  <span className="font-serif text-[40px] leading-none">OO</span>
                </div>
              </div>

              {/* Identity */}
              <div className="px-8 pt-5 pb-7 text-center">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-navy/70">
                  Founder &amp; CEO
                </p>
                <h4 className="mt-2 text-charcoal">Oladipo Olakunle-Jinadu</h4>
                <p className="mx-auto mt-3 max-w-[300px] font-sans text-[14px] leading-[1.6] text-charcoal/65">
                  A decade of Nigerian capital-markets and structured-credit experience.
                </p>
              </div>

              {/* Credential rail */}
              <div className="grid grid-cols-3 divide-x divide-line border-t border-line">
                <div className="px-3 py-5 text-center">
                  <p className="font-serif text-[24px] leading-none text-navy">10+</p>
                  <p className="mt-1.5 font-sans text-[10.5px] font-semibold uppercase tracking-[0.16em] text-charcoal/60">
                    Years
                  </p>
                </div>
                <div className="px-3 py-5 text-center">
                  <p className="font-serif text-[24px] leading-none text-navy">3</p>
                  <p className="mt-1.5 font-sans text-[10.5px] font-semibold uppercase tracking-[0.16em] text-charcoal/60">
                    Banks
                  </p>
                </div>
                <div className="px-3 py-5 text-center">
                  <p className="font-serif text-[24px] leading-none text-navy">MBA</p>
                  <p className="mt-1.5 font-sans text-[10.5px] font-semibold uppercase tracking-[0.16em] text-charcoal/60">
                    Int'l Biz
                  </p>
                </div>
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
            <p className="font-sans text-[12.5px] font-semibold text-navy uppercase tracking-[0.22em] mt-4">
              Founder &amp; Chief Executive Officer
            </p>

            <div className="mt-8 max-w-[680px] space-y-5 border-l-2 border-navy/25 pl-6 transition-colors duration-500 hover:border-navy/45">
              <p className="font-sans text-[17.5px] text-charcoal/76 leading-[1.75]">
                Oladipo founded Brahm Finance to bring institutional-grade credit discipline to underserved corners of Nigeria's lending market. With over a decade in financial services, he leads strategy across bridge financing, structured credit, and bespoke working-capital solutions.
              </p>
              <p className="font-sans text-[17.5px] text-charcoal/76 leading-[1.75]">
                His earlier career was built in investment banking — specialising in capital raising and debt restructuring at Chapel Hill Advisory Partners, Greenwich Merchant Bank, and Norrenberger Advisory Partners. He has originated and executed Commercial Papers, Private Notes, and Trade &amp; Structured Finance deals across Financial Services, Infrastructure, FMCG, Agriculture, Healthcare, and Renewable Energy.
              </p>
            </div>

            {/* Education & Certifications */}
            <div className="mt-10 max-w-[680px]">
              <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.24em] text-navy/75">
                Education &amp; credentials
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="group rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:border-navy/30 hover:shadow-card hover:-translate-y-0.5">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
                    MBA, International Business
                  </p>
                  <p className="mt-1.5 font-serif text-[18px] text-charcoal leading-snug">
                    Nexford University
                  </p>
                  <p className="mt-0.5 font-sans text-[13px] text-charcoal/60">Washington, DC</p>
                </div>
                <div className="group rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:border-navy/30 hover:shadow-card hover:-translate-y-0.5">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
                    BSc, Business Economics
                  </p>
                  <p className="mt-1.5 font-serif text-[18px] text-charcoal leading-snug">
                    University of Hull
                  </p>
                  <p className="mt-0.5 font-sans text-[13px] text-charcoal/60">United Kingdom</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Sukuk Structuring', 'Corporate Credit Analysis', 'Corporate Finance'].map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center rounded-full border border-navy/15 bg-navy/[0.04] px-3.5 py-1.5 font-sans text-[12px] font-medium text-navy/85 transition-colors hover:border-navy/35 hover:bg-navy/[0.06]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center mt-9 font-sans text-[14px] font-semibold text-navy hover:text-deepnavy transition-all duration-300"
            >
              Connect on LinkedIn
              <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
