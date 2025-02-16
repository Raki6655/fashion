import { Hero } from '@/components/hero';
import { BrandMarquee } from '@/components/brand-marquee';
import { ActionBar } from '@/components/action-bar';
import { NewArrivals } from '@/components/sections/new-arrivals';
import { MenSection } from '@/components/sections/men';
import { WomenSection } from '@/components/sections/women';
import { ChildrenSection } from '@/components/sections/children';
import { Collections } from '@/components/sections/collections';
import { SaleSection } from '@/components/sections/sale';
import { BrandStory } from '@/components/sections/brand-story';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandMarquee />
      <NewArrivals />
      <MenSection />
      <WomenSection />
      <ChildrenSection />
      <Collections />
      <SaleSection />
      <BrandStory />
      <ActionBar />
    </main>
  );
}