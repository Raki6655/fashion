'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function WomenSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="women" className="min-h-screen bg-neutral-100 py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80"
              alt="Women's Collection"
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
              alt="Women's Collection"
              className="rounded-lg w-full h-[400px] object-cover mt-8"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-7xl font-black uppercase tracking-tight">
              Women's<br />Collection
            </h2>
            <p className="text-xl text-neutral-600">
              Elevate your wardrobe with our women's collection. From elegant evening wear
              to contemporary casual pieces, discover fashion that empowers.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-black/90">
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
                View Lookbook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}