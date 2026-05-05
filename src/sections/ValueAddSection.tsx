import { useScrollRevealMultiple } from '@/hooks/useScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const valueCards = [
  {
    title: 'Financial Advisory',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="16" r="10" />
        <line x1="20" y1="6" x2="20" y2="16" />
        <line x1="20" y1="16" x2="27" y2="20" />
        <path d="M20 28L16 38H24L20 28Z" />
      </svg>
    ),
    items: ['Capital structuring for SMEs', 'Debt advisory & restructuring', 'Fundraising support'],
  },
  {
    title: 'Credit Risk & Services',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4L6 10V18.5C6 27.5 12 34.5 20 37C28 34.5 34 27.5 34 18.5V10L20 4Z" />
        <polyline points="14 20 18 24 26 16" />
      </svg>
    ),
    items: [
      'Credit scoring & analytics (BVN, bank statement analysis)',
      'Risk advisory for SMEs',
      'Portfolio monitoring & recovery services',
    ],
  },
  {
    title: 'Financial Literacy & Customer Support',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8H28V32H4Z" />
        <path d="M28 12L36 8V28L28 32" />
        <line x1="8" y1="16" x2="20" y2="16" />
        <line x1="8" y1="20" x2="18" y2="20" />
        <line x1="8" y1="24" x2="16" y2="24" />
      </svg>
    ),
    items: ['Borrower education', 'Budgeting and cashflow advisory'],
  },
];

export default function ValueAddSection() {
  const { setRef, visibleItems } = useScrollRevealMultiple(valueCards.length);

  return (
    <section className="bg-paper section-padding">
      <div className="container-brahm">
        <SectionHeading
          title="Beyond Lending"
          subtitle="We provide comprehensive support services that strengthen our clients' financial position and decision-making capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {valueCards.map((card, index) => (
            <div
              key={card.title}
              ref={setRef(index)}
              className={`group relative rounded-lg border border-line bg-cream p-8 shadow-xs transition-all duration-300 hover:border-navy/45 hover:bg-paper hover:shadow-card hover:-translate-y-1 md:p-9 overflow-hidden ${
                visibleItems[index] ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-paper text-navy shadow-xs transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:scale-110 group-hover:shadow-md">
                  {card.icon}
                </div>
                <h5 className="text-charcoal transition-colors duration-300 group-hover:text-navy">
                  {card.title}
                </h5>
                <ul className="mt-6 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 group/item">
                      <span className="w-[6px] h-[6px] rounded-full bg-navy mt-2.5 shrink-0 transition-all duration-300 group-hover/item:scale-125" />
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
      </div>
    </section>
  );
}
