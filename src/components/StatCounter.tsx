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
      <div className="font-serif text-[48px] text-navy transition-transform duration-300 group-hover:scale-105">
        {displayValue}
      </div>
      <div className="font-sans text-[14px] text-charcoal/68 mt-2 transition-colors duration-300 group-hover:text-charcoal/85">
        {label}
      </div>
    </div>
  );
}
