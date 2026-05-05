import { useScrollReveal } from '@/hooks/useScrollReveal';
import StatCounter from '@/components/StatCounter';

export default function AboutSection() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal();

  return (
    <section id="about" className="bg-cream section-padding">
      <div className="container-brahm">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <div
              ref={headingRef}
              className={headingVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}
            >
              <span className="mb-5 block h-[2px] w-16 bg-navy" />
              <h2 className="text-charcoal">Building Trust with Our Services</h2>
              <h4 className="text-navy mt-4">Licensed. Disciplined. Committed to Impact.</h4>
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={bodyRef}
            className={`w-full lg:w-1/2 ${bodyVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p className="font-sans text-[18px] text-charcoal/78 leading-[1.75] mb-5">
              Brahm Finance Limited is a private credit and lending firm focused on providing flexible capital solutions to underserved individuals, SMEs, and mid-market businesses in Nigeria. Established to bridge the persistent funding gap, we provide timely, flexible, and structured credit solutions that support business growth, working capital needs, and short-term liquidity requirements.
            </p>
            <p className="font-sans text-[18px] text-charcoal/78 leading-[1.75] mb-5">
              Our approach combines speed of execution with disciplined risk assessment, enabling us to provide efficient access to capital while maintaining strong credit quality. We partner closely with our clients, offering not just funding, but strategic insight that helps them navigate financial challenges and unlock value.
            </p>
            <p className="font-sans text-[18px] text-charcoal/78 leading-[1.75]">
              Driven by deep capital markets expertise and a strong understanding of Nigeria's financial landscape, we are committed to building a trusted lending platform anchored on integrity, innovation, and impact.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className={`mt-14 flex flex-col md:flex-row items-stretch border-y border-line bg-paper/55 py-10 ${
            statsVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
          }`}
        >
          <div className="flex-1 px-4">
            <StatCounter target={10} suffix="B+" label="Naira in Credit Facilitated" isVisible={statsVisible} />
          </div>
          <div className="hidden md:block w-px bg-line self-stretch" />
          <div className="flex-1 px-4 py-8 md:py-0">
            <StatCounter target={500} suffix="+" label="Clients Served" isVisible={statsVisible} />
          </div>
          <div className="hidden md:block w-px bg-line self-stretch" />
          <div className="flex-1 px-4">
            <StatCounter target={15} suffix="+" label="Years Combined Team Experience" isVisible={statsVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}
