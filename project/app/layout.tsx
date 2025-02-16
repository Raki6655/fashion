import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ClientLenis } from '@/components/client-lenis';
import { Loader } from '@/components/loader';

const inter = Inter({ subsets: ['latin'] });
const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LUXE - Premium Clothing',
  description: 'Discover our collection of premium clothing and accessories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader />
        <ClientLenis />
        <Header />
        <div className={bebasNeue.className}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}