import { useState, useEffect, useCallback, useRef, type MouseEvent } from 'react';
import BrandMark from '@/components/BrandMark';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navContainerRef = useRef<HTMLDivElement>(null);
  const navLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-76px 0px -40% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth sliding indicator
  useEffect(() => {
    const activeIndex = navLinks.findIndex((link) => link.href.slice(1) === activeSection);
    const activeLink = navLinkRefs.current[activeIndex];
    const container = navContainerRef.current;

    if (activeLink && container) {
      const containerRect = container.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setIndicatorStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  const handleNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMenuOpen(false);
      const el = document.querySelector(href);
      if (el) {
        const offset = 76;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[76px] transition-all duration-300 ${
          scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line shadow-sm' : 'bg-paper/70 backdrop-blur-sm'
        }`}
        style={{ animation: 'nav-slide-down 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards' }}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-navy transition-[width] duration-150 ease-out z-[60]"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container-brahm h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="leading-none focus-visible:rounded-md transition-transform hover:scale-[1.02] duration-300"
            aria-label="Brahm Finance home"
          >
            <BrandMark />
          </a>

          {/* Desktop Nav */}
          <div ref={navContainerRef} className="hidden lg:flex items-center gap-1 relative">
            {/* Sliding active indicator */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[36px] rounded-full bg-navy/[0.06] pointer-events-none transition-all duration-300"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />

            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  ref={(el) => { navLinkRefs.current[index] = el; }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group relative font-sans text-[14px] px-4 py-2 rounded-full transition-colors duration-300 ${
                    isActive
                      ? 'font-semibold text-navy'
                      : 'font-medium text-charcoal/70 hover:text-navy'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-navy transition-all duration-300 ${
                      isActive ? 'w-5 opacity-100' : 'w-0 opacity-0 group-hover:w-3 group-hover:opacity-60'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden lg:inline-flex items-center rounded-full bg-navy text-white font-sans text-[14px] font-semibold px-6 py-2.5 shadow-sm shadow-navy/20 hover:bg-deepnavy hover:shadow-lg hover:shadow-navy/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in Touch
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex w-10 h-10 flex-col items-center justify-center gap-[5px] rounded-full border border-line bg-paper cursor-pointer hover:bg-mist transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-[2px] w-5 bg-navy transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-navy transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-navy transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-[76px] left-0 right-0 bg-paper/98 backdrop-blur-lg border-b border-line overflow-hidden shadow-card transition-all duration-400 ${
            isMenuOpen ? 'max-h-[440px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container-brahm py-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-[16px] py-3 px-4 rounded-xl transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-navy font-semibold bg-navy/[0.06]'
                    : 'text-charcoal hover:text-navy hover:bg-navy/[0.04]'
                }`}
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: `all 300ms ease ${i * 50}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="rounded-full bg-navy text-white font-sans text-[15px] font-semibold px-5 py-3.5 text-center hover:bg-deepnavy transition-colors duration-250 mt-3"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transition: `opacity 300ms ease ${navLinks.length * 50}ms`,
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 top-[76px] bg-deepnavy/30 backdrop-blur-sm z-[-1] transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </>
  );
}
