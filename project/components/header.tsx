'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { 
    label: 'New Arrivals',
    href: '/new-arrivals',
    items: ['Spring Collection', 'Summer Preview', 'Limited Edition']
  },
  { 
    label: 'Men',
    href: '/men',
    items: ['Suits', 'Shirts', 'Trousers', 'Accessories']
  },
  { 
    label: 'Women',
    href: '/women',
    items: ['Dresses', 'Tops', 'Skirts', 'Accessories']
  },
  { 
    label: 'Collections',
    href: '/collections',
    items: ['Luxury Line', 'Casual Wear', 'Sport Elegance']
  },
  { 
    label: 'Sale',
    href: '/sale',
    items: ['Seasonal Sale', 'Clearance', 'Special Offers']
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full bg-white z-50 transition-all duration-300',
        isScrolled && 'shadow-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold">
            LUXE.
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <div
                key={category.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(category.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={category.href}
                  className="text-sm font-medium hover:text-neutral-600 transition-colors"
                >
                  {category.label}
                </Link>
                <AnimatePresence>
                  {openDropdown === category.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px]"
                    >
                      {category.items.map((item) => (
                        <Link
                          key={item}
                          href={`${category.href}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="Search collections..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Account</Button>
            <Button variant="ghost">Cart (0)</Button>
            <Button variant="default" className="bg-black text-white">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}