'use client';

import { Instagram, Facebook, Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">LUXE.</h3>
            <p className="text-neutral-400 mb-6">
              Redefining luxury fashion with timeless elegance and contemporary design since 1925.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Men</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Women</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Children</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Help</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-neutral-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/10 text-white placeholder:text-neutral-500"
              />
              <Button variant="default" className="bg-white text-black hover:bg-white/90">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © 2025 LUXE. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}