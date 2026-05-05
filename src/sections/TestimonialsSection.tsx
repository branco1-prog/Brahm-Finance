import { useState, useEffect, useCallback, useRef, type PointerEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    quote:
      'Brahm Finance provided the bridge financing we needed to complete a critical infrastructure project. Their speed of execution and professional approach set them apart from every other lender we\'ve worked with.',
    author: 'Managing Director, Construction Firm',
  },
  {
    quote:
      'Working with Brahm Finance transformed our cash flow management. Their invoice discounting facility allowed us to take on larger government contracts with confidence.',
    author: 'CEO, Logistics & Supply Company',
  },
  {
    quote:
      'The team\'s deep understanding of Nigeria\'s financial landscape and their commitment to structuring solutions that work for our business made all the difference.',
    author: 'Founder, Agricultural Processing Enterprise',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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
      setActiveIndex(index);
      progressValueRef.current = 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = '0%';
      }
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, activeIndex]
  );

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % testimonials.length);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, goToSlide]);

  // Auto-advance with progress using requestAnimationFrame
  useEffect(() => {
    if (isPaused || !isVisible) return;

    progressValueRef.current = 0;
    if (progressBarRef.current) {
      progressBarRef.current.style.width = '0%';
    }
    lastTimeRef.current = performance.now();

    const duration = 5000;

    const animate = (time: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = time;
      }
      
      const elapsed = time - lastTimeRef.current;
      progressValueRef.current = Math.min((elapsed / duration) * 100, 100);
      
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progressValueRef.current}%`;
      }

      if (elapsed >= duration) {
        lastTimeRef.current = time;
        progressValueRef.current = 0;
        setActiveIndex((current) => (current + 1) % testimonials.length);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
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

  return (
    <section className="relative overflow-hidden bg-slatebrand section-padding">
      <div
        className="absolute inset-x-0 top-0 h-20 bg-paper"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 100%)' }}
      />
      <div className="container-brahm">
        <div
          ref={sectionRef}
          className={`${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <h2 className="text-white text-center mb-16">What Our Clients Say</h2>

          <div
            className="max-w-[800px] mx-auto relative select-none"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Quote Mark */}
            <div className="text-center mb-8">
              <span className="font-serif text-[80px] md:text-[100px] text-white/10 leading-none block -mb-4">
                &ldquo;
              </span>
            </div>

            {/* Testimonial Slides */}
            <div className="relative min-h-[220px] md:min-h-[180px]">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                const direction = index > activeIndex ? 1 : -1;
                
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    style={{
                      transform: isActive ? 'translateX(0)' : `translateX(${direction * 30}px)`,
                    }}
                  >
                    <blockquote className="font-serif text-[22px] md:text-[28px] text-white leading-[1.45] text-center">
                      {testimonial.quote}
                    </blockquote>
                    <p className="font-sans text-[16px] text-white/68 text-center mt-8">
                      &mdash; {testimonial.author}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows (desktop) */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/45 text-white items-center justify-center hover:bg-white hover:text-slatebrand hover:border-white hover:scale-110 transition-all duration-250 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/45 text-white items-center justify-center hover:bg-white hover:text-slatebrand hover:border-white hover:scale-110 transition-all duration-250 cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Progress Bar */}
            <div className="flex justify-center mt-8 mb-3">
              <div className="w-24 h-[2px] bg-white/20 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-white/70 transition-none"
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
                      ? 'bg-white scale-110'
                      : 'bg-transparent border border-white/50 hover:border-white/80'
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
