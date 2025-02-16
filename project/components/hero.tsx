'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 text-center">
        <div className="space-y-2 mb-8">
          <p className="text-xs uppercase tracking-wider text-gray-400">
            Spring Collection 2025
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="px-3 py-1 rounded-full text-sm bg-white/10 backdrop-blur-sm">
              New Arrival
            </span>
          </div>
        </div>

        <h1 
          ref={headingRef}
          className="mainText text-[80px] font-black uppercase leading-none tracking-wide text-white max-w-7xl mx-auto mb-12"
        >
          Elegance Redefined
        </h1>

        <p 
          ref={subtitleRef}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Discover our latest collection of premium clothing, where sophistication meets contemporary design.
        </p>

        <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90">
          Explore Collection
        </Button>
      </div>
    </div>
  );
}