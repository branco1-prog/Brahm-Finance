import { cn } from '@/lib/utils';

interface BrandMarkProps {
  size?: 'nav' | 'hero' | 'footer';
  light?: boolean;
  className?: string;
}

const sizeClasses = {
  nav: {
    wrap: 'px-3 pt-1.5 pb-1',
    name: 'text-[23px] leading-none tracking-[0.08em]',
    finance: 'text-[9px] leading-none tracking-[0.18em] mt-0.5 ml-[52%]',
    corner: 'h-3',
  },
  hero: {
    wrap: 'px-5 pt-4 pb-3',
    name: 'text-[48px] md:text-[68px] leading-none tracking-[0.06em]',
    finance: 'text-[18px] md:text-[24px] leading-none tracking-[0.14em] mt-2 ml-[48%]',
    corner: 'h-6',
  },
  footer: {
    wrap: 'px-4 pt-3 pb-2',
    name: 'text-[34px] leading-none tracking-[0.07em]',
    finance: 'text-[12px] leading-none tracking-[0.16em] mt-1 ml-[48%]',
    corner: 'h-4',
  },
};

export default function BrandMark({ size = 'nav', light = false, className }: BrandMarkProps) {
  const classes = sizeClasses[size];
  const textClass = light ? 'text-white' : 'text-deepnavy';
  const financeClass = light ? 'text-white/75' : 'text-graphite';
  const frameClass = light ? 'border-white/55' : 'border-graphite/80';

  return (
    <span className={cn('relative inline-block', classes.wrap, className)}>
      <span
        aria-hidden="true"
        className={cn('absolute left-0 top-0 w-[36%] border-l-2 border-t-2', classes.corner, frameClass)}
      />
      <span
        aria-hidden="true"
        className={cn('absolute bottom-0 right-0 w-[42%] border-b-2 border-r-2', classes.corner, frameClass)}
      />
      <span className={cn('block font-serif uppercase', classes.name, textClass)}>Brahm</span>
      <span className={cn('block font-serif uppercase', classes.finance, financeClass)}>Finance</span>
    </span>
  );
}
