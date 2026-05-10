import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  target: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}

export default function StatCounter({ target, suffix, label, isVisible }: StatCounterProps) {
  const displayValue = useCountUp({ target, suffix, isVisible, duration: 2000 });

  return (
    <div className="text-center group">
      <div className="font-serif text-[44px] md:text-[48px] text-navy transition-transform duration-300 group-hover:scale-[1.03]">
        {displayValue}
      </div>
      <div className="font-sans text-[13px] text-charcoal/60 mt-3 uppercase tracking-[0.18em] font-semibold">
        {label}
      </div>
    </div>
  );
}
