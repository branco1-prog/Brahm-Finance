import { type MouseEvent } from 'react';
import BrandMark from '@/components/BrandMark';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Asset-Backed Loans',
  'Bridge Financing',
  'SME Lending',
  'Structured Finance',
  'Debt Restructuring',
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L20 4h-2l-5.2 6.5L8 4H4z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-deepnavy pt-20 pb-10 text-white">
      <div className="container-brahm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div>
            <BrandMark size="footer" light />
            <p className="font-sans text-[14px] text-white/70 mt-3">Brahm Finance Limited</p>
            <p className="font-sans text-[14px] text-white/55 mt-4 max-w-[280px] leading-[1.65]">
              A private credit and lending firm providing flexible capital to underserved individuals, SMEs, and mid-market businesses across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-sans text-[12px] text-white font-semibold uppercase tracking-[0.22em] mb-5">
              Navigate
            </h6>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group inline-flex items-center font-sans text-[14px] text-white/65 hover:text-white transition-colors duration-250"
                  >
                    <span className="w-0 h-px bg-white/60 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="font-sans text-[12px] text-white font-semibold uppercase tracking-[0.22em] mb-5">
              Capabilities
            </h6>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="group inline-flex items-center font-sans text-[14px] text-white/65 hover:text-white transition-colors duration-250"
                  >
                    <span className="w-0 h-px bg-white/60 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h6 className="font-sans text-[12px] text-white font-semibold uppercase tracking-[0.22em] mb-5">
              Get in Touch
            </h6>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+2347014900307"
                  className="font-sans text-[14px] text-white/65 hover:text-white transition-colors duration-250 hover:underline underline-offset-4"
                >
                  +234 (0) 701 490 0307
                </a>
              </li>
              <li>
                <a
                  href="mailto:brahmfinance@brahm-corp.com"
                  className="font-sans text-[14px] text-white/65 hover:text-white transition-colors duration-250 hover:underline underline-offset-4"
                >
                  brahmfinance@brahm-corp.com
                </a>
              </li>
              <li>
                <span className="font-sans text-[14px] text-white/65 leading-relaxed">
                  Plot 3202 Cadastral Zone F18,<br />Dawaki District, FCT, Abuja
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-2.5 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 hover:border-white/40 hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-250"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/12 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[12px] text-white/50">
            &copy; {new Date().getFullYear()} Brahm Finance Limited. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-sans text-[12px] text-white/50 hover:text-white/80 transition-colors duration-250 hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <span className="text-white/25">·</span>
            <a href="#" className="font-sans text-[12px] text-white/50 hover:text-white/80 transition-colors duration-250 hover:underline underline-offset-4">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
