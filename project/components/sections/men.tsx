'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function MenSection() {
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
    <section ref={sectionRef} id="men" className="min-h-screen bg-neutral-900 text-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-7xl font-black uppercase tracking-tight">
              Men's<br />Collection
            </h2>
            <p className="text-xl text-neutral-400">
              Discover our curated selection of premium menswear, from impeccably tailored suits
              to casual luxury essentials. Each piece embodies sophistication and style.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Lookbook
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80"
              alt="Men's Collection"
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80"
              alt="Men's Collection"
              className="rounded-lg w-full h-[400px] object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}