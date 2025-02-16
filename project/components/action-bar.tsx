'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const actions = [
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Men', href: '#men' },
  { label: 'Women', href: '#women' },
  { label: 'Children', href: '#children' },
  { label: 'Collections', href: '#collections' },
  { label: 'Sale', href: '#sale' },
];

export function ActionBar() {
  const [activeSection, setActiveSection] = useState('');
  const [prevSection, setPrevSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPrevSection(activeSection);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    actions.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const getDirection = (current: string, previous: string) => {
    const currentIndex = actions.findIndex(a => a.href.slice(1) === current);
    const previousIndex = actions.findIndex(a => a.href.slice(1) === previous);
    return currentIndex > previousIndex ? 1 : -1;
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black rounded-full p-1.5 shadow-lg z-50">
      <div className="flex items-center gap-1 relative">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeSection}
            className="absolute inset-0 bg-white rounded-full"
            initial={{ x: getDirection(activeSection, prevSection) * 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: getDirection(activeSection, prevSection) * -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </AnimatePresence>
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="ghost"
            className={cn(
              'rounded-full relative z-10 transition-colors duration-200',
              activeSection === action.href.slice(1)
                ? 'text-black'
                : 'text-gray-400 hover:text-white'
            )}
            onClick={() => {
              document.querySelector(action.href)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
}