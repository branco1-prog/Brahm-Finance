import { useScrollReveal, useScrollRevealMultiple } from '@/hooks/useScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const coreProducts = [
  {
    number: '01',
    title: 'Retail / Consumer Credit',
    items: [
      'Asset-backed consumer loans (vehicles, electronics)',
      'Buy-now-pay-later (BNPL) structures',
    ],
  },
  {
    number: '02',
    title: 'SME / MSME Lending',
    items: [
      'Working capital loans (inventory financing, trade cycles)',
      'Invoice discounting / receivables financing',
      'Contract financing (government contractors)',
      'Equipment / asset finance (leasing structures)',
      'Cluster/group lending (market women, cooperatives)',
    ],
  },
  {
    number: '03',
    title: 'Secured & Structured Credit',
    subtitle: '(Private Credit Focus)',
    items: [
      'Collateralised loans (real estate, treasury assets, shares)',
      'Bridge financing',
      'Project-based lending (real estate, infrastructure-lite)',
      'Debt restructuring & refinancing solutions',
    ],
  },
];

const specialized = [
  {
    title: 'Corporate & Institutional Lending',
    items: [
      'Short-term corporate loans (3\u201312 months)',
      'Commercial paper participation',
      'Syndicated lending (co-lending)',
      'Off-balance-sheet financing structures',
    ],
  },
  {
    title: 'Public Sector & Government Linked',
    items: [
      'State/agency contractor financing',
      'IGR-backed financing structures',
    ],
  },
  {
    title: 'Niche Lending',
    items: [
      'Agriculture value-chain financing',
      'Healthcare financing (HMO receivables, equipment)',
      'Education financing (school fees, institutional)',
      'Renewable energy / solar asset financing',
    ],
  },
];

export default function ProductsSection() {
  const { setRef: setProductRef, visibleItems: productVisible } = useScrollRevealMultiple(coreProducts.length);
  const { setRef: setSpecRef, visibleItems: specVisible } = useScrollRevealMultiple(specialized.length);
  const { ref: specHeadingRef, isVisible: specHeadingVisible } = useScrollReveal();

  return (
    <section id="products" className="bg-cream section-padding">
      <div className="container-brahm">
        <SectionHeading
          title="Core Lending Products"
          subtitle="We offer a comprehensive suite of lending products designed to meet diverse financing needs across the Nigerian market."
        />

        {/* Core Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreProducts.map((product, index) => (
            <div
              key={product.number}
              ref={setProductRef(index)}
              className={`group relative rounded-lg border border-line bg-paper p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-card md:p-10 overflow-hidden ${
                productVisible[index] ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative">
                <div className="mb-7 h-[3px] w-16 bg-navy transition-all duration-500 group-hover:w-20" />
                <span className="font-serif text-[48px] text-navy/20 transition-colors duration-500 group-hover:text-navy/35">
                  {product.number}
                </span>
                <h4 className="text-charcoal mt-3 transition-colors duration-300 group-hover:text-navy">
                  {product.title}
                </h4>
                {product.subtitle && (
                  <p className="font-sans text-[14px] italic text-charcoal/60 mt-1">{product.subtitle}</p>
                )}
                <ul className="mt-6 space-y-3">
                  {product.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 group/item">
                      <span className="w-[6px] h-[6px] rounded-full bg-navy mt-2.5 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-deepnavy" />
                      <span className="font-sans text-[16px] text-charcoal/76 transition-colors duration-300 group-hover/item:text-charcoal">
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
          className={`mt-20 ${specHeadingVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <h3 className="text-charcoal text-center mb-12">Specialized Credit Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialized.map((spec, index) => (
            <div
              key={spec.title}
              ref={setSpecRef(index)}
              className={`group relative rounded-lg border border-line bg-paper p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-navy/30 md:p-9 overflow-hidden ${
                specVisible[index] ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative">
                <h5 className="text-charcoal transition-colors duration-300 group-hover:text-navy">
                  {spec.title}
                </h5>
                <ul className="mt-6 space-y-3">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 group/item">
                      <span className="w-[6px] h-[6px] rounded-full bg-navy mt-2.5 shrink-0 transition-all duration-300 group-hover/item:scale-125" />
                      <span className="font-sans text-[14px] text-charcoal/76 transition-colors duration-300 group-hover/item:text-charcoal">
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
