'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function Collections() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power4.out',
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power4.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-neutral-100 py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 ref={headingRef} className="text-6xl font-black uppercase mb-8 tracking-tight">
              Autumn/Winter<br />Collection 2025
            </h2>
            <div ref={textRef} className="space-y-6 text-neutral-600">
              <p className="text-xl">
                Discover our latest collection that combines timeless elegance with modern sophistication.
                Each piece is crafted with meticulous attention to detail and premium materials.
              </p>
              <p>
                From luxurious cashmere sweaters to perfectly tailored suits, our new collection
                offers versatile pieces that transition seamlessly from day to evening.
              </p>
              <div className="pt-8">
                <Button variant="default" size="lg" className="bg-black text-white hover:bg-black/90">
                  View Collection
                </Button>
              </div>
            </div>
          </div>
          <div ref={imageRef} className="relative">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
              alt="Autumn/Winter Collection"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl">
              <p className="text-sm font-medium text-neutral-500">Featured in</p>
              <p className="text-xl font-bold">Vogue Magazine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}