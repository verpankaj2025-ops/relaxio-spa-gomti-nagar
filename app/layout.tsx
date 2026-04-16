import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'https://relaxiospa.com'),
  title: {
    default: 'Best Spa in Gomti Nagar Lucknow | Relaxio Spa & Massage',
    template: '%s | Relaxio Spa Gomti Nagar'
  },
  description: 'Looking for the best spa in Gomti Nagar, Lucknow? Relaxio Spa offers premium Thai, Balinese, and Deep Tissue body massages near you. Book your session today!',
  keywords: ['Spa in Gomti Nagar Lucknow', 'Best Spa in Gomti Nagar', 'Massage Spa in Lucknow', 'Body Massage near me', 'Thai Massage Lucknow', 'Balinese Massage Lucknow', 'Deep Tissue Massage Lucknow'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Relaxio Spa',
    title: 'Best Spa in Gomti Nagar Lucknow | Relaxio Spa',
    description: 'Looking for the best spa in Gomti Nagar, Lucknow? Relaxio Spa offers premium Thai, Balinese, and Deep Tissue body massages near you.',
    images: [
      {
        url: 'https://picsum.photos/seed/luxury-spa-dark/1200/630',
        width: 1200,
        height: 630,
        alt: 'Relaxio Spa Gomti Nagar Lucknow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Spa in Gomti Nagar Lucknow | Relaxio Spa',
    description: 'Looking for the best spa in Gomti Nagar, Lucknow? Relaxio Spa offers premium Thai, Balinese, and Deep Tissue body massages near you.',
    images: ['https://picsum.photos/seed/luxury-spa-dark/1200/630'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#fdfbf7] text-stone-900 antialiased selection:bg-[#d4af37]/30" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
