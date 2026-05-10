import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'center' | 'left';
}

export default function SectionHeading({ title, subtitle, light = false, align = 'center' }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${align === 'center' ? 'text-center' : 'text-left'} mb-14 md:mb-16 ${
        isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
      }`}
    >
      <span
        className={`mb-5 inline-block h-[2px] transition-all duration-500 ${
          isVisible ? 'w-14' : 'w-0'
        } ${light ? 'bg-white/60' : 'bg-navy'} ${align === 'center' ? 'mx-auto' : ''}`}
      />
      <h2 className={`font-serif ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-[16px] md:text-[17.5px] mt-5 max-w-[620px] leading-[1.7] ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/80' : 'text-charcoal/68'} ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          style={{
            transitionDelay: '150ms',
            transition: 'opacity 500ms ease 150ms, transform 500ms ease 150ms',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
