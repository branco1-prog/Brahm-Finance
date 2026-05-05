import { useEffect, useState, useRef } from 'react';

// Counter ease: cubic-bezier(0.784, 0.325, 0.222, 0.98)
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

interface UseCountUpOptions {
  target: number;
  duration?: number;
  isVisible: boolean;
  suffix?: string;
}

export function useCountUp({ target, duration = 2000, isVisible, suffix = '' }: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentCount = Math.floor(easedProgress * target);

      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, target, duration]);

  return `${count}${suffix}`;
}
