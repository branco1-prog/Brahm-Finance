import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal();

  return (
    <section id="about" className="relative bg-cream section-padding overflow-hidden">
      {/* Soft brand-tinted background blobs */}
      <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-navy/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-24 w-[400px] h-[400px] bg-slatebrand/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-brahm relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <div
              ref={headingRef}
              className={headingVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}
            >
              <span className="mb-5 block h-[2px] w-14 bg-navy" />
              <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.24em] text-navy/75 mb-4">
                About Brahm Finance
              </p>
              <h2 className="text-charcoal">Building a more responsive credit market.</h2>
              <h4 className="text-navy mt-5 font-normal">Licensed. Disciplined. Built for impact.</h4>
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={bodyRef}
            className={`w-full lg:w-1/2 ${bodyVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p className="font-sans text-[16.5px] md:text-[18px] text-charcoal/76 leading-[1.7] md:leading-[1.75] mb-5">
              Brahm Finance is a private credit and lending firm built to close the funding gap that holds back individuals, SMEs, and mid-market businesses across Nigeria. We provide structured, timely capital for working-capital needs, expansion plans, and short-term liquidity.
            </p>
            <p className="font-sans text-[16.5px] md:text-[18px] text-charcoal/76 leading-[1.7] md:leading-[1.75] mb-5">
              Our approach pairs the speed founders actually need with the credit discipline institutions expect. We move quickly, but never carelessly — every facility is structured around real cash flow, real collateral, and a clear path to repayment.
            </p>
            <p className="font-sans text-[16.5px] md:text-[18px] text-charcoal/76 leading-[1.7] md:leading-[1.75]">
              Backed by deep capital-markets experience, we are building a lending platform clients return to — anchored on integrity, executed with rigor, and measured by the impact our capital unlocks.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-9">
              <div className="rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:border-navy/30 hover:shadow-card hover:-translate-y-1">
                <h5 className="text-[17px] font-semibold text-charcoal">Clear financing terms</h5>
                <p className="mt-3 text-[15px] text-charcoal/70 leading-[1.65]">
                  Structured proposals so approval decisions are simple, predictable, and built around your operations.
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:border-navy/30 hover:shadow-card hover:-translate-y-1">
                <h5 className="text-[17px] font-semibold text-charcoal">Rapid, disciplined execution</h5>
                <p className="mt-3 text-[15px] text-charcoal/70 leading-[1.65]">
                  Practical execution backed by a rigorous risk framework — speed without short-cuts.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
