import { useScrollRevealMultiple } from '@/hooks/useScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const services = [
  {
    title: 'Asset-Backed Loans',
    description: 'Real-estate and vehicle-backed financing with competitive terms and structured repayment.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40V20L24 8L40 20V40H8Z" />
        <path d="M18 40V28H30V40" />
        <circle cx="36" cy="14" r="6" fill="none" />
        <path d="M34 14L35.5 15.5L38.5 12.5" />
      </svg>
    ),
  },
  {
    title: 'Capital Structuring',
    description: 'Tailored capital architecture for SMEs — designed around real cash flow and operational realities.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="24" r="4" />
        <circle cx="36" cy="12" r="4" />
        <circle cx="36" cy="36" r="4" />
        <circle cx="24" cy="24" r="4" />
        <line x1="16" y1="24" x2="20" y2="24" />
        <line x1="27.5" y1="21" x2="33" y2="14" />
        <line x1="27.5" y1="27" x2="33" y2="34" />
      </svg>
    ),
  },
  {
    title: 'Bridge Financing',
    description: 'Short-term capital to span the gap between transactions and keep momentum on critical projects.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 36H12L20 24H28L36 36H44" />
        <path d="M4 36V32" />
        <path d="M44 36V32" />
        <path d="M8 20C8 20 14 12 24 12C34 12 40 20 40 20" />
      </svg>
    ),
  },
  {
    title: 'Structured Finance',
    description: 'Bespoke financial arrangements built around unique funding requirements and risk profiles.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="32" width="32" height="6" />
        <rect x="12" y="22" width="24" height="6" />
        <rect x="16" y="12" width="16" height="6" />
        <rect x="20" y="4" width="8" height="4" />
      </svg>
    ),
  },
  {
    title: 'Debt Restructuring',
    description: 'Refinancing strategies that improve cash flow, ease covenants, and reduce debt servicing burden.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M36 12C36 12 42 18 42 24C42 30 36 36 36 36" />
        <path d="M12 36C12 36 6 30 6 24C6 18 12 12 12 12" />
        <polyline points="30 6 36 12 30 18" />
        <polyline points="18 42 12 36 18 30" />
      </svg>
    ),
  },
  {
    title: 'Syndicated Lending',
    description: 'Coordinated co-lending arrangements that combine capital from multiple funding partners.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="10" r="4" />
        <circle cx="10" cy="30" r="4" />
        <circle cx="38" cy="30" r="4" />
        <line x1="21" y1="14" x2="13" y2="26" />
        <line x1="27" y1="14" x2="35" y2="26" />
        <line x1="14" y1="30" x2="34" y2="30" />
      </svg>
    ),
  },
  {
    title: 'Off-Balance-Sheet Financing',
    description: 'Innovative structures that preserve balance sheet health while unlocking liquidity.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="32" height="38" rx="1" />
        <path d="M38 10L42 6V44L38 40" />
        <line x1="12" y1="16" x2="28" y2="16" />
        <line x1="12" y1="22" x2="24" y2="22" />
        <polyline points="12 32 18 26 24 30 30 24" />
      </svg>
    ),
  },
  {
    title: 'Investment & Treasury',
    description: 'Competitive returns and profit-share structures for institutional and accredited funding partners.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="28" width="6" height="14" />
        <rect x="16" y="20" width="6" height="22" />
        <rect x="26" y="24" width="6" height="18" />
        <rect x="36" y="12" width="6" height="30" />
        <polyline points="8 20 18 10 28 16 38 6" />
      </svg>
    ),
  },
  {
    title: 'Transaction Advisory',
    description: 'Hands-on guidance through financial transactions, from due diligence to deal structuring.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="12" />
        <line x1="24" y1="8" x2="24" y2="20" />
        <line x1="24" y1="20" x2="32" y2="24" />
        <path d="M24 36L20 44H28L24 36Z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const { setRef, visibleItems } = useScrollRevealMultiple(services.length);

  return (
    <section id="services" className="bg-paper section-padding relative">
      <div className="container-brahm relative z-10">
        <SectionHeading
          title="What we offer"
          subtitle="A focused suite of credit, structuring, and advisory services for individuals, private firms, and institutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={setRef(index)}
              className={`group relative rounded-2xl border border-line bg-paper p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy/40 hover:shadow-card overflow-hidden ${
                visibleItems[index] ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-mist text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:scale-105">
                    {service.icon}
                  </div>
                  <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-charcoal/40 transition-colors duration-300 group-hover:text-navy">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h5 className="font-sans text-[18px] font-semibold text-charcoal transition-colors duration-300 group-hover:text-navy">
                  {service.title}
                </h5>
                <p className="font-sans text-[14.5px] text-charcoal/65 mt-3 leading-[1.65]">
                  {service.description}
                </p>

                <div className="mt-6 h-[2px] w-0 bg-navy/40 rounded-full transition-all duration-500 group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
