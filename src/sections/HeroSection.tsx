import { useEffect, useState } from 'react';

const trustMetrics = [
  { value: '10B+', label: 'Naira in credit facilitated' },
  { value: '500+', label: 'Clients served' },
  { value: '15+', label: 'Years combined team experience' },
];

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
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
      {/* ===== ENHANCED BACKGROUND LAYERS ===== */}

      {/* Primary animated gradient blob — top right */}
      <div
        className="absolute -top-[15%] -right-[5%] w-[70vw] h-[70vw] rounded-full opacity-[0.06] blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #0F3868 0%, #0A223C 50%, transparent 100%)',
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) scale(${1 + scrollY * 0.0001})`,
          transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Secondary blob — bottom left with counter animation */}
      <div
        className="absolute -bottom-[5%] -left-[10%] w-[60vw] h-[60vw] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #0F3868 0%, transparent 70%)',
          transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
          transition: 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Accent glow — center area */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full opacity-[0.03] blur-[160px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #0A223C 0%, transparent 80%)',
          transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
          transition: 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Enhanced dot grid pattern with depth */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #0F3868 0.75px, transparent 0.75px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle secondary grid for depth */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #0F3868 0.5px, transparent 0.5px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '20px 20px',
        }}
      />

      {/* Primary animated circle — top right */}
      <div
        className="absolute top-[8%] right-[5%] w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full border border-navy/[0.12] pointer-events-none hidden lg:block"
        style={{
          animation: 'spin-slow 70s linear infinite',
          boxShadow: 'inset 0 0 60px rgba(15, 56, 104, 0.05)',
        }}
      />

      {/* Secondary rotating circle — concentric */}
      <div
        className="absolute top-[12%] right-[9%] w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-navy/[0.08] pointer-events-none hidden lg:block"
        style={{
          animation: 'spin-slow 50s linear infinite reverse',
        }}
      />

      {/* Tertiary accent circle */}
      <div
        className="absolute top-[16%] right-[13%] w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border border-navy/[0.06] pointer-events-none hidden lg:block"
        style={{
          animation: 'spin-slow 35s linear infinite',
        }}
      />

      {/* Floating accent dots with enhanced animations */}
      <div
        className="absolute top-[22%] right-[15%] w-3 h-3 rounded-full bg-navy/25 pointer-events-none hidden lg:block shadow-lg"
        style={{
          animation: 'float-slow 8s ease-in-out infinite',
          boxShadow: '0 0 30px rgba(15, 56, 104, 0.2)',
        }}
      />
      <div
        className="absolute top-[48%] right-[8%] w-2 h-2 rounded-full bg-navy/20 pointer-events-none hidden lg:block"
        style={{ animation: 'float-medium 12s ease-in-out infinite 1.5s' }}
      />
      <div
        className="absolute top-[15%] right-[26%] w-1.5 h-1.5 rounded-full bg-navy/30 pointer-events-none hidden lg:block"
        style={{ animation: 'pulse-soft 5s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[28%] right-[20%] w-2.5 h-2.5 rounded-full bg-navy/15 pointer-events-none hidden lg:block"
        style={{ animation: 'float-slow 14s ease-in-out infinite 2.5s' }}
      />

      {/* Decorative lines with enhanced styling */}
      <div className="absolute top-[28%] left-0 w-[12%] h-px bg-gradient-to-r from-navy/20 via-navy/10 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute bottom-[22%] right-0 w-[15%] h-px bg-gradient-to-l from-navy/20 via-navy/10 to-transparent pointer-events-none hidden md:block" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="container-brahm relative z-10 flex min-h-[calc(100vh-76px)] flex-col justify-center py-20 md:py-24 lg:py-32">
        <div className="max-w-[920px]">
          {/* Eyebrow with enhanced styling */}
          <div
            className="opacity-0"
            style={{ animation: 'hero-fade-in 600ms cubic-bezier(0.4, 0, 0.2, 1) 200ms forwards' }}
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-12 bg-gradient-to-r from-navy/50 to-navy/20" />
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-navy/85">
                Private credit &middot; Structured lending &middot; Advisory
              </p>
            </div>
          </div>

          {/* Enhanced Headline */}
          <div
            className="opacity-0"
            style={{ animation: 'hero-fade-in 700ms cubic-bezier(0.4, 0, 0.2, 1) 350ms forwards' }}
          >
            <h1 className="text-charcoal leading-[1.0] tracking-tight">
              Flexible Capital
              <br />
              Solutions for
              <br />
              <span className="gradient-text">Nigeria's Growth</span>
            </h1>
          </div>

          {/* Enhanced Subheadline */}
          <div
            className="opacity-0 mt-8 max-w-[620px]"
            style={{ animation: 'hero-fade-in 600ms cubic-bezier(0.4, 0, 0.2, 1) 500ms forwards' }}
          >
            <p className="font-sans text-[17px] md:text-[19px] text-charcoal/70 leading-[1.72]">
              Tailored financing for individuals, SMEs, and mid-market businesses across Nigeria. 
              <span className="font-semibold text-charcoal"> Licensed, disciplined, and committed to impact.</span>
            </p>
          </div>

          {/* Enhanced CTAs with improved interactions */}
          <div
            className="opacity-0 mt-12 flex flex-col gap-4 sm:flex-row"
            style={{ animation: 'hero-fade-in 600ms cubic-bezier(0.4, 0, 0.2, 1) 620ms forwards' }}
          >
            <button
              onClick={() => scrollTo('services')}
              className="group inline-flex min-h-[56px] items-center justify-center rounded-full bg-navy px-8 py-3.5 font-sans text-[15px] font-semibold text-white shadow-xl shadow-navy/25 transition-all duration-300 hover:shadow-2xl hover:shadow-navy/35 hover:-translate-y-1 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-navy/60 focus-visible:ring-offset-2"
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
              className="group inline-flex min-h-[56px] items-center justify-center rounded-full border-2 border-charcoal/20 bg-white/50 backdrop-blur-sm px-8 py-3.5 font-sans text-[15px] font-semibold text-charcoal transition-all duration-300 hover:border-navy/50 hover:bg-navy/5 active:scale-95 focus-visible:ring-2 focus-visible:ring-navy/60 focus-visible:ring-offset-2"
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

          {/* Enhanced Stats row — with visual hierarchy */}
          <div
            className="opacity-0 mt-20 md:mt-24"
            style={{ animation: 'hero-fade-in 600ms cubic-bezier(0.4, 0, 0.2, 1) 740ms forwards' }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0">
              {trustMetrics.map((metric, index) => (
                <div key={metric.label} className="flex items-center gap-8 sm:gap-0 group">
                  <div className="sm:px-10 sm:first:pl-0 transition-transform duration-300 group-hover:scale-105">
                    <p className="font-serif text-[42px] md:text-[52px] leading-none text-navy font-normal">
                      {metric.value}
                    </p>
                    <p className="mt-2 font-sans text-[12px] md:text-[13px] leading-[1.5] text-charcoal/60 tracking-wide font-medium">
                      {metric.label}
                    </p>
                  </div>
                  {index < trustMetrics.length - 1 && (
                    <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-charcoal/20 via-charcoal/10 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== ENHANCED SCROLL INDICATOR ===== */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
        style={{ animation: 'indicator-fade-in 500ms ease 900ms forwards' }}
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/50 font-semibold">
          Scroll to explore
        </span>
        <div className="relative w-px h-12 bg-gradient-to-b from-charcoal/20 to-transparent overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-navy/60 to-navy/20 rounded-full"
            style={{
              height: '35%',
              animation: 'indicator-scroll 2.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}