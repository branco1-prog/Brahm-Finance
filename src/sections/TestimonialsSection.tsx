import { useState, useEffect, useCallback, useRef, type PointerEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    quote:
      'Brahm Finance provided the bridge financing we needed to complete a critical infrastructure project. Their speed of execution and professionalism set them apart from every other lender we\'ve worked with.',
    author: 'Managing Director, Construction Firm',
  },
  {
    quote:
      'Working with Brahm Finance transformed our cash-flow management. Their invoice discounting facility let us take on larger government contracts with real confidence.',
    author: 'CEO, Logistics & Supply Company',
  },
  {
    quote:
      'Their understanding of Nigeria\'s financial landscape — and the way they structure solutions around how our business actually runs — made all the difference.',
    author: 'Founder, Agricultural Processing Enterprise',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressValueRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const touchStartX = useRef(0);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === activeIndex) return;
      setIsTransitioning(true);
      setPrevIndex(activeIndex);
      setActiveIndex(index);
      progressValueRef.current = 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = '0%';
      }
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning, activeIndex]
  );

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % testimonials.length);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (isPaused || !isVisible) return;

    progressValueRef.current = 0;
    if (progressBarRef.current) {
      progressBarRef.current.style.width = '0%';
    }
    lastTimeRef.current = performance.now();

    const duration = 5000;

    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;

      const elapsed = time - lastTimeRef.current;
      progressValueRef.current = Math.min((elapsed / duration) * 100, 100);

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progressValueRef.current}%`;
      }

      if (elapsed >= duration) {
        lastTimeRef.current = time;
        progressValueRef.current = 0;
        const nextIndex = (activeIndex + 1) % testimonials.length;
        setPrevIndex(activeIndex);
        setActiveIndex(nextIndex);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 600);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPaused, isVisible, activeIndex]);

  const handlePointerDown = (e: PointerEvent) => {
    touchStartX.current = e.clientX;
  };

  const handlePointerUp = (e: PointerEvent) => {
    const delta = e.clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) nextSlide();
      else prevSlide();
    }
  };

  const getSlideStyle = (index: number) => {
    const isActive = index === activeIndex;
    const wasActive = index === prevIndex;

    if (isActive) {
      return { transform: 'translateX(0) scale(1)', opacity: 1 };
    }

    let direction = 1;
    if (wasActive) {
      const forward = activeIndex > prevIndex;
      const wrapForward = prevIndex === testimonials.length - 1 && activeIndex === 0;
      const wrapBackward = prevIndex === 0 && activeIndex === testimonials.length - 1;
      if (wrapForward) direction = -1;
      else if (wrapBackward) direction = 1;
      else direction = forward ? -1 : 1;
    } else {
      const forward = activeIndex > prevIndex;
      const wrapForward = prevIndex === testimonials.length - 1 && activeIndex === 0;
      const wrapBackward = prevIndex === 0 && activeIndex === testimonials.length - 1;
      const travelForward = wrapForward || (forward && !wrapBackward);
      if (index < activeIndex) direction = travelForward ? -1 : 1;
      else direction = travelForward ? 1 : -1;
    }

    return {
      transform: `translateX(${direction * 36}px) scale(0.98)`,
      opacity: 0,
    };
  };

  return (
    <section className="relative overflow-hidden bg-platinum section-padding">
      {/* Soft accent washes */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-navy/[0.05] blur-3xl" aria-hidden="true" />

      <div className="container-brahm relative z-10">
        <div
          ref={sectionRef}
          className={`${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block h-[2px] w-12 bg-navy mb-5" />
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.24em] text-navy/75 mb-3">
              Client Voices
            </p>
            <h2 className="text-charcoal">What our clients say.</h2>
          </div>

          <div
            className="max-w-[820px] mx-auto relative select-none rounded-3xl border border-line bg-paper p-6 sm:p-8 md:p-14 shadow-card"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Quote Mark */}
            <div className="text-center mb-6">
              <span className="font-serif text-[80px] md:text-[100px] text-navy/15 leading-none block -mb-4">
                &ldquo;
              </span>
            </div>

            {/* Slides */}
            <div className="relative min-h-[300px] sm:min-h-[260px] md:min-h-[200px]">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                const style = getSlideStyle(index);

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-600 ${
                      isActive ? 'z-10' : 'z-0'
                    }`}
                    style={{
                      ...style,
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                      willChange: 'transform, opacity',
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    <blockquote className="font-serif text-[19px] sm:text-[22px] md:text-[28px] text-charcoal leading-[1.5] md:leading-[1.45] text-center">
                      {testimonial.quote}
                    </blockquote>
                    <p className="font-sans text-[12px] md:text-[14px] uppercase tracking-[0.18em] md:tracking-[0.2em] text-navy/80 font-semibold text-center mt-6 md:mt-8 px-2">
                      {testimonial.author}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows (desktop) */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-line bg-paper text-navy items-center justify-center hover:bg-navy hover:text-white hover:border-navy hover:scale-105 transition-all duration-300 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-navy/60 focus-visible:ring-offset-2 focus-visible:ring-offset-platinum"
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-line bg-paper text-navy items-center justify-center hover:bg-navy hover:text-white hover:border-navy hover:scale-105 transition-all duration-300 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-navy/60 focus-visible:ring-offset-2 focus-visible:ring-offset-platinum"
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Progress Bar */}
            <div className="flex justify-center mt-8 mb-3">
              <div className="w-24 h-[2px] bg-line rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-navy transition-none"
                  style={{ width: '0%' }}
                />
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                    index === activeIndex
                      ? 'bg-navy scale-110'
                      : 'bg-transparent border border-navy/40 hover:border-navy/70'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
