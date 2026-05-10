import { useEffect, useState } from 'react';

const trustMetrics = [
  { value: '₦10B+', label: 'Credit facilitated to date' },
  { value: '500+', label: 'Clients served nationwide' },
  { value: '15+', label: 'Years of combined expertise' },
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

    const handleScroll = () => setScrollY(window.scrollY);

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

  const scrollIndicatorHidden = scrollY > 80;

  return (
    <section className="relative min-h-screen overflow-hidden bg-darkbg pt-[76px]" id="home">
      {/* Soft brand gradient wash */}
      <div className="absolute inset-0 bg-mesh-dark opacity-90 pointer-events-none" aria-hidden="true" />

      {/* Subtle purple glow — top right */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full opacity-30 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(138,43,226,0.15) 0%, transparent 70%)',
          transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
          transition: 'transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        aria-hidden="true"
      />

      {/* Cyan glow — bottom left */}
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full opacity-30 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)',
          transform: `translate(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px)`,
          transition: 'transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        aria-hidden="true"
      />

      {/* Refined dot grid with vertical fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 0.75px, transparent 0.75px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.05) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.05) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Hairline horizontal accents */}
      <div className="absolute top-[28%] left-0 w-[12%] h-px bg-gradient-to-r from-accentblue/30 via-accentblue/10 to-transparent pointer-events-none hidden md:block" aria-hidden="true" />
      <div className="absolute bottom-[22%] right-0 w-[15%] h-px bg-gradient-to-l from-accentpurple/30 via-accentpurple/10 to-transparent pointer-events-none hidden md:block" aria-hidden="true" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="container-brahm relative z-10 flex min-h-[calc(100vh-76px)] flex-col justify-center py-16 md:py-24 lg:py-28">
        <div className="max-w-[920px] pt-6 md:pt-0">

          {/* Eyebrow chip */}
          <div
            className="opacity-0"
            style={{ animation: 'hero-fade-in 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms forwards' }}
          >
            <div className="mb-8 md:mb-9 inline-flex items-center gap-2.5 rounded-full border border-accentblue/30 glass-panel px-3.5 py-1.5 md:px-4 md:py-2 shadow-glow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accentblue/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accentblue shadow-[0_0_8px_#00E5FF]" />
              </span>
              <p className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] md:tracking-[0.28em] text-accentblue">
                <span className="hidden sm:inline">Private Credit · Structured Lending · Advisory</span>
                <span className="sm:hidden">Private Credit · Advisory</span>
              </p>
            </div>
          </div>

          {/* Headline */}
          <div
            className="opacity-0"
            style={{ animation: 'hero-fade-in 800ms cubic-bezier(0.16, 1, 0.3, 1) 380ms forwards' }}
          >
            <h1 className="text-textmain leading-[1.02] tracking-tight font-bold">
              Capital that moves
              <br />
              at the pace of
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentblue to-accentpurple">Nigerian business.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div
            className="opacity-0 mt-7 max-w-[620px]"
            style={{ animation: 'hero-fade-in 700ms cubic-bezier(0.16, 1, 0.3, 1) 560ms forwards' }}
          >
            <p className="font-sans text-[17px] md:text-[19px] text-textmuted leading-[1.7]">
              Brahm Finance delivers structured credit, bridge financing, and advisory to individuals, SMEs, and mid-market businesses — combining institutional discipline with the speed real opportunities demand.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="opacity-0 mt-10 md:mt-11 flex flex-col gap-3 sm:flex-row sm:items-start"
            style={{ animation: 'hero-fade-in 700ms cubic-bezier(0.16, 1, 0.3, 1) 720ms forwards' }}
          >
            <button
              onClick={() => scrollTo('services')}
              className="group inline-flex w-full sm:w-auto min-h-[54px] sm:min-h-[56px] items-center justify-center rounded-full bg-accentblue px-7 sm:px-8 py-3.5 font-sans text-[15px] font-bold text-darkbg shadow-glow transition-all duration-300 hover:bg-accentpurple hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(138,43,226,0.6)] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-accentblue focus-visible:ring-offset-2 focus-visible:ring-offset-darkbg"
            >
              Explore Services
              <svg
                className="ml-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex w-full sm:w-auto min-h-[54px] sm:min-h-[56px] items-center justify-center rounded-full border border-accentblue/30 glass-panel px-7 sm:px-8 py-3.5 font-sans text-[15px] font-bold text-textmain transition-all duration-300 hover:border-accentblue/60 hover:bg-darksurface active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accentblue focus-visible:ring-offset-2 focus-visible:ring-offset-darkbg"
            >
              Discuss Financing
              <svg
                className="ml-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Stats row */}
          <div
            className="opacity-0 mt-14 md:mt-24"
            style={{ animation: 'hero-fade-in 700ms cubic-bezier(0.16, 1, 0.3, 1) 900ms forwards' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-darkborder border-y border-darkborder glass-panel">
              {trustMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="px-1 py-5 sm:px-8 sm:py-7 hover:bg-darksurface/50 transition-colors duration-300"
                  style={{
                    animation: `hero-fade-in 600ms cubic-bezier(0.16, 1, 0.3, 1) ${1050 + index * 130}ms forwards`,
                    opacity: 0,
                  }}
                >
                  <p className="font-serif font-bold text-[36px] md:text-[48px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-accentblue to-accentpurple">
                    {metric.value}
                  </p>
                  <p className="mt-2.5 font-sans text-[11.5px] md:text-[12.5px] uppercase tracking-[0.16em] md:tracking-[0.18em] text-textmuted font-medium">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-0 transition-opacity duration-500 z-20"
        style={{
          animation: 'indicator-fade-in 500ms ease 1500ms forwards',
          opacity: scrollIndicatorHidden ? 0 : undefined,
        }}
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-textmuted font-bold">
          Scroll to explore
        </span>
        <div className="relative w-px h-14 bg-darkborder overflow-hidden rounded-full shadow-[0_0_10px_rgba(0,229,255,0.2)]">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-accentblue to-transparent"
            style={{
              height: '45%',
              animation: 'indicator-scroll 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
