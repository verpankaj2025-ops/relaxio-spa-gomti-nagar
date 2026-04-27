import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const SITE_URL = "https://relaxiospa.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  icons: {
  icon: "/favicon.ico",
},

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
  canonical: SITE_URL,
},

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
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
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#fdfbf7] text-stone-900 antialiased selection:bg-[#d4af37]/30" suppressHydrationWarning>

        {/* ✅ FINAL FIXED SCHEMA */}
        <Script
  id="schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["Spa", "HealthAndBeautyBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#spa`,
      name: "Relaxio Spa",
      url: SITE_URL,
      telephone: "+917081891995",
      priceRange: "₹1499 - ₹8999",
      image: `${SITE_URL}/images/luxury-spa-gomti-nagar-lucknow.webp`,

      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, 4/526, Vivek Khand 4",
        addressLocality: "Lucknow",
        addressRegion: "UP",
        postalCode: "226010",
        addressCountry: "IN"
      },

      geo: {
  "@type": "GeoCoordinates",
  latitude: 26.8553677,
  longitude: 80.9985092
},
hasMap:
  "https://www.google.com/maps/dir/?api=1&destination=26.8553677,80.9985092",

      openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
    ],
    opens: "11:00",
    closes: "21:00"
  }
],

aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "120"
      },

areaServed: [
  { "@type": "Place", name: "Gomti Nagar" },
  { "@type": "Place", name: "Lucknow" },
  { "@type": "Place", name: "Vivek Khand" },
  { "@type": "Place", name: "Indira Nagar" },
  { "@type": "Place", name: "Patrakarpuram" },
  { "@type": "Place", name: "Chinhut" },
],

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

<Script
  id="website-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Relaxio Spa",
      publisher: {
        "@id": `${SITE_URL}/#spa`
      }
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