import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'https://relaxiospa.in'),

  verification: {
    google: "fqsDy4r5bvC7t2LFbPsXD_h6SqzwN4GMD6ihrS1sDog",
  },

  title: {
    default: 'Best Spa in Gomti Nagar Lucknow | Relaxio Spa & Massage',
    template: '%s | Relaxio Spa Gomti Nagar'
  },

  description: 'Looking for the best spa in Gomti Nagar, Lucknow? Relaxio Spa offers premium Thai, Balinese, and Deep Tissue body massages near you. Book your session today!',

  keywords: [
    'Spa in Gomti Nagar Lucknow',
    'Massage Spa in Lucknow',
    'Body Massage near me',
    'Thai Massage Lucknow',
    'Balinese Massage Lucknow',
    'Deep Tissue Massage Lucknow'
  ],

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
        url: 'https://relaxiospa.in/images/spa.jpg',
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
    images: ['https://relaxiospa.in/images/spa.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#fdfbf7] text-stone-900 antialiased selection:bg-[#d4af37]/30" suppressHydrationWarning>

        {/* ✅ FINAL FIXED SCHEMA */}
        <Script
  id="schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://relaxiospa.in",
      name: "Relaxio Spa",
      url: "https://relaxiospa.in",
      telephone: "+917081891995",
      image: "https://relaxiospa.in/images/spa.jpg",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Gomti Nagar",
        addressLocality: "Lucknow",
        addressRegion: "UP",
        postalCode: "226010",
        addressCountry: "IN"
      },

      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "120"
      },

      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Rahul Sharma"
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5"
          },
          reviewBody: "Amazing experience and very relaxing environment."
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Priya Singh"
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4"
          },
          reviewBody: "Professional therapists and great ambience."
        }
      ]
    })
  }}
/>

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