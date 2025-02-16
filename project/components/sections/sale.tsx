'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function SaleSection() {
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
    <section ref={sectionRef} id="sale" className="min-h-screen bg-red-50 py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={contentRef}>
          <div className="text-center mb-16">
            <h2 className="text-7xl font-black uppercase tracking-tight text-red-600 mb-4">
              Seasonal Sale
            </h2>
            <p className="text-2xl text-neutral-600">
              Up to 50% off on selected items
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Summer Dresses',
                discount: '40% OFF',
                price: '$299',
                originalPrice: '$499',
                image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
              },
              {
                title: 'Casual Suits',
                discount: '30% OFF',
                price: '$699',
                originalPrice: '$999',
                image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80',
              },
              {
                title: 'Designer Bags',
                discount: '50% OFF',
                price: '$499',
                originalPrice: '$999',
                image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
              },
              {
                title: 'Accessories',
                discount: '25% OFF',
                price: '$149',
                originalPrice: '$199',
                image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80',
              },
            ].map((item) => (
              <div key={item.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full">
                    {item.discount}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">{item.price}</span>
                  <span className="text-neutral-400 line-through">{item.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
              Shop All Sale Items
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}