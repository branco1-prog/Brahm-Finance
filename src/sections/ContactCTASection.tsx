import { useScrollReveal, useScrollRevealMultiple } from '@/hooks/useScrollReveal';

const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+234 (0) 701 490 0307',
    href: 'tel:+2347014900307',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
    label: 'Email Us',
    value: 'brahmfinance@brahm-corp.com',
    href: 'mailto:brahmfinance@brahm-corp.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Visit Us',
    value: 'Plot 3202 Cadastral Zone F18, Dawaki District, FCT, Abuja',
    href: '#',
  },
];

export default function ContactCTASection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { setRef, visibleItems } = useScrollRevealMultiple(contactDetails.length);

  return (
    <section id="contact" className="relative overflow-hidden bg-navy section-padding">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_42%)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      
      <div className="container-brahm relative">
        <div
          ref={headingRef}
          className={`relative text-center ${headingVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <h2 className="text-white max-w-[800px] mx-auto">
            Let's Discuss Your Financing Needs
          </h2>
          <p className="font-sans text-[18px] text-white/90 max-w-[560px] mx-auto mt-6">
            Whether you're an individual, SME, or institutional client, we're ready to craft a financing solution that works for you.
          </p>
          <a
            href="#footer"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('footer');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 76;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="group inline-flex min-h-12 items-center justify-center rounded-md bg-white px-10 py-4 font-sans text-[16px] font-semibold text-navy shadow-brand transition-all duration-250 hover:bg-mist hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 mt-8"
          >
            Get in Touch
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-250 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>

        {/* Contact Details */}
        <div className="relative mt-16 grid grid-cols-1 gap-5 border-t border-white/25 pt-12 md:grid-cols-3">
          {contactDetails.map((detail, index) => (
            <div
              key={detail.label}
              ref={setRef(index)}
              className={`group rounded-lg border border-white/16 bg-white/7 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/12 hover:border-white/30 hover:-translate-y-1 hover:shadow-lg ${visibleItems[index] ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-3 text-white transition-transform duration-300 group-hover:scale-110">
                {detail.icon}
              </div>
              <p className="font-sans text-[12px] text-white/70 uppercase tracking-[1px]">{detail.label}</p>
              {detail.href !== '#' ? (
                <a
                  href={detail.href}
                  className="font-sans text-[16px] text-white mt-1 inline-block hover:underline underline-offset-4 transition-colors duration-250"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="font-sans text-[16px] text-white mt-1">{detail.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
