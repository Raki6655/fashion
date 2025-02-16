'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function ChildrenSection() {
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
    <section ref={sectionRef} id="children" className="min-h-screen bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={contentRef}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-7xl font-black uppercase tracking-tight mb-8">
              Children's Collection
            </h2>
            <p className="text-xl text-neutral-600">
              Discover our delightful range of children's wear, crafted with the same attention
              to quality and style as our adult collections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Little Explorers',
                age: '2-6 Years',
                image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80',
              },
              {
                title: 'Young Adventurers',
                age: '7-12 Years',
                image: 'https://images.unsplash.com/photo-1622290291289-a6c8a7b83824?auto=format&fit=crop&q=80',
              },
              {
                title: 'Teen Style',
                age: '13-16 Years',
                image: 'https://images.unsplash.com/photo-1622290291427-6661e83b5f8e?auto=format&fit=crop&q=80',
              },
            ].map((collection) => (
              <div key={collection.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold">{collection.title}</h3>
                <p className="text-neutral-600">{collection.age}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Shop Children's Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}