import { useScrollReveal, useScrollRevealMultiple } from '@/hooks/useScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const coreProducts = [
  {
    number: '01',
    title: 'Retail & Consumer Credit',
    items: [
      'Asset-backed consumer loans (vehicles, electronics)',
      'Buy-now-pay-later (BNPL) structures',
    ],
  },
  {
    number: '02',
    title: 'SME & MSME Lending',
    items: [
      'Working capital loans (inventory, trade cycles)',
      'Invoice discounting & receivables financing',
      'Contract financing for government contractors',
      'Equipment & asset finance via leasing',
      'Cluster lending for cooperatives and market traders',
    ],
  },
  {
    number: '03',
    title: 'Secured & Structured Credit',
    subtitle: 'Private credit focus',
    items: [
      'Collateralised loans (real estate, treasury, shares)',
      'Bridge financing',
      'Project-based lending (real estate, infrastructure)',
      'Debt restructuring & refinancing solutions',
    ],
  },
];

const specialized = [
  {
    title: 'Corporate & Institutional',
    items: [
      'Short-term corporate loans (3–12 months)',
      'Commercial paper participation',
      'Syndicated co-lending arrangements',
      'Off-balance-sheet financing structures',
    ],
  },
  {
    title: 'Public Sector & Government',
    items: [
      'State and agency contractor financing',
      'IGR-backed financing structures',
    ],
  },
  {
    title: 'Sector-Specific',
    items: [
      'Agriculture value-chain financing',
      'Healthcare (HMO receivables, equipment)',
      'Education (school fees, institutional)',
      'Renewable energy & solar asset financing',
    ],
  },
];

export default function ProductsSection() {
  const { setRef: setProductRef, visibleItems: productVisible } = useScrollRevealMultiple(coreProducts.length);
  const { setRef: setSpecRef, visibleItems: specVisible } = useScrollRevealMultiple(specialized.length);
  const { ref: specHeadingRef, isVisible: specHeadingVisible } = useScrollReveal();

  return (
    <section id="products" className="bg-cream section-padding relative overflow-hidden">
      {/* Soft accent washes */}
      <div className="absolute top-[20%] -left-20 w-[40vw] h-[40vw] bg-navy/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-20 w-[35vw] h-[35vw] bg-slatebrand/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-brahm relative z-10">
        <SectionHeading
          title="Core lending products"
          subtitle="A comprehensive suite of credit products designed around how Nigerian businesses actually operate."
        />

        {/* Core Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {coreProducts.map((product, index) => (
            <div
              key={product.number}
              ref={setProductRef(index)}
              className={`group relative rounded-2xl border border-line bg-paper p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-navy/40 hover:shadow-card overflow-hidden ${
                productVisible[index] ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-7 h-[3px] w-12 bg-navy rounded-full transition-all duration-500 group-hover:w-16" />
                <span className="font-serif text-[52px] leading-none text-navy/15 transition-colors duration-500 group-hover:text-navy/30">
                  {product.number}
                </span>
                <h4 className="text-charcoal mt-2 transition-colors duration-300 group-hover:text-navy">
                  {product.title}
                </h4>
                {product.subtitle && (
                  <p className="font-sans text-[13px] uppercase tracking-[0.18em] text-charcoal/55 mt-2 font-medium">{product.subtitle}</p>
                )}
                <ul className="mt-6 space-y-3">
                  {product.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 group/item">
                      <span className="w-[6px] h-[6px] rounded-full bg-navy mt-2.5 shrink-0 transition-all duration-300 group-hover/item:scale-125" />
                      <span className="font-sans text-[15.5px] text-charcoal/74 leading-[1.55] transition-colors duration-300 group-hover/item:text-charcoal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Solutions */}
        <div
          ref={specHeadingRef}
          className={`mt-24 ${specHeadingVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <h3 className="text-charcoal text-center mb-3">Specialized credit solutions</h3>
          <p className="font-sans text-[16px] text-charcoal/65 text-center max-w-[560px] mx-auto leading-[1.65] mb-12">
            Sector-aware structures for institutions, the public sector, and high-impact verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {specialized.map((spec, index) => (
            <div
              key={spec.title}
              ref={setSpecRef(index)}
              className={`group rounded-2xl border border-line bg-paper p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy/40 hover:shadow-card overflow-hidden ${
                specVisible[index] ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <h5 className="text-charcoal font-semibold text-[17px] transition-colors duration-300 group-hover:text-navy">
                  {spec.title}
                </h5>
                <ul className="mt-5 space-y-2.5">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 group/item">
                      <span className="w-[5px] h-[5px] rounded-full bg-navy/70 mt-2.5 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-navy" />
                      <span className="font-sans text-[14.5px] text-charcoal/74 leading-[1.55] transition-colors duration-300 group-hover/item:text-charcoal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
