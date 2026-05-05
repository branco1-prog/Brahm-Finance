import { useEffect, useState } from 'react';

const trustMetrics = [
  { value: '10B+', label: 'Naira in credit facilitated' },
  { value: '500+', label: 'Clients served' },
  { value: '15+', label: 'Years combined team experience' },
];

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-paper pt-[76px]">
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Soft radial gradient blob — top right */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #0F3868 0%, transparent 70%)',
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Second blob — bottom left */}
      <div
        className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full opacity-[0.03] blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #0F3868 0%, transparent 70%)',
          transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
          transition: 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Fine dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #0F3868 0.5px, transparent 0.5px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative thin circle — top right, animated */}
      <div
        className="absolute top-[12%] right-[8%] w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-navy/[0.08] pointer-events-none hidden lg:block"
        style={{
          animation: 'spin-slow 60s linear infinite',
        }}
      />
      <div
        className="absolute top-[16%] right-[12%] w-[240px] h-[240px] md:w-[360px] md:h-[360px] rounded-full border border-navy/[0.05] pointer-events-none hidden lg:block"
        style={{
          animation: 'spin-slow 45s linear infinite reverse',
        }}
      />

      {/* Floating dots */}
      <div
        className="absolute top-[25%] right-[18%] w-2 h-2 rounded-full bg-navy/20 pointer-events-none hidden lg:block"
        style={{ animation: 'float-slow 8s ease-in-out infinite' }}
      />
      <div
        className="absolute top-[45%] right-[12%] w-1.5 h-1.5 rounded-full bg-navy/15 pointer-events-none hidden lg:block"
        style={{ animation: 'float-medium 10s ease-in-out infinite 1s' }}
      />
      <div
        className="absolute top-[18%] right-[28%] w-1 h-1 rounded-full bg-navy/25 pointer-events-none hidden lg:block"
        style={{ animation: 'pulse-soft 4s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[30%] right-[22%] w-2 h-2 rounded-full bg-navy/10 pointer-events-none hidden lg:block"
        style={{ animation: 'float-slow 12s ease-in-out infinite 2s' }}
      />

      {/* Decorative horizontal lines */}
      <div className="absolute top-[30%] left-0 w-[8%] h-px bg-gradient-to-r from-navy/10 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute bottom-[25%] right-0 w-[12%] h-px bg-gradient-to-l from-navy/10 to-transparent pointer-events-none hidden md:block" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="container-brahm relative z-10 flex min-h-[calc(100vh-76px)] flex-col justify-center py-20 md:py-24 lg:py-28">
        <div className="max-w-[900px]">
          {/* Eyebrow */}
          <div
            className="opacity-0"
            style={{ animation: 'hero-fade-in 600ms cubic-bezier(0.4, 0, 0.2, 1) 200ms forwards' }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-navy/40" />
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-navy/80">
                Private credit &middot; Structured lending &middot; Advisory
              </p>
            </div>
          </div>

          {/* Headline */}
          <div
            className="opacity-0"
            style={{ animation: 'hero-fade-in 700ms cubic-bezier(0.4, 0, 0.2, 1) 350ms forwards' }}
          >
            <h1 className="text-charcoal leading-[1.02] tracking-tight">
              Flexible Capital
              <br />
              Solutions for
              <br />
              <span className="gradient-text">Nigeria's Growth</span>
            </h1>
          </div>

          {/* Subhead */}
          <div
            className="opacity-0 mt-8 max-w-[560px]"
            style={{ animation: 'hero-fade-in 600ms cubic-bezier(0.4, 0, 0.2, 1) 500ms forwards' }}
          >
            <p className="font-sans text-[17px] md:text-[19px] text-charcoal/65 leading-[1.65]">
              Tailored financing for individuals, SMEs, and mid-market businesses across Nigeria. 
              Licensed, disciplined, and committed to impact.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="opacity-0 mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animation: 'hero-fade-in 600ms cubic-bezier(0.4, 0, 0.2, 1) 620ms forwards' }}
          >
            <button
              onClick={() => scrollTo('services')}
              className="group inline-flex min-h-[52px] items-center justify-center rounded-full bg-navy px-8 py-3.5 font-sans text-[15px] font-semibold text-white shadow-lg shadow-navy/20 transition-all duration-300 hover:bg-deepnavy hover:shadow-xl hover:shadow-navy/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Services
              <svg
                className="ml-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex min-h-[52px] items-center justify-center rounded-full border border-charcoal/15 bg-transparent px-8 py-3.5 font-sans text-[15px] font-semibold text-charcoal transition-all duration-300 hover:border-navy/40 hover:text-navy hover:bg-navy/[0.03] hover:-translate-y-0.5 active:translate-y-0"
            >
              Discuss Financing
              <svg
                className="ml-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Stats row — minimal, clean */}
          <div
            className="opacity-0 mt-16 md:mt-20"
            style={{ animation: 'hero-fade-in 600ms cubic-bezier(0.4, 0, 0.2, 1) 740ms forwards' }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0">
              {trustMetrics.map((metric, index) => (
                <div key={metric.label} className="flex items-center gap-6 sm:gap-0">
                  <div className="sm:px-8 sm:first:pl-0">
                    <p className="font-serif text-[32px] md:text-[40px] leading-none text-navy">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 font-sans text-[12px] md:text-[13px] leading-[1.4] text-charcoal/55 tracking-wide">
                      {metric.label}
                    </p>
                  </div>
                  {index < trustMetrics.length - 1 && (
                    <div className="hidden sm:block w-px h-10 bg-charcoal/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0"
        style={{ animation: 'indicator-fade-in 500ms ease 900ms forwards' }}
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/40">
          Scroll
        </span>
        <div className="relative w-px h-10 bg-charcoal/10 overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full bg-navy/50 rounded-full"
            style={{
              height: '40%',
              animation: 'indicator-scroll 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
